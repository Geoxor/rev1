<template>
  <div class="scrollAnimation"></div>
</template>

<style scoped lang="postcss">
.scrollAnimation:before,
.scrollAnimation:after {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  border-bottom: 4px solid white;
  border-right: 4px solid white;
}

.scrollAnimation:before {
  animation: down-arrow-before 2.6s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

.scrollAnimation:after {
  animation: down-arrow-after 2.6s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

@keyframes down-arrow-before {
  50% {
    transform: rotate(45deg) translate(70%, 70%);
  }

  100% {
    transform: rotate(45deg) translate(70%, 70%);
  }
}

@keyframes down-arrow-after {
  50% {
    transform: rotate(45deg) translate(110%, 110%);
    opacity: 0;
  }

  51% {
    transform: rotate(45deg) translate(-130%, -130%);
  }

  100% {
    transform: rotate(45deg) translate(-70%, -70%);
    opacity: 1;
  }
}
</style>