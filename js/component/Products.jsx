import React from "react";
import QuantityControl from './QuantityControl.jsx'

import CartStore from "../store/CartStore.js"
import LikeStore from "../store/LikeStore.js"
import ProductStore from "../store/ProductStore.js"

import connect from './connect.jsx'




class Product extends React.Component
{

  addProductHandler(e){
    CartStore.addItem(this.props.product);
  }

  addLikeHandler(e) {
    LikeStore.toggleItem(this.props.product);
  }


  render() {

    let {id, name, price, imagePath} = this.props.product;

    let addIcon =
      <a className="product__add" href="#" onClick={this.addProductHandler.bind(this)}>
        <img className="product__add__icon" src="img/cart-icon.svg" />
      </a>;

    let cartItems = this.props.cartItems;
    let item = cartItems[id];
    if( item != null ) {
      addIcon = <QuantityControl quantity={item.quantity} pid={id} style="gray"/>;
    }

    let likeItems = this.props.likeItems;
    let heartIcon = likeItems && likeItems[id] ? "img/heart-liked.svg" : "img/heart.svg";

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
          <img className="product__heart" src={heartIcon} onClick={this.addLikeHandler.bind(this)}/>
        </div>
      </div>
    );
  }

}


class Products extends React.Component
{

  render() {

    let shoes = this.props.filteredProducts;
    let cartItems = this.props.cartItems;
    let likeItems = this.props.likeItems;
    let ids = Object.keys(shoes);


    let products = ids.map((id, index) => {
      return <Product key={index} product={shoes[id]}
                      cartItems={cartItems} likeItems={likeItems}/>
    })


    return(
      <div className="products">
        {products}
      </div>
    );
  }
}

//@connect(CartStore, "cartItems")
//@connect(LikeStore, "likeItems")
class ConnectedProducts extends Products {}

ConnectedProducts = connect(CartStore, "cartItems")(ConnectedProducts);
ConnectedProducts = connect(LikeStore, "likeItems")(ConnectedProducts);
ConnectedProducts = connect(ProductStore, "filteredProducts")(ConnectedProducts);


export default ConnectedProducts;