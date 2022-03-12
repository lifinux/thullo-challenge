import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// UI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const firebaseConfig = {
    apiKey: "AIzaSyCtJMPljrhug7wE8PdboSB-tXhnk8AgEJA",
    authDomain: "thullo-b1443.firebaseapp.com",
    projectId: "thullo-b1443",
    // storageBucket: "thullo-b1443.appspot.com",
    // messagingSenderId: "540509038088",
    // appId: "1:540509038088:web:e83fe590923b827c8053bd",
    // measurementId: "G-P3M28P23TC"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");
