import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: [],
        token: localStorage.getItem('token') || "",
        success: false
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message) {
            state.messages.push(message);
        },
        taskSuccess(state, status) {
            state.success = status;
        },
        auth(state, token) {
            state.token = token
        },
        logout(state) {
            state.token = '';
            localStorage.clear();
        }
    },
    actions: {
        async getMessages({ commit }) {
            let messages = (await axios.get("http://localhost:8880/messages")).data
            commit('updateMessages', messages);
        },
        async newMessage({ commit }, messageBody) {
            let msg = (await axios.post("http://localhost:8880/messages", {
                message: messageBody
            })).data;
            commit('newMessage', msg.message);
        },
        async getMessage({ commit }, id) {
            commit('taskSuccess', true);
            return axios.get(`http://localhost:8880/messages/${id}`)
        },
        async register({ commit }, registerData) {
            let token = (await axios.post("http://localhost:8880/register", registerData)).data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth', token);
        },
        async login({ commit }, loginData) {
            let token = (await axios.post("http://localhost:8880/login", loginData)).data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth', token);
        },
    }
})