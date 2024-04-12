<template>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <div class="container-fluid mt-4 p-0">
    <div class="row no-gutters">
      <!-- Manga List Container -->
      <div class="col-lg-8">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 style="font-size: 2rem; margin-left: 20px; color: black;">Manga List</h2>
          <form class="form-inline my-2 my-lg-0">
            <input v-model="searchQuery" class="form-control mr-sm-2" type="search" placeholder="Search"
              aria-label="Search">
          </form>
        </div>

        <div class="book-container d-flex flex-wrap">
          <div v-for="book in filteredBooks" :key="book.id" class="book-card">
            <div class="card-body">
              <img :src="'/' + book.imageUrl" class="img-fluid mb-2" alt="Book Cover"/>
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text">Author: {{ book.author }}</p>
              <p class="card-text">Price: ₱{{ book.price }}</p>
              <button @click="addToCart(book)" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <!-- My Cart Container -->
      <div class="col-lg-4">
        <h2 class="mb-4">My Cart</h2>
        <div class="cart-container">
          <div class="card mb-3" v-for="(item, index) in cartItems" :key="index">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">Price: ₱{{ item.totalPrice }}</p>
              <div class="d-flex align-items-center">
                <input type="number" v-model="item.quantity" @input="updateQuantity(index, $event.target.value)" min="1"
                  class="form-control mr-2" style="width: 60px;">
                <button @click="removeFromCart(index)" class="btn btn-danger">Remove</button>
              </div>
            </div>
          </div>
          <template v-if="cartItems.length === 0">
            <p>Your cart is empty.</p>
          </template>
        </div>
        <hr>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="btnGroupAddon">Total</span>
            <span class="input-group-text" id="btnGroupAddonCurrency">₱</span>
          </div>
          <input type="text" class="form-control" placeholder="Total"
            aria-describedby="btnGroupAddon btnGroupAddonCurrency" :value="totalAmountDue">
        </div>
        <button @click="checkout" class="btn btn-dark mt-3">Checkout</button>
      </div>
    </div>
  </div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  props: ['checkout', 'errorMessage'],
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: Object.assign(
    {},
    mapState(['searchQuery']),
    mapGetters(['salesBooks', 'cartItems']),
    {
      filteredBooks() {
        return this.salesBooks.filter(book =>
          this.isMatch(book.title) || this.isMatch(book.author)
        );
      },
      totalAmountDue() {
        return this.cartItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);
      }
    }
  ),
  methods: Object.assign(
    {},
    mapMutations(['addToCart', 'removeFromCart', 'updateCartItemQuantity']),
    {
      updateQuantity(index, quantity) {
        quantity = parseInt(quantity) || 1;
        this.updateCartItemQuantity({ index, quantity });
      },
      isMatch(text) {
        return text.toLowerCase().includes(this.searchQuery.toLowerCase());
      }
    }
  )
};
</script>

<style>
.container-fluid {
  max-width: 100%;
  margin: auto;
 
}

.book-container {
  padding: 10px;
  height: 100px;
 
}

.book-card {
  width: calc(20% - 20px); 
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  background: black;
  color: white;
}

.book-card:hover {
  transform: scale(1.05);
}

.cart-container {
  border: 1px solid black;
  padding: 10px;
  height: 500px;
  background: white;
  
}

.button.btn.btn-primary{
  background: gold;
  color: black;
  
}


</style>
