<template>
  <div class="w-full h-full bg-[#0C0C0C] text-white flex flex-col gap-8">
    <div class="py-48 relative">
      <div class="heading absolute top-0 left-0 w-full h-full" />
      <div class="z-5 absolute top-0 left-0 w-full h-full flex items-center">
        <h1 class=" text-6xl font-bold tracking-wider px-8 sm:px-16 xl:px-16 2xl:px-32 uppercase">{{ $t('ceramic.coating')
        }}</h1>
      </div>
    </div>
    <span class="transform-gpu -translate-y-24  flex flex-col gap-16">
      <section>
        <img class="rounded-24px md:w-full lg:w-90 xl:w-128" src="/pictures/ferrari1.jpg">
        <div class="flex gap-8 flex-col">
          <h3 class="text-white text-opacity-66 uppercase">{{ $t('introduction') }}</h3>
          <h1 class="font-bold text-[48px] md:text-[64px]">{{ $t('what.is.it') }}</h1>
          <p class="text-white text-opacity-66">{{ $t('ceramic.coating.description') }}</p>
        </div>
      </section>
      <section>
        <div class="flex gap-8 flex-col">
          <h3 class="text-white text-opacity-66 uppercase">{{ $t('advantages') }}</h3>
          <h1 class="font-bold text-[48px] md:text-[64px]">{{ $t('hydrophobia') }}</h1>
          <p class="text-white text-opacity-66">{{ $t('ceramic.coating.hydrophobia') }}</p>
        </div>
        <video muted autoplay loop class="rounded-24px w-full md:w-full lg:w-156 xl:w-188 2xl:w-200"
          src="/ceramiccoating.webm" />
      </section>
    </span>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
.heading {
  background: linear-gradient(180deg, rgba(12, 12, 12, 0.00) 0%, #0C0C0C 100%), url('pictures/ferrari2.jpg'), lightgray 50% / cover no-repeat;
  @apply opacity-25 bg-cover bg-center;
}

section {
  @apply flex-col lg:flex-row px-8 sm:px-16 xl:px-16 2xl:px-32 flex gap-8 2xl:gap-32 items-center justify-between;
}
</style>