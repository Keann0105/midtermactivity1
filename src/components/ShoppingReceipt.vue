<template>
  <div class="receipt-container">
    <h2>Receipt</h2>
    <div v-if="cartItems.length > 0">
      <div v-for="(item, index) in cartItems" :key="index" class="receipt-item">
        <p>{{ item.title }} - ₱{{ item.price }}</p>
        <p>Quantity: {{ item.quantity }}</p>
      </div>
      <hr>
      <p>Total Amount Due: ₱{{ totalAmountDue }}</p>
      <button @click="goToBookList" class="btn btn-primary">Go Back to Book List</button>
    </div>
    <div v-else>
      <p>No items in the cart.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: {
      type: Array,
      required: true
    },
    totalAmountDue: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalAmountForItems() {
      return this.cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    }
  },
  methods: {
    goToBookList() {
      this.$router.push('/book-list');
    }
  }
};
</script>

<style scoped>
.receipt-container {
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f9f9f9;
}

.receipt-item {
  margin-bottom: 10px;
}
</style>
