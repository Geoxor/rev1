<template>
  <div class="pt-12 xl:pt-0 bg-[#080808]">
    <div class="gallery grid p-8 xl:p-32 grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-flow-row gap-4  ">
      <img class="col-start-1 xl:col-span-2 row-start-1 row-span-2" src="/pictures/ferrari1.jpg">
      <img src="/pictures/lancia1.jpg">
      <img src="/pictures/aprilia1.jpg">
      <img src="/pictures/lancia2.jpg">
      <img class="row-span-2" src="/pictures/bmw2.jpg">
      <img src="/pictures/typer1.jpg">
      <img src="/pictures/ferrari2.jpg">
      <img src="/pictures/typer2.jpg">
      <img class="xl:col-start-2 col-span-2 row-start-3 row-span-2" src="/pictures/bmw.jpg">
      <img src="/pictures/hyundai1.jpg">
      <video disable-picture-in-picture="true" muted autoplay loop
        class="xl:col-start-4 xl:col-span-2 xl:row-start-2 row-span-2" src="/pictures/rangerover.mp4" />
      <img src="/pictures/ferrari3.jpg">
      <img src="/pictures/supra.jpg">
      <img src="/pictures/aprilia2.jpg">
      <img src="/pictures/hyundai2.jpg">
      <img src="/pictures/aprilia3.jpg">
      <video disable-picture-in-picture="true" muted autoplay loop
        class="xl:col-start-5 col-span-2 xl:row-start-4 row-end-6" src="/pictures/marcedes.mp4" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.gallery img,
.gallery video {
  @apply w-full h-full rounded-4px object-cover duration-100 transform-gpu;
  aspect-ratio: 1/1;

  &:hover {
    @apply scale-102;
  }
}
</style>
