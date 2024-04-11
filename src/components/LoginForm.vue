<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Login Form</div>
        <div class="card-body">
          <form @submit.prevent="attemptLogin">
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
            <p v-if="error" class="text-danger">{{ error }}</p> <!-- Display error message -->
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
      username: '',
      password: '',
      error: '' // Initialize error message
    }
  },
  methods: {
    attemptLogin() {
      // Check if the credentials are correct
      if (this.username === 'admin' && this.password === 'admin') {
        // Emit the 'login' event if credentials are correct
        this.$emit('login');
      } else {
        // Set error message for incorrect credentials
        this.error = 'Incorrect username or password';
      }
    }
  }
}
</script>

<style>

</style>
