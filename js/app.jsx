import React from "react";
import SiteTitle from "./component/SiteTitle.jsx";
import Products from "./component/Products.jsx";
import Cart from "./component/Cart.jsx";
import Checkout from "./component/Checkout.jsx";



let App = React.createClass({
    render() {
        return (
            <div>
                <div className="site">
                <div className="bg">
                    <div className="bg__img">
                    </div>
                </div>
                <div className="site__main">
                    <div className="site__left-sidebar">
                        <SiteTitle/>
                    </div>
                    <div className="site__content">
                        <Products />
                    </div>
                </div>
                <div className="site__right-sidebar">
                    <Cart />
                    <Checkout/>
                </div>
                <a className="site__right-sidebar-toggle">
                    <img src="img/arrow-icon.svg" />
                </a>
                </div>
            </div>
        );
    }
});

window.onload = () => {
    React.render(<App/>, document.querySelector("#root"));
}


