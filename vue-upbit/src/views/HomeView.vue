<template>
  <div class="container coin-box-wrap">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>순위</th>
          <th>유의종목</th>
          <th>한글이름</th>
          <th>마켓명</th>
          <th>영어이름</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in allCoin" :key="index">
          <CoinList :coinData="obj" :index="index" />
        </tr>
      </tbody>
    </table>
    <button class="gotop" ref="gotop" @click="moveTop">위로가기</button>
  </div>
</template>

<script>
import CoinList from "@/components/CoinList.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    CoinList,
  },
  setup() {
    const store = useStore();
    const allCoin = computed(() => store.getters.getMarket);
    const moveTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    return { allCoin, moveTop };
  },
};
</script>

<style>
.gotop {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 100px;
  height: 100px;
  background-color: tomato;
  border-radius: 10px;
}
</style>
