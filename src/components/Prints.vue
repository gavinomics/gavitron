<template>
    <div class="main-content">
        <div class="detailView" v-show="detailViewOpen">
            
            <button class="imgBtnClose" @click="closeDetailView" >
                <div class="labelBtn"><i class="fas fa-times"></i> close</div>
            </button>
            
            <div class="detailViewBox">
                <div style="margin: 0px auto;">
                    <img v-bind:src="item.art" v-bind:class="item.detailShape">
                </div>

                <div class="detailViewInfo">
                    <h1> {{ item.title }} </h1>
                    <div class="infoBox">
                        <div>
                            <div class="label-center">Item</div>
                            <div class="infoText"> {{ item.id }} </div>
                        </div>
                            
                        <div>
                            <div class="label-center">Size</div>
                            <div class="infoText"> {{ item.printSize }} </div>
                        </div>

                        <div>
                            <div class="label-center">Price</div>
                            <div class="infoText"> ${{ item.price }} </div>
                        </div>
                    
                    </div>
                    <!-- <p>Open Edition</p> -->
                    <br>
                    <button class="primaryBtn" @click="addToCart(item)" v-if="item.quantity === 0"> Add to cart </button>
                    <button class="primaryBtn" style="background-color: #ccc; border: 1px solid #ccc" v-else> <i class="fas fa-check"></i> Item in Cart </button>
                    <br>
                    <br>
                    <button class="secondaryBtn" v-show="item.quantity > 0"><router-link to="/cart" class="secondaryBtn" style="text-align: center;"> View your shopping cart</router-link></button>
                </div>
            </div>
        </div>
        
        <div class="printBox">

            <div class="sideNav">
                <div class="label"> PRINTS</div>
                <ul>
                    <li><button class="btn" v-bind:class="{ active: btnShowAll }" @click="showAll()">All Prints</button></li>
                    <li><button class="btn" v-bind:class="{ active: btnLostBoy }" @click="showLostBoy()">Lost Boy</button></li>
                    <li><button class="btn" v-bind:class="{ active: btnInfra }" @click="showInfra()">Infra</button></li> 
                    <li><button class="btn" v-bind:class="{ active: btnGeo }" @click="showGeo()">Geo</button></li>
                    <li><button class="btn" v-bind:class="{ active: btnAshThorp }" @click="showAshThorp()">Ash Thorp</button></li>
                    <li><button class="btn" v-bind:class="{ active: btnGmunk }" @click="showGmunk()">Gmunk</button></li>
                    
                    
                </ul>
            </div>

            <div class="artgrid">
                <div class="artContainer" v-for="item in filteredItems" :key="item.id"> <!-- add function that passes in a parameter for the item.art -->
                    <button class="imgBtn" @click="openDetailView(item)">
                        <div class="artbox">
                            
                            <div v-bind:class="item.shape">
                                <img v-bind:src="item.art"/>
                            </div>

                        </div>
                    
                        <div class="smallText"> {{ item.title }} </div>
                        <div class="id"> #{{ item.id }} </div>
                    </button>
                </div>
            </div><!--End artgrid--> 
        </div><!--End printBox--> 

    </div> <!--End main-content--> 
</template>

<script>
import { mapGetters } from 'vuex'

import products from "../data.js"

export default {
    name: 'Prints',
    data () {
        return {
            items: products,
            show: 'all',
            btnShowAll: true,
            btnAshThorp: false,
            btnGeo: false,
            btnLostBoy: false,
            btnInfra: false,
            closeImg: '/static/images/close-grey.png',
            closeImgHover: '/static/images/close-hover.png',
            detailViewOpen: false,
            item: ''            
        }
    },
    
    computed: {
        ...mapGetters([
            'cart',
            'subtotal',
            'shipping',
            'total',
        ]),

        filteredItems: function() {
            if (this.show === 'ashthorp')
                return this.items.filter(function(item) {
                    return item.ashthorp === 'yes';
            });

            if (this.show === 'geo')
                return this.items.filter(function(item) {
                    return item.geo === 'yes';
            });

            if (this.show === 'infra')
                return this.items.filter(function(item) {
                    return item.infra === 'yes';
            });

            if (this.show === 'gmunk')
                return this.items.filter(function(item) {
                    return item.gmunk === 'yes';
            });

            if (this.show === 'lostboy')
                return this.items.filter(function(item) {
                    return item.lostboy === 'yes';
            });

            return this.items;
        },
    },

    created: function() {
        this.getItems();
    },

    getItems: function() { //add to computed
        this.$store.dispatch('getItems');
    },
    
    methods: {
        addToCart: function (item) { 
            item.quantity += 1;
            this.$store.dispatch('addToCart', item);
        },

        closeDetailView: function() {
            this.detailViewOpen = false;
        },

        openDetailView: function(item) {
            // console.log("Item: " + item);
            this.item = item;
            this.detailViewOpen = true;
            window.scrollTo(0, 0);
        },

        showAll: function() {
            this.show = 'all';
            this.btnShowAll = true;
            this.btnAshThorp = false;
            this.btnGmunk = false;
            this.btnGeo = false;
            this.btnLostBoy = false;
            this.btnInfra = false;
        },
        showAshThorp: function() {
            this.show = 'ashthorp';
            this.btnShowAll = false;
            this.btnAshThorp = true;
            this.btnGmunk = false;
            this.btnGeo = false;
            this.btnLostBoy = false;
            this.btnInfra = false;
        },
        showGmunk: function() {
            this.show = 'gmunk';
            this.btnShowAll = false;
            this.btnAshThorp = false;
            this.btnGmunk = true;
            this.btnGeo = false;
            this.btnLostBoy = false;
            this.btnInfra = false;
        },
        showGeo: function() {
            this.show = 'geo';
            this.btnShowAll = false;
            this.btnAshThorp = false;
            this.btnGmunk = false;
            this.btnGeo = true;
            this.btnLostBoy = false;
            this.btnInfra = false;
        },
        showLostBoy: function() {
            this.show = 'lostboy';
            this.btnShowAll = false;
            this.btnAshThorp = false;
            this.btnGmunk = false;
            this.btnGeo = false;
            this.btnLostBoy = true;
            this.btnInfra = false;
        },
        showInfra: function() {
            this.show = 'infra';
            this.btnShowAll = false;
            this.btnAshThorp = false;
            this.btnGmunk = false;
            this.btnGeo = false;
            this.btnLostBoy = false;
            this.btnInfra = true;
        }
    }
}

