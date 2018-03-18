<template>
    <div class="main-content">
        <div class="detailView" v-show="detailViewOpen">
            
            <button class="imgBtnClose" @click="closeDetailView">
                <img style="width: 24px;" v-bind:src="closeImgHover"/>
            </button>
            
            <div class="detailViewBox">
                <div>
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
                            <div class="infoText"> {{ item.price }} </div>
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
                    <li><button class="btn" v-bind:class="{ active: btnAshThorp }" @click="showAshThorp()">Ash Thorp</button></li>
                    <li><button class="btn" v-bind:class="{ active: btnGmunk }" @click="showGmunk()">Gmunk</button></li>
                    <li><button class="btn" v-bind:class="{ active: btnGeo }" @click="showGeo()">Geo</button></li>
                    <li><button class="btn" v-bind:class="{ active: btnLostBoy }" @click="showLostBoy()">Lost Boy</button></li>
                    <li><button class="btn" v-bind:class="{ active: btnInfra }" @click="showInfra()">Infra</button></li> 
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
export default {
    name: 'Prints',
    data () {
        return {
            items: [
                {
                    art: '/static/images/art/at-2501a.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Project 2501a',
                    printSize: '20x16',
                    id: '2501a',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-2501b.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Project 2501b',
                    printSize: '20x16',
                    id: '2501b',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-bladerunner1.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'BladeRunner Poster 1',
                    printSize: '20x16',
                    id: 'br1',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-bladerunner2.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'BladeRunner Poster 2',
                    printSize: '20x16',
                    id: 'br2',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-bladerunner3.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'BladeRunner Poster 3',
                    printSize: '20x16',
                    id: 'br3',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-epoch1.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Epoch Poster 1',
                    printSize: '20x16',
                    id: 'epoch1',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                 {
                    art: '/static/images/art/at-epoch1.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Epoch Poster 1',
                    printSize: '20x16',
                    id: 'epoch1',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-epoch2.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Epoch Poster 2',
                    printSize: '20x16',
                    id: 'epoch2',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-epoch3.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Epoch Poster 3',
                    printSize: '20x16',
                    id: 'epoch3',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-epoch4.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Epoch Poster 4',
                    printSize: '20x16',
                    id: 'epoch4',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-epoch5.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Epoch Poster 5',
                    printSize: '20x16',
                    id: 'epoch5',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-epoch6.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Epoch Poster 6',
                    printSize: '20x16',
                    id: 'epoch6',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-lostboy1.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Lost Boys Poster 1',
                    printSize: '20x16',
                    id: 'lb1',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'yes',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-lostboy2.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Lost Boys Poster 2',
                    printSize: '20x16',
                    id: 'lb2',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'yes',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-lostboy3.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Lost Boys Poster 3',
                    printSize: '20x16',
                    id: 'lb3',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'yes',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-lostboy4.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Lost Boys Poster 4',
                    printSize: '20x16',
                    id: 'lb4',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'yes',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/at-lostboy5.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Lost Boys Poster 5',
                    printSize: '20x16',
                    id: 'lb5',
                    price: 16,
                    ashthorp: 'yes',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'no',
                    lostboy: 'yes',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo1.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Geo 1',
                    printSize: '20x16',
                    id: 'geo1',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo2.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Geo 2',
                    printSize: '20x16',
                    id: 'geo2',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo3.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Geo 3',
                    printSize: '20x16',
                    id: 'geo3',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo4.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Geo 4',
                    printSize: '20x16',
                    id: 'geo4',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo5.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Geo 5',
                    printSize: '20x16',
                    id: 'geo5',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo6.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Geo 6',
                    printSize: '20x16',
                    id: 'geo6',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo7.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Geo 7',
                    printSize: '20x16',
                    id: 'geo7',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo8.jpg',
                    shape: 'square',
                    detailShape: 'detailViewImg-square',
                    title: 'Geo 8',
                    printSize: '20x16',
                    id: 'geo8',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo9.jpg',
                    shape: 'square',
                    detailShape: 'detailViewImg-square',
                    title: 'Geo 9',
                    printSize: '20x16',
                    id: 'geo9',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-geo10.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Geo 10',
                    printSize: '20x16',
                    id: 'geo10',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'yes',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra1.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 1',
                    printSize: '20x16',
                    id: 'infra1',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra2.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 2',
                    printSize: '20x16',
                    id: 'infra2',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra3.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 3',
                    printSize: '20x16',
                    id: 'infra3',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra4.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 4',
                    printSize: '20x16',
                    id: 'infra4',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra5.png',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 5',
                    printSize: '20x16',
                    id: 'infra5',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra6.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 6',
                    printSize: '20x16',
                    id: 'infra6',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra7.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 7',
                    printSize: '20x16',
                    id: 'infra7',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra8.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 8',
                    printSize: '20x16',
                    id: 'infra8',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra9.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Infra Photo 9',
                    printSize: '20x16',
                    id: 'infra9',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra10.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 10',
                    printSize: '20x16',
                    id: 'infra10',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra11.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Infra Photo 11',
                    printSize: '20x16',
                    id: 'infra11',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra12.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Infra Photo 12',
                    printSize: '20x16',
                    id: 'infra12',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-infra13.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Infra Photo 13',
                    printSize: '20x16',
                    id: 'infra13',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'yes',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-munky.jpg',
                    shape: 'tall',
                    detailShape: 'detailViewImg-tall',
                    title: 'Infra Photo 13',
                    printSize: '20x16',
                    id: 'infra13',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-op1.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Op Art 1',
                    printSize: '20x16',
                    id: 'op1',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-op2.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Op Art 2',
                    printSize: '20x16',
                    id: 'op2',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                {
                    art: '/static/images/art/g-op3.jpg',
                    shape: 'wide',
                    detailShape: 'detailViewImg-wide',
                    title: 'Op Art 3',
                    printSize: '20x16',
                    id: 'op3',
                    price: 16,
                    ashthorp: 'no',
                    geo: 'no',
                    infra: 'no',
                    gmunk: 'yes',
                    lostboy: 'no',
                    quantity: 0,
                },
                
                
            ],
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
  created: function() {
      this.getItems();
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
            console.log("ItemBelow: " + item);
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
            this.btnAshThorp = false;
            this.btnGmunk = true;
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
    border-radius: 8px;
    /*padding: 16px;*/
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
    /*border-radius: 8px;*/
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
