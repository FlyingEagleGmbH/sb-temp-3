import { initializeApp } from 'firebase/app'
import { getFunctions } from "firebase/functions";

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyAuosi1EulpUtJaPeQLTHOPofmm12Qb4xE",
        authDomain: "rohrreinigung-seifer.firebaseapp.com",
        databaseURL: "https://rohrreinigung-seifer-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "rohrreinigung-seifer",
        storageBucket: "rohrreinigung-seifer.appspot.com",
        messagingSenderId: "848096401602",
        appId: "1:848096401602:web:6d861a783a52c59298835b",
        measurementId: "G-BQDY1R08JK"
      };

    const app = initializeApp(firebaseConfig)

    const functions = getFunctions(app)

    nuxtApp.vueApp.provide('firebase', app)
    nuxtApp.provide('firebase', app)
    nuxtApp.vueApp.provide('functions', functions)
    nuxtApp.provide('functions', functions)
})