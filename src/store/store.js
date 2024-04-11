import Vuex from 'vuex'

export const store = new Vuex.Store({
  name: 'store',
  state: {
    books: [
      { id: 1, title: "Berserk", author: "Kentaro Miura", price: 10.01 },
      { id: 2, title: "One Piece", author: "Eiichiro Oda", price: 12.01 },
      { id: 3, title: "Naruto", author: "Masashi Kishimoto", price: 11.01 },
      { id: 4, title: "Dragon Ball", author: "Akira Toriyama", price: 9.01 },
      { id: 5, title: "Attack on Titan", author: "Hajime Isayama", price: 13.01 },
      { id: 6, title: "My Hero Academia", author: "Kohei Horikoshi", price: 10.99 },
      { id: 7, title: "Death Note", author: "Tsugumi Ohba", price: 11.50 },
      { id: 8, title: "Fullmetal Alchemist", author: "Hiromu Arakawa", price: 12.75 },
      { id: 9, title: "Tokyo Ghoul", author: "Sui Ishida", price: 9.75 },
      { id: 10, title: "Demon Slayer", author: "Koyoharu Gotouge", price: 13.99 }
    ],
    cart: []
  },
  getters: {
    salesBooks: state => state.books,
    cartItems: state => {
      return state.cart.map(item => {
        const book = state.books.find(book => book.id === item.id);
        return {
          ...item,
          totalPrice: (item.quantity * book.price)
        };
      });
    },
    totalAmountDue: (state, getters) => {
      return getters.cartItems.reduce((total, item) => total + parseFloat(item.totalPrice), 0)
    }
  },
  mutations: {
    addToCart(state, book) {
      const existingItem = state.cart.find(item => item.id === book.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...book, quantity: 1 });
      }
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    updateCartItemQuantity(state, { index, quantity }) {
      state.cart[index].quantity = quantity;
    }
  }
});
