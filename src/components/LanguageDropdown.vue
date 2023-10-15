<template>
  <button class="flex relative" @click="showLanguageDropdown = true;" :class="showLanguageDropdown && 'active'">
    <LanguageIcon />
    <ArrowIcon />
    <menu ref="languageDropdown" v-if="showLanguageDropdown"
      class="languageDropdown absolute flex flex-col justify-start top-8 left-0  p-1 rounded-8px border-light-700 border-1 bg-white">
      <option @click="$i18n.locale = lang;"
        class="py-2 px-8 flex w-full justify-start hover:bg-light-800 hover:bg-black font-semibold text-black rounded-6px"
        v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" :class="$i18n.locale == lang && 'active'">
        {{ $t(lang) }}
      </option>
    </menu>
  </button>
</template>

<script setup lang="ts">
import LanguageIcon from "../assets/icons/LanguageIcon.vue";
import ArrowIcon from "../assets/icons/ArrowIcon.vue";
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const langs = ref(['en-US', 'el-GR']);
const showLanguageDropdown = ref(false);
const languageDropdown = ref(null)


const closeLanguageDropdown = () => {
  showLanguageDropdown.value = false;
}

onClickOutside(languageDropdown, () => closeLanguageDropdown());


</script>

<style scoped lang="postcss">
.languageDropdown option.active {
  @apply bg-black text-white;
}

button.active {
  @apply text-[#E52F4B];
}
</style>