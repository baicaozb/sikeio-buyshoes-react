import React from "react";

class Product extends React.Component
{
  render() {

    let {name, price, imagePath} = this.props.product;
    return (
      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath} />
          </div>
          <a className="product__add">
            <img className="product__add__icon" src="img/cart-icon.svg" />
          </a>
          <div className="product__price">
            ${price}
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