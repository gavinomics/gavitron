import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
// import * as types from '../mutation-type'

Vue.use(Vuex);

// export const store = new Vuex.Store({
export default new Vuex.Store({
    state: {
        cart: [],
        subtotal: '',
        shipping: 7,
        total: ''
    },

    computed: {

    },

    getters: {
        cart: state => state.cart,

        subtotal: state => {
            var sTotal = 0;
            state.cart.forEach(element => {
                console.log("Price: " + element.price)
                sTotal += element.price * element.quantity
            });
            state.subtotal = sTotal;
            return state.subtotal;
        },

        total: state => {
            state.total = state.subtotal + state.shipping;
            return state.total
        },

        shipping: state => state.shipping,

    },

    mutations: {
        setItems(state, cart) {
            state.cart = cart;
        },

        ADD_ITEM(state, item) {
            state.cart.push(item);
        },

        DELETE_ITEM(state, item) {
            let id = parseInt(req.params.id);
            state.cart = state.cart.filter(i => {
                return i.id != id;
            })
        },

        UPDATE_ITEM(state, item) {
            console.log("Enter mutator with: " + item.id)
            array.forEach(element => {
                if (item.id === state.cart[element].id) {
                    state.cart[element].quantity = item.quantity;
                }
            });
        }
    },

    actions: {
        getItems(context) {
            console.log("getting items");
            axios.get("/api/items").then(response => {
                context.commit('setItems', response.data);
                return true;
            }).catch(err => {
            });
        },

        addItem(context, item) {
            console.log("Add Items...");
            axios.post("/api/items", item).then(response => {
                return context.dispatch('getItems');
            }).catch(err => {
            });
        },

        addToCart({ commit }, item) {
            console.log("Adding to Cart...");
            console.log("ID: " + item.id);

            axios.post("/api/items", item).then(response => {
                console.log("Adding: " + item.id);
                return context.dispatch('getItems');
            }).catch(err => {
            });

            commit('ADD_ITEM', item)
        },

        updateItem(context, item) {
            console.log(item);
            axios.put("/api/items/" + item.id, item).then(response => {
                return context.dispatch('getItems');
            }).catch(err => {
            });

            commit('UPDATE_ITEM', item)
        },

        deleteItem(context, item) {
            axios.delete("/api/items/" + item.id).then(response => {
                return context.dispatch('getItems');
            }).catch(err => {
            });

            commit('DELETE_ITEM', item)
        }
    }
});







