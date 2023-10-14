import { createApp } from 'vue'
import App from './App.vue'
import { routes } from "./router";
import "virtual:windi.css";
import "virtual:windi-devtools";
import { ViteSSG } from "vite-ssg";

export const createApp = ViteSSG(App, { routes });