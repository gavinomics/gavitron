<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Prints from './components/Prints.vue'
import Cart from './components/Cart.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Home, 
    AppHeader, 
    AppFooter,
    Prints,
    Cart,
    About,
    }
}

</script>

<style>

#app { /*most specific wins*/
  position: relative;
  font-family: 'Opensans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*==============================GLOBAL STYLES==============================*/

.main-content {
    margin: 0px;
    padding: 24px;
    background-color: #fff;
}

.smallText {
    font-size: 13px;
    color: #333;
    text-decoration: none;
}

h1 {
    margin: 0px;
    padding: 0px; 
    color: #444;
    font-weight: normal; 
}

.label {
    font-size: 12px;
    font-weight: bold;
    color: #bbb; /*#e087ad*/
    text-transform: uppercase;
    text-align: left;
    letter-spacing: .2em;
}

/*==============================BTNS==============================*/

.secondaryBtn {
  text-align: left;
  display: block;
  width: 100%;
  color: rgb(207, 64, 36);
  font-family: 'OpenSans', sans-serif;
  font-size: 14px;
  text-decoration: none;
  padding: 0px;
  cursor: pointer;
  border: none;
  background:none;
}

.secondaryBtn:hover {
    color: rgb(207, 64, 36);
}

.primaryBtn {
    width: 100%;
    color: white;
    font-family: 'OpenSans', sans-serif;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
    padding: 12px 48px;
    border: 1px solid #000000;
    cursor: pointer;
    background-color: #000000;
}

.primaryBtn:hover {
    background-color: rgb(207, 64, 36);
    border: 1px solid rgb(207, 64, 36);
}

h1 {
    margin: 0px;
    padding: 0px; 
    color: #444;
    font-weight: bold;    
}

h2 {
    margin: 0px;
    padding: 0px;
    font-size: 32px;
    color: #444;
    font-weight: bold; 
}

</style>
