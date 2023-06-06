import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import store from "./store";

let stompClient = null;
let connected = false;

export function setConnected(connectedStatus) {
  connected = connectedStatus;
}

export function connect() {
  var socket = new SockJS("http://localhost:9090/totobhuto-sb-websocket-pro");
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    setConnected(true);
    console.log(connected + " >>> TOTO Connected to FRAME : " + frame);
    stompClient.subscribe("/topic/greetings", function (greeting) {
      let tempMessage = JSON.parse(greeting.body).content;
      store.commit("addGreetingMessage", tempMessage);
      console.log("All Messages so far " + store.state.greetingMessages);
    });
  });
}

export function disconnect() {
  if (stompClient !== null) {
    stompClient.disconnect();
    store.commit("clearAllGreetings");
  }
  setConnected(false);
  console.log(">>> TOTO Disconnected");
}

export function sendName(nameTxt) {
  console.log("+++++ then greeting to send " + nameTxt);
  stompClient.send("/app/hello", JSON.stringify({ name: nameTxt }), {});
}
