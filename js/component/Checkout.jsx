import React from 'react';
import CartStore from '../store/CartStore.js'


class Checkout extends React.Component {

  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  }


  render() {

    let items = CartStore.valueArray();

    let sum = 0;
    if( items.length > 0 )
    {
      sum = items.reduce( (sum, item)=> {
        return sum + item.price * item.quantity;
      }, 0).toFixed(2);
    }


    return (
      <div className="checkout">
        <hr className="checkout__divider"/>
        <input type="text" className="checkout__coupon-input" placeholder="coupon code"/>

        <div className="checkout__line">
          <div className="checkout__line__label">
            Discount
          </div>
          <div className="checkout__line__amount">
            -$0.00
          </div>
        </div>
        <div className="checkout__line">
          <div className="checkout__line__label">
            Subtotal
          </div>
          <div className="checkout__line__amount ">
            {'$' + sum}
          </div>
        </div>
        <div className="checkout__line">
          <div className="checkout__line__amount checkout__line__amount--omg-savings">
            {'$' + sum}
          </div>
        </div>
        <a className="checkout__button">
          <img className="checkout__button__icon" src="img/cart-icon.svg"/>

          <div className="checkout__button__label">
            Checkout
          </div>
        </a>
      </div>

    );
  }
}

export default Checkout;