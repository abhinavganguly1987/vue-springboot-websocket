<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="connect">WebSocket connection:</label>
          <button
            id="connect"
            class="btn btn-default"
            :disabled="!disabled"
            @click="connectWs"
          >
            Connect
          </button>
          <button
            id="disconnect"
            class="btn btn-default"
            :disabled="disabled"
            @click="disconnectWs"
          >
            Disconnect
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="name">What is your name?</label>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Your name here..."
            v-model="elname"
            :disabled="disabled"
          />
        </div>
        <button
          id="send"
          class="btn btn-default"
          @click="sendGreetingName"
          :disabled="disabled"
        >
          Send
        </button>
      </div>
    </div>
    <table id="conversation" class="table table-striped" v-show="!disabled">
      <thead>
        <tr>
          <th>Greetings</th>
        </tr>
      </thead>
      <tbody id="greetings">
        <tr v-for="(g, i) in greetingMessages" :key="i">
          <td>{{ g }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { connect, disconnect, sendName } from "@/websocketutil.js";
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      disabled: true,
      elname: "",
      allGreetings: [],
    };
  },
  props: {
    msg: String,
  },
  computed: mapState(["greetingMessages"]),
  methods: {
    connectWs() {
      this.disabled = false;
      connect();
    },
    disconnectWs() {
      this.disabled = true;
      disconnect();
    },
    sendGreetingName() {
      console.log(this.elname);
      sendName(this.elname);
      this.elname = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#conversation {
  border: 8px inset #000;
}
table,
th,
td {
  border: 1px solid;
}
</style>
