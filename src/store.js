import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  strict: true,
    state: {
        users: {
            Name: null,
            Email: null,
            Password: null,
        }
    },
    getters: {
      getUserName: state => {
        return state.users.Name;
      },
      getUserEmail: state => {
        return state.users.Email;
      },
    },

    mutations: {
        UPDATE_USERS(state, data) {
            state.users = data
        },

        EMPTY_DATA(){
          state.users.Name = null;
          state.users.Email = null;
          state.users.Password = null;
        },

        initialiseStore(state) {
          // Check if the ID exists
          if(localStorage.getItem('store')) {
            // Replace the state object with the stored item
            this.replaceState(
              Object.assign(state, JSON.parse(localStorage.getItem('store')))
            );
          }
        },
    },

    actions:{
      updateUsers({ commit }, { Name, Email, Password,}) {
        commit("UPDATE_USERS", { Name, Email, Password,});
      },

      clearData({commit}) {
        commit ('EMPTY_DATA');
      },
    },
});

   
