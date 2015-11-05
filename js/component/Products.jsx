import React from "react";
import QuantityControl from './QuantityControl.jsx'

import CartStore from "../store/CartStore.js"


class Product extends React.Component
{

  addProductHandler(e){
    CartStore.addItem(this.props.product)
  }

  render() {

    let {id, name, price, imagePath} = this.props.product;

    let addIcon =
      <a className="product__add" href="#" onClick={this.addProductHandler.bind(this)}>
        <img className="product__add__icon" src="img/cart-icon.svg" />
      </a>;

    let item = CartStore.getItem(id);
    if( item != null ) {
      addIcon = <QuantityControl quantity={item.quantity} pid={id} style="gray"/>;
    }


    return (
      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath} />
          </div>
          <div className="product__control">
            {addIcon}
          </div>
          <div className="product__price">
            {'$'+price}
          </div>
        </div>
        <div className="product__description">
          <div className="product__name">
            {name}
          </div>
          <img className="product__heart" src="img/heart.svg" />
        </div>
      </div>
    );
  }

}


class Products extends React.Component
{

  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  }

  render() {
    let shoes = this.props.data;
    let names = Object.keys(shoes);
    let products = names.map((name, index) => {
      return <Product key={index} product={shoes[name]} />
    })


    return(
      <div className="products">
        {products}
      </div>
    );
  }
}



export default Products;