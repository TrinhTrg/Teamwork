import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                aboutUs: 'aboutUs.html',
                new_booklist: 'new_booklist.html',
                detail: 'detail.html',
                cart: 'cart.html',
                checkout: 'checkout.html',
                login: 'login.html',
                register: 'register.html',
                thanks: 'thanks.html',
            }
        }
    }
});