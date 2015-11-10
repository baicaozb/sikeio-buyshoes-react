import React from "react";
import ProductStore from '../store/ProductStore.js';
import connect from './connect.jsx'


class SiteTitle extends React.Component
{
  toggleShowOnlyLike(e){
    ProductStore.toggleShowOnlyLike();
  }


  render() {

    let showOnlyLike = this.props.showOnlyLike;
    let heartIcon = showOnlyLike ? "img/heart-liked.svg" : "img/heart.svg";

    return(
      <div class="title">
        <h2>Buy Me Shoes</h2>
        <img class="title__heart" src={heartIcon}
          onClick={this.toggleShowOnlyLike.bind(this)} />
      </div>
    );
  }

}


class ConnectedSiteTitle extends SiteTitle {}

ConnectedSiteTitle = connect(ProductStore, "showOnlyLike")(ConnectedSiteTitle);

export default ConnectedSiteTitle;
