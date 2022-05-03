import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";
import "./index.css";

const app = createApp(<any>App);
app.use(router);
app.mount("#app");
