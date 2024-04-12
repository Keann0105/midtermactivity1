<template>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <div class="d-flex justify-content-center w-100 mt-5 ">
    <div class="receipt-container p-4 ">
      <h2 class="mb-4 text-center">Receipt</h2>
      <div v-if="cartItems.length > 0">
        <div v-for="(item, index) in cartItems" :key="index" class="receipt-item">
          <p class="mb-1">{{ item.title }}</p>
          <p class="mb-1 text-muted">Quantity: {{ item.quantity }}</p>
          <p class="mb-0 text-muted">Price: ₱{{ item.totalPrice }}</p>
        </div>
        <hr>
        <h4 class="font-weight-bold text-end mb-3">Total Amount Due: ₱{{ totalAmountDue }}</h4>
        <button @click="confirmOrder" class="btn btn-success btn-block" data-bs-toggle="modal">Confirm Order</button>
        <button @click="goToBookList" class="btn btn-primary btn-block">Go to Book List</button>
      </div>
      <div v-else>
        <p class="text-center">No items in the cart.</p>

        <button @click="goToBookList" class="btn btn-primary btn-block">Go to Book List</button>
      </div>

    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'totalAmountDue'])
  },
  methods: {
    goToBookList() {
      this.$router.push('/shop');
    },
    confirmOrder() {
      this.$router.push('/shop');
      alert("Order has confirmed.")
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.receipt-container {
  width: 60%;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}

.receipt-item {
  padding: 10px 0;
  border-bottom: 1px solid #dee2e6;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
