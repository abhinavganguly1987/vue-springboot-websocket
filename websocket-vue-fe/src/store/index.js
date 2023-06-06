import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      greetingMessages: [],
    };
  },
  mutations: {
    addGreetingMessage(state, payload) {
      state.greetingMessages.push(payload);
      console.log("Data pushed in store " + payload);
    },
    clearAllGreetings(state) {
      state.greetingMessages = [];
    },
  },
});

export default store;
