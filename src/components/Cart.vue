<template>
  <div class="main-content">
    <div class="cartBox" style="text-align: center; padding: 24px 0px;" v-show="productsSize === 0">
      There are no items in your cart.
      <br>
      <br>
      <button class="secondaryBtn"><router-link to="/prints" class="secondaryBtn" style="text-align: center;"> Back to products </router-link></button>
    </div>

    <div class="cartBox" v-show="productsSize > 0"> 
      <div class="cartItem" v-for="item in cart" :key="item.id">
        <div class="cartItemDetails">
          <div class="cartImg"> 
            <img v-bind:src="item.art">
          </div>
          <div class="infoBox">  
            <div class="infoTextTitle"> {{ item.title }} </div>
            <div class="infoText">${{item.price }}</div>
            
            <input type='number' v-model="item.quantity" @click="updateItem(item)" value="item.quantity" min="1" max="999">

            <div class="infoTextPrice">${{ itemSubTotal(item) }} </div>

            <div class="remove-item" @click="removeItem(item)"> <i class="far fa-trash-alt"></i>  Remove item </div> 
          </div>
        </div>
      </div>
    </div>

    <div class="checkOutBar" v-show="productsSize > 0">
      <div class="subBox">
        <div>
          <div class="smallText"> Ships within 7 days </div>
        </div>
        <div style="text-align: right;">
          <div class="smallText"> Cart subtotal: ${{ subtotal }} </div>
          <div class="smallText"> Shipping: ${{ shipping }} </div>
          <h2> ${{ total }} </h2>
        </div>
      </div>

      <div class="subBoxBtn">
        <button class="secondaryBtn"><router-link to="/" class="secondaryBtn">Keep shopping</router-link></button>
        <button class="primaryBtn" type="submit">Continue to Check out</button>
      </div>
    </div> 
  </div>
</template>

<script>

  import  { mapGetters } from 'vuex'
  // import State from '../store'

  export default {
    name: 'Cart',
    data () {
      return {}
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

      productsSize: function() { 
        return this.$store.state.cart.length;
      },
    },

    methods: {
      updateItem(item) {
        this.$store.dispatch('updateItem', {
          id: item.id,
          quantity: item.quantity,
        });
      },

      itemSubTotal(item) {
        return item.price * item.quantity;
      },

      removeItem: function (item) {
        this.$store.dispatch('deleteItem', item);
      },

      getItems: function() {
        this.$store.dispatch('getItems');
      },
    }
  }

</script>

<style scoped>

/*==============================CART==============================*/

.cartBox {
    width: 648px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 24px auto;
}

.quantityInput {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

/*==============================CART==============================*/

.cartItem {
    width: 600px;
    border-bottom: 1px solid #ddd;
    padding: 24px 0px 24px 0px;
    margin: 0px auto -1px auto;
}

.cartItemDetails {
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 0px;
}

.cartItem img {
    border: 2px solid #eee;
    max-height: 100px;
    max-width: 160px;
}

.remove-item {
  margin-top: 16px;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
}

.infoBox {
  display: grid;
  grid-template-columns: 50% 1fr 1fr 1fr;
  grid-gap: 0px;
  width: 100%;
  margin: 16px 0 16px 0px;
  padding: 0px;
  font-size: 16px;
}

.infoText {
  text-align: right;
  margin: 2px 24px 0px 0px;
  color: #222;
}

.infoTextTitle {
  text-align: left;
  margin-top: 2px;
  font-weight: bold;
  color: #222;
}

.infoTextPrice {
  text-align: right;
  margin-top: 2px;
  font-weight: bold;
  color: #222;
}

/*==============================CHECK OUT==============================*/

.checkOutBar {
  margin:24px auto 24px auto;
  width: 648px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.subBox {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px;
  padding: 24px;
}

.subBoxBtn {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px;
  width: 600px;
  text-align: right;
  padding: 24px;
  border-top: 1px solid #ddd;
  background: #f8f8f8;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}

/*==============================GLOBAL TYPOGRAPHY==============================*/

input {
  background-color: #f8f8f8;
  height: 24px;
  width: 40px;
  /* border-radius: 4px; */
  /* display: block; */
}

</style>