<template>
    <header>    
        <a href="index.html"><img style="width: 200px; margin-top: 10px;" src="static/images/artlogo.png"></a>
        <nav>
        <label for="show-menu" class="show-menu">Show Menu</label>   
            <div>
                <ul id="menu">
                    <li><router-link to="/home">Home</router-link></li>
                    <li><router-link to="/prints">Prints</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li>
                        <router-link to="/cart">
                            <i class="fas fa-shopping-cart" v-show="productsSize === 0"></i> 
                            <i class="fas fa-cart-plus" v-show="productsSize > 0" style="color: rgb(207, 64, 36);"></i>
                            Cart
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="bottomLine"></div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AppHeader',
    data () {
        return {
        }
    },
    computed: {
         ...mapGetters([
            'cart',
            'subtotal',
            'shipping',
            'total',
        ]),
        
        productsSize: function() { 
            return this.$store.state.cart.length;
        },
    },

    methods: {
        
    }    
}
     
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/

/*==============================HEADER==============================*/
 header {
    position: relative;
    margin: 0px 0px; 
    padding: 36px 24px 0px 24px;
    position: relative;
    color: #999;
    min-width: 640px;
    background-color: #fff;
}

.bottomLine {
    margin-top: 36px;
    width: 100%;
    height: 1px;
    background-color: #ddd;
}

.title {
    /*display: inline-block;*/
    font-family: 'OpenSans', sans-serif;
    color: #000;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    text-decoration: none;
    width: 100%;
}

 nav {
    float: right;
    color: #999;
    margin: 0px;
    font-size: 14px;
 }
 
 nav ul {
    margin: 0px;
    padding: 0px;
 }

 /*Create a horizontal list with spacing*/
 nav li {
    display: inline-block;
    padding: 12px 24px;
    text-decoration: none;
 }

nav a {
    color: #999;
    text-decoration: none;
    font-size: 14px;
}

nav a:hover {
    color: #000;
}

nav a:hover,
 nav a.router-link-active,
 nav a.router-link-exact-active {
    color: #000;
    border-radius: 8px;
    text-decoration: none;
 }

.cart {
    text-align: right;
}

 /*Style 'show menu' label button and hide it by default*/
 .show-menu {
     text-decoration: none;
     color: #fff;
     background: #000;
     text-align: center;
     padding: 10px 0;
     display: none;
 }

 /*Hide checkbox*/
 input[type=checkbox]{
     display: none;
 }

 /*Show menu when invisible checkbox is checked*/
 input[type=checkbox]:checked ~ #menu{
     display: block;
 }

</style>