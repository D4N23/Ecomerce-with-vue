import axios from 'axios';
import { createStore } from 'vuex'

const api = "https://fakestoreapi.com/products"

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    loadProductsMutation(state, products){
      console.log(products)
        state.products = products;
    },
    addToBagMutation(state, product){
      state.productsInBag.push(product);
    },
    removeFromBagMutation(state, productId){
        var updatedBag = state.productsInBag.filter(item => productId != item.id);
        state.productsInBag = updatedBag;
    }
  },
  actions: {
    loadProducts({commit}){
      axios
      .get(api)
      .then(response =>{
        commit('loadProductsMutation', response.data);
      })
    },
    addToBagAction({commit}, product){
      commit('addToBagMutation', product)
    },
    removeFromBagAction({commit},productId){
      if(confirm('Are you sure to remove the item from bag?')){
        commit('removeFromBagMutation', productId);
      }
    }

  },
  modules: {
  }
})
