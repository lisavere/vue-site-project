import { createStore } from 'vuex'

export default createStore({
  state: {
    selected:[],
    favorites: [1, 2],
    // -- вынести в отдельные модули
    products: [
      {
        id: 1, group: 1, name: 'Филадельфия',
        description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: '1500', mass: '240'
      },
      {
        id: 2, group: 1, name: 'Темпура',
        description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: '1500', mass: '240'
      },
      {
        id: 3, group: 2, name: 'Wok с курицей',
        description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: '1500', mass: '240'
      },
      {
        id: 4, group: 2, name: 'Wok морской',
        description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: '1500', mass: '240'
      },
      {
        id: 5, group: 3, name: 'Цезарь',
        description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: '1500', mass: '240'
      },
      {
        id: 6, group: 3, name: 'Витаминный',
        description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: '1500', mass: '240'
      },
      {
        id: 7, group: 4, name: 'Царская',
        description: 'Огурец, авокадо, помидор, болгарский перец, листья салата, кунжут', price: '1500', mass: '240'
      }
    ]
  },
  getters: {
    // получить все избранные
  },
  mutations: {
    addFavorite(state, id) {
      state.favorites.push(id);
    },
    removeFavorite(state, productId) {
      state.favorites = state.favorites.filter(function (item) {
        return item !== productId
      })
    },
    addSelected(state, id){
      state.selected.push(id);
    },
    removeSelected(state, productId) {
      state.selected = state.selected.filter(function (item) {
        return item !== productId
      })
    }
  },
  actions: {

  },
  modules: {

  }
})
