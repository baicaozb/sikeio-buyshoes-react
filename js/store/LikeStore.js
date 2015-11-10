const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _likeItems = {
  // "jameson-vulc": {
  //   id: "jameson-vulc"
  // },
};

module.exports = {

  addItem(product) {
    //console.log(product);

    _likeItems[product.id] = product;

    //console.log(_likeItems);

    emitChange();
  },

  removeItem(pid) {
    //console.log(pid);

    delete _likeItems[pid];
    emitChange();

    //console.log(_cartItems);
  },

  toggleItem(product) {

    let pid = product.id;
    if(_likeItems[pid])
      delete _likeItems[pid];
    else
      _likeItems[product.id] = product;

    emitChange();

  },


  likeItems(){
    return _likeItems;
  },

  getLikeItems(){
    return _likeItems;
  },


  getItem(pid){
    return _likeItems[pid];
  },


  addChangeListener(callback) {
    emitter.addListener("change", callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change", callback)
  },
}