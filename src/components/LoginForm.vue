<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Login Form</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model="username" required>
              </div>
  
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
                <br> 
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: 'admin',
        password: 'admin'
      }
    },
    methods: {
      login() {

        const credentials = {
          username: this.username,
          password: this.password
        };
        console.log('Credentials:', credentials);
        this.$emit('login');
      }
    }
  }
  </script>
  
  <style>

  </style>
  