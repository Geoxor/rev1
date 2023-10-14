<template>
  <div class="bg-[#1A1A1A] h-64 p-32 flex items-center text-white gap-32">
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


  &:hover {
    @apply scale-110;
  }
}
</style>