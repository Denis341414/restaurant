import { createApp } from "vue";
import "./app/style.css";
import App from "./app/App.vue";
import PrimeVue from "primevue/config";
import { Preset } from "./app/primevue";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Preset,
  },
});
app.mount("#app");
