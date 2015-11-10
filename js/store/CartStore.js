const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _cartItems = {
  // "jameson-vulc": {
  //   id: "jameson-vulc",
  //   quantity: 1,
  // },
};

module.exports = {

  addItem(product) {
    //console.log(product);

    product.quantity = 1;
    _cartItems[product.id] = product;

    //console.log(_cartItems);

    emitChange();
  },

  removeItem(pid) {
    //console.log(pid);

    delete _cartItems[pid];
    emitChange();

    //console.log(_cartItems);
  },

  addItemQuantity(pid) {
    let item = _cartItems[pid];

    //console.log(pid, item)

    if( item != null ) {
      item.quantity = item.quantity + 1;
      emitChange();
    }
  },

  subItemQuantity(pid) {
    let item = _cartItems[pid];
    if( item != null ) {
      if( item.quantity > 1)
      {
        item.quantity = item.quantity - 1;
        emitChange();
      }
    }
  },

  valueArray()
  {
    return Object.keys(_cartItems).map(
      (id) =>{
        return _cartItems[id];
      }
    );
  },


  cartItems(){
    return _cartItems;
  },

  getCartItems(){
    return _cartItems;
  },



  getItem(pid){
    return _cartItems[pid];
  },


  addChangeListener(callback) {
    emitter.addListener("change", callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change", callback)
  },
}