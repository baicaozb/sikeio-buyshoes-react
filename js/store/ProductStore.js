import {shoes,cartItems} from '../data.js';
import LikeStore from './LikeStore.js'

const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _products = shoes;
let _showOnlyLike = false;

module.exports = {

  products() {
    return _products;
  },

  filteredProducts() {
    if( _showOnlyLike ) {
      let liked = LikeStore.likeItems();
      let products = Object.keys(liked).map( (id) => {return _products[id]})
      return products;
    }else {
      return _products;
    }
  },


  toggleShowOnlyLike() {
    _showOnlyLike = _showOnlyLike ? false : true;
    emitChange();
  },

  showOnlyLike() {
    return _showOnlyLike;
  },


  addChangeListener(callback) {
    emitter.addListener("change", callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change", callback)
  },
}