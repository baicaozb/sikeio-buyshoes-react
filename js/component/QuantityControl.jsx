import React from 'react';
import CartStore from '../store/CartStore.js'


class QuantityControl extends React.Component
{
  add() {
    CartStore.addItemQuantity(this.props.pid);
  }

  sub() {
    CartStore.subItemQuantity(this.props.pid);
  }

  render() {
    let quantity = this.props.quantity;
    let className = this.props.style ?
      "adjust-qty adjust-qty--gray" : "adjust-qty";

    return(
      <div className={className}>
        <a className="adjust-qty__button"
           onClick={this.sub.bind(this)}
          >
          -
        </a>

         <div className="adjust-qty__number">{quantity}</div>
        <a className="adjust-qty__button"
           onClick={this.add.bind(this)}
          >
          +
        </a>
      </div>
    );
  }
}

export default QuantityControl;