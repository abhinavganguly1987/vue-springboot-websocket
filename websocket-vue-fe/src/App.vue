<template>
  <div>
    <img alt="Vue logo" src="./assets/websocket.svg" />
    <Websock msg="Welcome to a Vue connected to a Websocket app" />
  </div>
</template>

<script>
import Websock from "./components/Websock.vue";

export default {
  name: "App",
  components: {
    Websock,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: 200px;
  padding-right: 200px;
}
</style>
