var React  = require('react');
var $ = require('jquery');

var shopDescData = require('../data/shopDescData.js');

// var shopDescData = {shopDescData: {pictures:[]}};
// console.log(myServerData);

var ShopDescStyle = {
  minHeight: '320px',
  overflow: 'hidden'
};

var ShopDesc = React.createClass({
  getInitialState: function() {
    return {data: {pictures:[]}};
  },
  loadFromServer: function() {
    $.ajax({
      type: "GET",
      url: "www.baiduee.com",
      success: function(jsn) {
        console.log(jsn);
        this.setState({data:shopDescData.shopDescData});

      }
    });
  },
  componentDidMount: function() {
    // this.loadFromServer();
    // alert('aa');
  }, 
  render: function() {
    console.log(this.props);
    return (
      <div>
        <div>
          <img className="shop-img" style={ShopDescStyle} src={this.state.data.pictures[0]} />
        </div>
        <section className="pg-good-b">
          <h1>{this.props.data}</h1>
          <div className="pg-price clr">
            <div className="pg-price-l l">
              <strong className="l">¥</strong>
              <strong className="l">{this.state.data.sale_price}</strong>
            </div>
            <div className="pg-price-r l">
              <div className="pg-price-r-b clr">
                <div className="l">市场价：</div>
                <del className="l"><span className="l">￥{this.state.data.market_price}</span></del>
                <div className="pg-price-r-sale l">
                  <span>4.9折</span>
                </div>
              </div>
            </div>
            <span className="pg-price-r-freepost r">包邮</span>
          </div>
          <h1>{this.state.data.inventory_caption}</h1>
          <p className="pg-good-intro-content">{this.state.data.inventory_desc}</p>
          <div className="pg-good-logistics clr">
            <i></i>
            <span>&nbsp;保税仓发货&nbsp;&nbsp;预计3-5天送达</span>
          </div>
        </section>
      </div>
    )
  }
});

var Shop = React.createClass({
  render: function() {
    return (
      <div className="Shop">
        <section id="pg-good">
          <ShopDesc />    
        </section>
      </div>
    )
  }
});

module.exports = Shop;