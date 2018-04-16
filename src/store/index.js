import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        respText: '',
    },
    mutations: {
        setRespText(state, text) {
            state.respText = text
        },
    },
})

export default store
