import React from "react";
import QuantityControl from './QuantityControl.jsx'

import Ps from 'perfect-scrollbar';
import CartStore from '../store/CartStore.js'

class CartItem extends React.Component
{

  removeSelfHandler() {
    CartStore.removeItem(this.props.line.id);
  }

  render() {
  var {id, name, imagePath, price, quantity} = this.props.line;

      return (
    <div className="cart-item">
      <div className="cart-item__top-part">
        <div className="cart-item__image">
          <img src={imagePath} />
        </div>
        <div className="cart-item__top-part__middle">
          <div className="cart-item__title">
            {name}
          </div>
          <div className="cart-item__price">
            {'$' + price}
          </div>
        </div>
        <img className="cart-item__trash" src="img/trash-icon.svg"
          onClick={this.removeSelfHandler.bind(this)}
          />
      </div> {/* cart-item__top-part */}
      <QuantityControl  quantity={quantity} pid={id}/>
    </div>
  );
}

}




class Cart extends React.Component
{


  componentDidMount() {
    let cart = React.findDOMNode(this.refs.cart);
    Ps.initialize(cart);

    CartStore.addChangeListener(this.forceUpdate.bind(this));
  }

  render() {

    let cartItems = CartStore.getCartItems();
    let ids = Object.keys(cartItems);
    let items = ids.map((id, index) => {
      return <CartItem key={index} line={cartItems[id]} />
    })


    return(
      <div className="cart">
        <h3 className="cart__title">Shopping Cart</h3>
        <div className="cart__content" ref="cart">
          {items}
        </div>
      </div>
    );


  }
}

export default Cart;


