import App from './App.vue'
import { routes } from "./router";
import "virtual:windi.css";
import "virtual:windi-devtools";
import { ViteSSG } from "vite-ssg";
import './state';
import { createI18n } from "vue-i18n";
import enUS from './locales/en-US.json'
import elGR from './locales/el-GR.json'

type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], 'en-US' | 'el-GR'>({
  locale: 'el-GR', // set locale
  fallbackLocale: 'en-US', // set fallback locale
  messages: {
    'en-US': enUS,
    'el-GR': elGR,
  },
})

export const createApp = ViteSSG(App,
  { routes },
  ({ app, router }) => {
    app.use(i18n);
    router.options.scrollBehavior = () => {
      return { top: 0, left: 0 }
    }
  });