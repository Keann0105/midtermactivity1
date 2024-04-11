import { createRouter, createWebHistory } from 'vue-router';
import BookList from './components/BookList.vue';
import ShoppingReceipt from './components/ShoppingReceipt.vue';

const routes = [
    { path: '/book-list', component: BookList },
    { path: '/shopping-receipt', component: ShoppingReceipt }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
