<template>
  <footer
    class="bg-[#0C0C0C] p-8 sm:p-16 2xl:p-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex items-top justify-between  text-[#C9C9C9A8] font-semibold gap-8 md:gap-24 xl:gap-8">
    <div class="flex flex-col gap-8">
      <Rev1_logo class="w-256px sm:w-280px h-auto" />
      <section class="flex flex-col">
        <a class="duration-100 hover:text-white" target="_blank" href="https://maps.app.goo.gl/NurGNPLSBU8AmFtG7">
          <p>
            <PlaneIcon />
            {{ $t('address') }}
          </p>
        </a>

        <a class="duration-100 hover:text-white" target="_blank" href="mailto:revone.gr@gmail.com">
          <p>
            <EmailIcon />
            revone.gr@gmail.com
          </p>
        </a>

        <a class="duration-100 hover:text-white" target="_blank" :href="`tel:${$t('telephone')}`">
          <p>
            <TelephoneIcon />
            {{ $t('telephone') }}
          </p>
        </a>
      </section>
    </div>

    <section class="footerSection">
      <p class="text-white">{{ $t('navigation') }}</p>
      <router-link :to="{ name: 'home' }">{{ $t('home') }}</router-link>
      <router-link :to="{ name: 'gallery' }">{{ $t('gallery') }}</router-link>
      <router-link :to="{ name: 'services' }">{{ $t('services') }}</router-link>
    </section>

    <section class="footerSection hours whitespace-nowrap">
      <p class="text-white">{{ $t('opening.hours') }}</p>
      <div>
        <p>{{ $t('monday') }}</p>
        <p>08:30 - 17:30</p>
      </div>
      <div>
        <p>{{ $t('tuesday') }}</p>
        <p>08:30 - 17:30</p>
      </div>
      <div>
        <p>{{ $t('wednesday') }}</p>
        <p>08:30 - 17:30</p>
      </div>
      <div>
        <p>{{ $t('thursday') }}</p>
        <p>08:30 - 17:30</p>
      </div>
      <div>
        <p>{{ $t('friday') }}</p>
        <p>08:30 - 17:30</p>
      </div>
      <div>
        <p>{{ $t('saturday') }}</p>
        <p>09:00 - 14:00</p>
      </div>
      <div class="opacity-50">
        <p>{{ $t('sunday') }}</p>
        <p>{{ $t('closed') }}</p>
      </div>
    </section>

    <section class="footerSection socials">
      <p class="text-white">{{ $t('follow.us') }}</p>
      <a class='button' target="_blank" href="https://www.facebook.com/p/Rev1-Detailing-Wrapping-100083076285508/">
        <FacebookIcon />
      </a>
      <a class='button' target="_blank" href="https://www.instagram.com/rev1_detailing_wrapping/">
        <InstagramIcon />
      </a>
    </section>


  </footer>
</template>

<script setup lang="ts">
import EmailIcon from '../assets/icons/EmailIcon.vue';
import PlaneIcon from '../assets/icons/PlaneIcon.vue';
import TelephoneIcon from '../assets/icons/TelephoneIcon.vue';
import Rev1_logo from '../assets/rev1_logo.vue';
import InstagramIcon from "../assets/icons/InstagramIcon.vue";
import FacebookIcon from "../assets/icons/FacebookIcon.vue";

</script>

<style scoped lang="postcss">
footer {
  @apply overflow-auto;
}

section p {
  @apply flex gap-2 items-center py-1;
}

.footerSection {
  @apply flex flex-col min-w-64;

  a {
    @apply py-1 duration-100 hover:text-white;
  }

  &.hours div {
    @apply flex items-center justify-between gap-20 w-full;
  }
}
</style>