<template>
  <div
    class="bg-[#1A1A1A] overflow-hidden overflow-x-auto flex items-center text-white p-8 pr-8 px-8 sm:px-16 xl:px-16 2xl:px-32 gap-16 xl:gap-32">
    <a target="_blank" href="https://www.nasiol.gr/">
      <NasiolIcon />
    </a>
    <a target="_blank" href="https://pureest.com/">
      <PureestIcon />
    </a>
    <a target="_blank" href="https://pureest.com/">
      <PureestAltIcon />
    </a>
  </div>
</template>

<script setup lang="ts">
import NasiolIcon from '../assets/icons/NasiolIcon.vue';
import PureestIcon from '../assets/icons/PureestIcon.vue';
import PureestAltIcon from '../assets/icons/PureestAltIcon.vue';
</script>

<style scoped lang="postcss">
a {
  @apply transform-gpu duration-100;

  svg {
    @apply h-16 xl:h-auto;
  }

  &:hover {
    @apply scale-110;
  }
}
</style>