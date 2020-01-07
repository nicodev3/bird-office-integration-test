import ProductService from '@/services/productService.js'

/* state is equivalent to data
 * the object contains all
 * reactive datas
 */
export const state = () => ({
  products: [],
  product: {},
  counter: 0
})

/* MUTATIONS are responsible for the state changes */
export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
  UPDATE_PRODUCT(state, counter) {
    state.counter = counter
  }
}

/* ACTIONS are responsible for when the MUTATIONS should fire */
export const actions = {
  fetchProducts({ commit }) {
    return ProductService.getProducts().then((response) => {
      commit('SET_PRODUCTS', response.data)
    })
  },
  fetchProduct({ commit }, id) {
    return ProductService.getProduct(id).then((response) => {
      commit('SET_PRODUCT', response.data)
    })
  },
  updateProduct({ commit }, id) {
    return ProductService.updateProduct(id).then((response) => {
      commit('UPDATE_PRODUCT', response.data)
    })
  }
}
