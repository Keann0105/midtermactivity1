<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Book Store</a>  
      <div class="ml-auto">
        <button v-if="isLoggedIn" @click="logout" class="btn btn-outline-warning">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
         </svg>              
        </button>
      </div>
    </nav>

    <div class="container mt-4" v-if="isLoggedIn">
      <book-list></book-list>
    </div>

    <div class="container mt-4" v-else>
      <login-form @login="handleLogin"></login-form>
    </div>
  </div>
</template>

<script>
import BookList from "./components/BookList.vue"
import LoginForm from "./components/LoginForm.vue"

export default {
  name: 'App',
  components:{
    "book-list" : BookList,
    "login-form": LoginForm
  }, 
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
    handleLogin() {
      this.isLoggedIn = true;
    }
  }
}
</script>

<style>

</style>
