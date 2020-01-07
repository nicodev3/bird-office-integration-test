<template>
  <div>
    <section class="just-booked">
      <h1 class="just-booked__title">Just Booked</h1>
      <div class="home-thumbnails">
        <image-thumbnail
          v-for="(product, index) in bookedProducts"
          :key="index"
          :product="product"
          :data-index="index"
        />
      </div>
    </section>
    <section class="just-booked">
      <h1 class="just-booked__title">Featured experiences</h1>
      <div class="home-thumbnails">
        <image-thumbnail
          v-for="(product, index) in availableProducts"
          :key="index"
          :product="product"
          :data-index="index"
        />
      </div>
    </section>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import ImageThumbnail from '@/components/ImageThumbnail.vue'

  export default {
    components: {
      ImageThumbnail
    },

    computed: mapState({
      bookedProducts: (state) => state.products.products.filter((product) => product.booked),
      availableProducts: (state) => state.products.products.filter((product) => !product.booked)
    }),

    async fetch({ store, error }) {
      try {
        await store.dispatch('products/fetchProducts')
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch products at this time. Please try again.'
        })
      }
    }
  }
</script>

<style lang="postcss">
  .just-booked {
    max-width: 1032px;
    margin: 16px auto 0;
    padding: 0 16px;

    &__title {
      margin-bottom: 27px;
      color: var(--deep-blue);
      font-size: 32px;
      font-weight: 600;
    }
  }

  .home-thumbnails {
    &__thumbnail {
      color: #484848;
      text-decoration: none;

      & img {
        width: 100%;
      }

      &__price {
        font-weight: 700;
      }

      &__title {
        padding-left: 10px;
        font-size: 15px;
      }
    }
  }

  @media (--medium) {
    .just-booked {
      margin: 78px auto 0;
    }

    .home-thumbnails {
      display: grid;
      grid-template-columns: repeat(5, 194px);
      grid-column-gap: 16px;
    }
  }
</style>
