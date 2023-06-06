# websocket-vue-hello

This is a Vue 3 frontend which basically uses [sockjs-client](https://www.npmjs.com/package/sockjs-client) and [webstomp-client](https://www.npmjs.com/package/webstomp-client) to connect to a
Spring-boot websocket server.

The UI is identical to what is documented in [Spring-Boot websocket tutotial](https://spring.io/guides/gs/messaging-stomp-websocket)
This app is just a way to make a working proto with Vue, using its reactive capabilities, in addition to its Vuex state management

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

the URL for the spring-boot websocket server needs to be configured in `/src/websocketutil.js#connect` method

See [Configuration Reference](https://cli.vuejs.org/config/).
