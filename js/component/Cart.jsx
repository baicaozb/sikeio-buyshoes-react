import React from "react";

class CartItem extends React.Component
{
  render() {
  var {id, quantity} = this.props.line;

  return (
    <div className="cart-item">
      <div className="cart-item__top-part">
        <div className="cart-item__image">
          <img src="img/shoe1.jpg" />
        </div>
        <div className="cart-item__top-part__middle">
          <div className="cart-item__title">
            {id}
          </div>
          <div className="cart-item__price">
            $299
          </div>
        </div>
        <img className="cart-item__trash" src="img/trash-icon.svg" />
      </div> {/* cart-item__top-part */}
      <QuantityControl  quantity={quantity}/>
    </div>
  );
}

}

class QuantityControl extends React.Component
{
  render() {
    var quantity = this.props.quantity;
    return(
      <div className="adjust-qty">
        <a className="adjust-qty__button">-</a>

        <div className="adjust-qty__number">{quantity}</div>
        <a className="adjust-qty__button">+</a>
      </div>
    );
  }
}



class Cart extends React.Component
{


  componentDidMount() {
    let cart = React.findDOMNode(this.refs.cart);
    Ps.initialize(cart);
  }

  render() {

    let cartItems = this.props.data;
    let names = Object.keys(cartItems);
    let items = names.map((name, index) => {
      return <CartItem key={index} line={cartItems[name]} />
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


