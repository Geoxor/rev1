<template>
  <header class="z-10 w-full  fixed flex items-center justify-between px-8">
    <div class="flex flex-1 justify-center">
      <span class="mr-auto">
        <router-link :to="{ name: 'home' }">
          <Rev1_logo @click="" class="cursor-pointer" />
        </router-link>
      </span>
    </div>

    <div class="flex flex-1 justify-center">
      <span class="">
        <nav class="flex text-white font-semibold">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'gallery' }">Gallery</router-link>
          <router-link :to="{ name: 'services' }">Services</router-link>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
          <router-link :to="{ name: 'information' }">Information</router-link>
        </nav>
      </span>
    </div>

    <div class="flex flex-1 justify-center">
      <span class="ml-auto">
        <menu>
          <a class="navigations" target="_blank" href="https://maps.app.goo.gl/NurGNPLSBU8AmFtG7">
            <PlaneIcon /> Navigations
          </a>
          <Spacer />
          <button class="flex">
            <LanguageIcon />
            <ArrowIcon />
          </button>
          <Spacer />
          <a class='button' target="_blank" href="https://www.facebook.com/p/Rev1-Detailing-Wrapping-100083076285508/">
            <FacebookIcon />
          </a>
          <a class='button' target="_blank" href="https://www.instagram.com/rev1_detailing_wrapping/">
            <InstagramIcon />
          </a>
        </menu>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import Rev1_logo from '../assets/rev1_logo.vue';
import Spacer from '../components/Spacer.vue';
import PlaneIcon from "../assets/icons/PlaneIcon.vue";
import InstagramIcon from "../assets/icons/InstagramIcon.vue";
import LanguageIcon from "../assets/icons/LanguageIcon.vue";
import FacebookIcon from "../assets/icons/FacebookIcon.vue";
import ArrowIcon from "../assets/icons/ArrowIcon.vue";
import { ref, Ref } from 'vue';

const language = ref("english");


</script>

<style scoped lang="postcss">
header {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.00) 100%);
  @apply m-auto;
}

nav a {
  @apply p-4 duration-100;

  &:hover {
    @apply text-[#E52F4B];
  }

  &.router-link-active {
    @apply text-[#E52F4B];
  }
}

menu {
  @apply flex items-center text-white;

  a {
    @apply duration-100;

    &:hover {
      @apply text-[#E52F4B];
    }
  }

  button:hover {
    @apply text-[#E52F4B];
  }

  .navigations {
    @apply bg-white items-center text-black py-2 px-8 rounded-full font-semibold duration-100 flex gap-2;

    &:hover {
      @apply bg-[#E52F4B] text-white;
    }
  }

  .button {
    @apply p-2;
  }
}
</style>