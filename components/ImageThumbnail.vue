<template>
  <nuxt-link :to="'/event/' + event.id" class="home-thumbnails__thumbnail">
    <img :src="`${event.image}.jpg`" :alt="event.image" />
    <span class="home-thumbnails__thumbnail__price">${{ event.price }}</span>
    <span class="home-thumbnails__thumbnail__title">{{ event.title }}</span>
  </nuxt-link>
</template>
<script>
  export default {
    props: {
      event: Object
    }
  }
</script>
<style lang="postcss"></style>
