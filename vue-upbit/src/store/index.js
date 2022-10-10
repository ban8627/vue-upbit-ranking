import { createStore } from "vuex";
import {
  fetchUpbit,
  // fetchCandles,
  fetchTickers,
} from "@/data/index";
export default createStore({
  state: {
    allMarket: [],
    market: {},
  },
  actions: {
    fetchAllUpbit({ commit }) {
      fetchUpbit()
        .then((res) => {
          commit("UPBIT_MARKET_LIST", res.data);
        })
        .catch((err) => console.log(err));
    },
    fetchPrice({ commit }, markets) {
      fetchTickers(markets)
        .then((res) => {
          commit("UPBIT_MARKET_TICKER", res.data);
        })
        .catch((err) => console.log(err));
    },
  },
  mutations: {
    UPBIT_MARKET_LIST(state, payload) {
      state.allMarket = payload;
    },
    UPBIT_MARKET_TICKER(state, payload) {
      state.market = payload;
    },
  },
  getters: {
    getMarket(state) {
      return state.allMarket;
    },
    getTicker(state) {
      return state.market;
    },
  },
  modules: {},
});
