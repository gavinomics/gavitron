<template>
    <header>    
        <a href="index.html"><img style="width: 200px; margin-top: 10px;" src="static/images/artlogo.png"></a>
        <nav>
        <label for="show-menu" class="show-menu">Show Menu</label>   
            <ul id="menu">
                <li class="btn" v-bind:class="{ active: home }"><router-link to="/">Home</router-link></li>
                <li class="btn" v-bind:class="{ active: prints }"><router-link to="/prints">Prints</router-link></li>
                <li class="btn" v-bind:class="{ active: about }"><router-link to="/about">About</router-link></li>
                <li class="btn" v-bind:class="{ active: cart }"><router-link to="/cart"><i class="fas fa-shopping-cart"></i> Cart</router-link></li>
            </ul>
        </nav>
        <div class="bottomLine"></div>
    </header>
</template>

<script>
 export default {
    name: 'AppHeader',
    btnHome: true,
    btnPrints: false,
    btnAbout: false,
    btnCart: false
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
    color: #000000;

}

nav li:hover {
    color: #000000;
}

.active {
    color: #000000;
    border-radius: 8px;
    padding: 12px 24px;
    text-decoration: none;
}

.btn.active {
    color: #000000;
    text-decoration: none;
}

.cart {
    text-align: right;
}

 /*Style 'show menu' label button and hide it by default*/
 .show-menu {
     text-decoration: none;
     color: #fff;
     background: #000000;
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