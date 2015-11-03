


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
                        <Products/>
                    </div> {/* site__content */}
                </div> {/* site__main */}
                <div className="site__right-sidebar">
                    <Cart/>
                    <Checkout/>
                </div> {/* site__right-sidebar */}
                <a className="site__right-sidebar-toggle">
                    <img src="img/arrow-icon.svg" />
                </a>
                </div> {/* site */}
            </div>
        );
    }
});

let SiteTitle = React.createClass({
   render() {
       return(
           <div class="title">
               <h2>Buy Me Shoes</h2>
               <img class="title__heart" src="img/heart.svg"/>
           </div>
       );
   }
});


let Product = React.createClass({
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
});


let Products = React.createClass({
    render() {

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
});


let CartItem = React.createClass({
    render: function() {
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

    }
});


let cartItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        quantity: 1,
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        quantity: 2,
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        quantity: 2,
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        quantity: 1,
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        quantity: 1,
    },
};


let Cart = React.createClass({


    componentDidMount() {
        let cart = React.findDOMNode(this.refs.cart);
        Ps.initialize(cart);
    },

    render() {

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
});



var Checkout = React.createClass({
    render: function() {
        return (

            <div className="checkout">
                <hr className="checkout__divider" />
                <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Discount
                    </div>
                    <div className="checkout__line__amount">
                        -$90
                    </div>
                </div>
                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Subtotal
                    </div>
                    <div className="checkout__line__amount checkout__line__amount--strikeout">
                        $450
                    </div>
                </div>
                <div className="checkout__line">
                    <div className="checkout__line__amount checkout__line__amount--omg-savings">
                        $360
                    </div>
                </div>
                <a className="checkout__button">
                    <img className="checkout__button__icon" src="img/cart-icon.svg" />
                    <div className="checkout__button__label">
                        Checkout
                    </div>
                </a>
            </div>

        );
    }
});



let QuantityControl = React.createClass({
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
});




window.onload = () => {
    React.render(<App/>, document.querySelector("#root"));
}

