<template>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

    <div class="container mt-4">
      <div class="row">
        <!-- Manga List Container -->
        <div class="col-lg-8 d-flex flex-column">
          <!-- Book List -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Manga List</h2>
            <form class="form-inline my-2 my-lg-0">
              <input v-model="searchQuery" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">          
            </form>
          </div>
  
          <div class="book-container flex-grow-1">
            <div v-for="book in filteredBooks" :key="book.id" class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title">{{ book.title }}</h5>
                  </div>
                  <div class="col">
                    <p class="card-text">Author: {{ book.author }}</p>
                  </div>
                  <div class="col">
                    <p class="card-text">Price: ₱{{ book.price }}</p>
                  </div>
                  <div class="col">
                    <button @click="addToCart(book)" class="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- My Cart Container -->
        <div class="col-lg-4 d-flex flex-column">
          <h2 class="mb-4">My Cart</h2>
          <div class="cart-container flex-grow-1">
            <template v-if="cartItems.length > 0">
              <!-- cart items -->
              <div v-for="(item, index) in cartItems" :key="index" class="card mb-3">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">Price: ₱{{ item.totalPrice }}</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <input type="number" v-model="item.quantity" @input="updateQuantity(index, $event.target.value)" min="1" class="form-control mr-2" style="width: 60px;">
                    <button @click="removeFromCart(index)" class="btn btn-danger">Remove</button>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <p>Your cart is empty.</p>
            </template>
            
            
          </div>
          <hr>
          <!-- Total Amount Due Input Group -->
          <div class="input-group flex-column flex-md-row align-items-end">
              <div class="input-group-prepend">
                <div class="input-group-text" id="btnGroupAddon">Total</div>
                <div class="input-group-text" id="btnGroupAddonCurrency">₱</div> <!-- Unique id for this element -->
              </div>
              <input type="text" class="form-control" placeholder="Total" aria-describedby="btnGroupAddon btnGroupAddonCurrency" :value="totalAmountDue">
              <button class="btn btn-primary ml-md-2 mt-2 mt-md-0">Checkout</button>
            </div>
        </div>  
      </div>
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { mapState, mapGetters, mapMutations } from 'vuex';
  
  export default {
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
.book-container {
  border: 1px solid #ccc;
  padding: 10px;
  height: 600px; 
  overflow-y: auto; 
}
.cart-container {
  border: 1px solid #ccc;
  padding: 10px;
  height: 500px; 
  overflow-y: auto; 
}
.navbar {
  background-color: #007bff; 
  padding: 10px 20px;
  color: #fff;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-item {
  color: #fff;
  text-decoration: none;
}

</style>

 