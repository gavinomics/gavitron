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

.body {
    margin: 0px;
    padding: 0px;
    background-color: #fff;
}

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

/*============================== ACTION BTNS==============================*/

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
    border: 1px solid #000;
    cursor: pointer;
    background-color: #000;
}

.primaryBtn:hover {
    background-color: rgb(207, 64, 36);
    border: 1px solid rgb(207, 64, 36);
}

/*==============================BUTTONS==============================*/

.btn {
    /* text-transform: uppercase; */
    width: 100%;
    margin: 0px;
    padding: 12px;
    border: 1px solid #fff;
    font-size: 16px;
    text-align: left;
    background-color: #fff;
}

.btn:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.btn.active {
    color: #000;
    text-decoration: none;
}

.btn:hover.active {
    color: #000;   
    cursor: pointer;
}

button:focus {outline:0;}
btn:focus {outline:0;}

/*==============================GLOBAL TYPOGRAPHY==============================*/

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


.sideNav {
    grid-area: sideNav;
    display: block;
    height: 100%;
    padding-right: 16px;
    border-right: 1px solid #ddd;
}

.sideNav ul {
    margin: 0px;
    padding: 0px;
    text-decoration: none;
}

.sideNav li {
    margin-left: 0px;
    display: block;
    border-radius: 4px;
    text-decoration: none;
}

.sideNav button {
    font-size: 14px;
    font-family: 'OpenSans', sans-serif;
    color: #999;
}

/*==============================LABELS==============================*/

.label {
    font-family: 'OpenSans', sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #999; /*#e087ad*/
    text-transform: uppercase;
    letter-spacing: .2em;
    padding: 0px 0px 12px 0px;
}

.labelBtn {
    font-family: 'OpenSans', sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #999; /*#e087ad*/
    text-transform: uppercase;
    letter-spacing: .2em;
    padding: 0px 0px 12px 0px;
}

.labelBtn:hover {
    color: #000;
}

.label-center {
    font-family: 'OpenSans', sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #999; /*#e087ad*/
    text-transform: uppercase;
    letter-spacing: .2em;
    text-align: center;
}

/*==============================LIST STYLES==============================*/

</style>
