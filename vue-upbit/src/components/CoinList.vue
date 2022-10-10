<template>
  <td>{{ index + 1 }}</td>
  <td>
    <a href="#" @click.stop="detailMove">{{ coinData.market_warning }}</a>
  </td>
  <td>
    <a href="#" @click.stop="detailMove">{{ coinData.korean_name }}</a>
  </td>
  <td>
    <a href="#" @click.stop="detailMove">{{ coinData.market }}</a>
  </td>
  <td>
    <a href="#" @click.stop="detailMove">{{ coinData.english_name }}</a>
  </td>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["coinData", "index"],
  setup(props) {
    const router = useRouter();
    const detailMove = () => {
      router.push("/upbit/detail/" + props.coinData.market);
    };
    return {
      detailMove,
    };
  },
};
</script>

<style>
a {
  color: #333;
}
</style>
