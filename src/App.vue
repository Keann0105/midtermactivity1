<template>
  <div id="app">
    <div class="row">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mx-auto ">
        <a class="navbar-brand mx-5 p-3" href="#">Book Store</a>

        <button @click="checkAuthentication" class="btn btn-outline-warning mr-2 ml-auto">
          Check Authentication
        </button>
        <button v-if="isLoggedIn" @click="logout" class="btn btn-outline-warning  mr-3">
          Logout
        </button>
      </nav>
      <!-- Main content -->
      <router-view :cartItems="cartItems" :totalAmountDue="totalAmountDue" :totalPrice="totalAmountDue"
        :checkout="checkout" :login="handleLogin" :errorMessage="errorMessage" class="container mt-4"></router-view>
    </div>


  </div>
</template>

<script>


export default {

  name: 'App',

  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    cartItems() {
      return this.$store.state.cart;
    },
    totalAmountDue() {
      return this.$store.getters.totalAmountDue
    }
  },
  data() {
    return {

      showReceipt: false,
      "errorMessage": "",
    }
  },
  methods: {
    logout() {

      this.$store.dispatch('logout').then(() => {
       window.location.reload();
      })
    },
    checkout() {
      if (this.cartItems.length > 0) {
        this.$router.push('/checkout');
      } else {
        this.errorMessage = "Your cart is empty. ";
      }
    },
    checkAuthentication() {

      this.$store.dispatch('checkAuth');

      alert(`Current user authentication: ${this.isLoggedIn}`);
    }

  }
}
</script>

<style>
body {
  background: #EFECEC !important;
}


.navbar.bg-dark {
  background-color: black !important;

}


.navbar.bg-dark .navbar-nav .nav-link {
  color: gold !important;
}


.navbar.bg-dark .navbar-brand {
  color: gold !important;
}


.navbar.bg-dark .navbar-nav .nav-link:hover,
.navbar.bg-dark .navbar-nav .nav-link:focus {
  color: #ffd700;
}
</style>
