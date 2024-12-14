import './assets/styles.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');

// mm/dd/yyyy formatted date object
const dateObj = new Date();
let month = dateObj.getMonth() + 1;
let day = dateObj.getDate();
let year = dateObj.getFullYear();

export let formattedDate = `${month}/${day}/${year}`;