<template>
  <nuxt-link :to="'/product/' + product.id" class="home-thumbnails__thumbnail">
    <img :src="`${product.image}.jpg`" :alt="product.image" />
    <span class="home-thumbnails__thumbnail__price">${{ product.price }}</span>
    <span class="home-thumbnails__thumbnail__title">{{ product.title }}</span>
  </nuxt-link>
</template>
<script>
  export default {
    props: {
      product: Object
    }
  }
</script>
