var React = require('react');

var HelloMessage = React.createClass({
  componentDidMount: function() {
    console.log(this.props);
  },
  render: function() {
    return (
      <div className="HelloMessage">
        <div>
          <img className="shop-img" src={this.props.data.pictures[0]} />
        </div>
        <section className="pg-good-b">
          <h1>{this.props.data.ddd}</h1>
          <div className="pg-price clr">
            <div className="pg-price-l l">
              <strong className="l">¥</strong>
              <strong className="l">{this.props.data.sale_price}</strong>
            </div>
            <div className="pg-price-r l">
              <div className="pg-price-r-b clr">
                <div className="l">市场价：</div>
                <del className="l"><span className="l">￥{this.props.data.market_price}</span></del>
                <div className="pg-price-r-sale l">
                  <span>4.9折</span>
                </div>
              </div>
            </div>
            <span className="pg-price-r-freepost r">包邮</span>
          </div> 
          <h1>{this.props.data.inventory_caption}</h1>
          <p className="pg-good-intro-content">{this.props.data.inventory_desc}</p>
          <div className="pg-good-logistics clr">
            <i></i>
            <span>&nbsp;保税仓发货&nbsp;&nbsp;预计3-5天送达</span>
          </div>
        </section>
      </div>
    )
  }
});

module.exports = HelloMessage;