</script>

<style scoped>
/*==============================MAIN-CONTENT==============================*/

/* :root {
    --brandColor: #000000;
} */

.printBox {
    display: grid;
    grid-template-columns: 160px 1fr;
    grid-template-areas: 
    'sideNav artgrid';
    grid-gap: 24px;

}

/*==============================DETAIL-VIEW==============================*/

.imgBtn {
    cursor: pointer;
    background:none;
    border:none;
    padding: 0px;
}

.imgBtnClose {
    display: block;
    text-decoration: none;
    cursor: pointer;
    background:none;
    border:none;
    padding: 0px;
}

.detailView {
    margin-bottom: 24px;
    width: 100%;
    height: 540px;
    /*background-color: #eee;*/
    border-bottom: 1px solid #ddd;
}

.detailViewBox {
    margin: 24px auto;
    width: 800px; 
    height: 500px;
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-areas: 
    'img info';
    grid-gap: 48px;
    /*background-color: #ccc;*/
}

.detailViewContent {
    position: relative;
    padding: 24px;
    background-color: #eee;
}

.detailViewImg-wide {
    grid-area: img;
    vertical-align: middle;
    width: 100%;
    background-color: #eee;
    border: 5px solid #eee;
}

.detailViewImg-tall {
    grid-area: img;
    vertical-align: middle;
    height: 440px;
    background-color: #eee;
    border: 5px solid #eee;
}

.detailViewImg-square {
    grid-area: img;
    vertical-align: middle;
    height: 400px;
    background-color: #eee;
    border: 5px solid #eee;
}

.detailViewInfo {
    margin: 0px;
    grid-area: info;
}

.infoBox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    width: 100%;
    margin: 48px 0 24px 0px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 24px 0px;
}

.infoText {
    margin-top: 8px; 
    text-align: center;
    font-size: 18px;
    color: #000000;
}

/*==============================SIDE NAV==============================*/

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

/*==============================BUTTONS==============================*/

.btn {
    /*display: block;*/
    width: 100%;
    margin: 0px;
    /*border-radius: 4px;*/
    padding: 12px;
    border: 1px solid #fff;
    font-size: 16px;
    text-align: left;
    background-color: #fff;
}

.btn:hover {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
}

.btn.active {
    color: #000000;
    text-decoration: none;
}

.btn:hover.active {
    color: #000000;   
    cursor: pointer;
}

/*==============================ART-MAIN-CONTENT==============================*/


.artgrid {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    grid-gap: 24px;
    /*background-color: #f8f8f8;*/
}

/*==============================ART-PEICE==============================*/

.artContainer {
    position: relative;
    margin: 0px 40px 0px 0px;
    width: 200px;
    height: 272px;
}

.artbox {
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid #eee;
    overflow: hidden;
}

.smallText {
    float: left;
    margin-top: 8px;
    font-family: 'OpenSans', sans-serif;
    font-size: 13px;
    /*font-weight: bold;*/
    color: #999;
    text-decoration: none;
}

.artPrice {
    float: left;
    margin-top: 8px;
    margin-left: 8px;
    font-family: 'OpenSans', sans-serif;
    font-size: 13px;
    color: #444;
    text-decoration: none;
}

.id {
    float: left;
    margin-top: 8px;
    margin-left: 8px;
    font-family: 'OpenSans', sans-serif;
    font-size: 13px;
    color: #999; /*e087ad*/
    text-decoration: none;
}

.artboxHover.hover {
    background-color: #000;
}

.artbox img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);    
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

.wide img {
    height: 234px;
}

.tall img {
    width: 214px;
}

.square img {
    width: 200px;
}

</style>
