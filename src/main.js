import { createApp } from "vue";
import App from "./App.vue";
import Hero from "../src/components/Hero.vue";
import router from "./router";
import NavBarVue from "./components/NavBar.vue";

const app = createApp(App);

app.use(router);
app.component("hero", Hero);
app.component("nav-bar", NavBarVue)
app.mount("#app");
