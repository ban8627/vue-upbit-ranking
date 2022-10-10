<template>
  <div class="wrap">
    <div class="container">
      <h1 class="main-title">Upbit Ranking</h1>
      <router-view />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchAllUpbit");
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  color: #fff;
  text-decoration: none;
}

html {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 16px;
  background: #222;
  color: #fff;
  scroll-behavior: smooth;
}

.intro {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #000;
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
