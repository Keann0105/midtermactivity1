<template>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <div class="container mt-5">
    <div class="row justify-content-center p-5">
      <div class="col-md-6">
        <div class="card bg-dark text-white">
          <div class="card-header bg-dark text-center">
            <h4>Login Form</h4>
          </div>
          <div class="card-body rounded">
            <form @submit.prevent="attemptLogin">
              <div class="form-group">
                <label for="username" class=" text-white">Username</label>
                <input type="text" class="form-control bg-dark text-white" id="username" v-model="username" placeholder="Enter your username" required>
              </div>

              <div class="form-group">
                <label for="password" class=" text-white">Password</label>
                <input type="password" class="form-control bg-dark text-white" id="password" v-model="password" placeholder="Enter your password" required>
              </div>
              <div class="text-center w-full">
                <button type="submit" class="btn btn-dark ">Login</button>
              </div>
              <p v-if="error" class="text-danger mt-3 text-center">{{ error }}</p> <!-- Display error message -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '' // Initialize error message
    }
  },
  methods: {
    ...mapActions(['login']),
    attemptLogin() {
      this.login({ username: this.username, password: this.password })
        .then(() => {
          this.$router.push('/shop');
        })
        .catch((error) => {
          this.error = error;
        });
    },
  }
}
</script>

<style>
.card, .form-control, .card-header, .btn-dark {
  background-color: black !important; 
  color: white !important;
}

.card {
  margin-top: 50px;
  background: black !important;
  color: white !important;
  width: 500px; 
  padding: 25px;
}


.btn-dark {
  background-color: #252422 !important; 
  color: white;
  width: 70%;
  border: none; 
}

.card-header {
  font-size: 24px;
  background-color: black; 
  color: gold;
}

.form-control {
  background-color: #000814 !important; 
  color: white !important; 
  border-color: gray; 
}

.text-danger {
  font-size: 14px;
}

.card-body {
  background: #000814; 
  
}

.bg-dark {
    background-color: black !important;
}
</style>
