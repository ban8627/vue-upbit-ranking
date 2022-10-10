<template>
  <div class="coin-box">
    <div class="coin-detail">
      <div class="coin-info">
        <div class="coin-info-wrap">
          {{ coinInfo }}
          {{ markets }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    const markets = route.params.market;
    console.log(markets);

    const store = useStore();
    store.dispatch("fetchPrice", markets);
    const coinDetail = computed(() => store.getters.getTicker);
    return { coinDetail };
  },
};
</script>

<style></style>
