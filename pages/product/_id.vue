<template>
  <div class="container">
    <div class="c-product">
      <div class="c-product__text">
        <h1 class="c-product__title">{{ product.title }}</h1>
        <h2 class="c-product__price">EUR {{ product.price | currency }}</h2>
        <hr class="c-product__hr" />
        <p class="c-product__description">{{ product.description[0] }}</p>
        <p class="c-product__description">{{ product.description[1] }}</p>
        <p class="c-product__warning">
          Prices valid till 31.10.2019, yearly adjustment for conversion rate to EURO
        </p>
        <div class="c-product__cart u-flex u-flex-space-between u-flex-align-center">
          <div class="c-product__cart__changer u-flex u-flex-space-between u-flex-align-center">
            <button @click="removeProduct" class="c-product__cart__changer__button">
              <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 13.23 2.2">
                <path
                  d="M0 1.1A1.1 1.1 0 011.1 0h11a1.1 1.1 0 010 2.2h-11a1.1 1.1 0 01-.78-.32A1.09 1.09 0 010 1.1z"
                  fill="#464646"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <span>{{ count }}</span>
            <button @click="addProduct" class="c-product__cart__changer__button">
              <svg xmlns="http://www.w3.org/2000/svg" width="12px" viewBox="0 0 12 12">
                <path
                  d="M6 0a1 1 0 011 1v4h4a1 1 0 010 2H7v4a1 1 0 01-2 0V7H1a1 1 0 01-1-1 1 1 0 011-1h4V1a1 1 0 011-1z"
                  fill="#464646"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <button @click="addProductToCart" class="c-product__cart__add-button">Add to Cart</button>
        </div>
      </div>
      <div :style="{ backgroundImage: `url(/${product.image}.jpg)` }" class="c-product__image"></div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        count: 0
      }
    },

    computed: mapState({
      product: (state) => state.products.product
    }),

    /* fetch is a hook that works on client & server side
    to fill the store before rendering the page */
    async fetch({ store, error, params }) {
      try {
        await store.dispatch('products/fetchProduct', params.id)
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch product #' + params.id
        })
      }
    },

    methods: {
      addProduct() {
        this.count++
      },
      removeProduct() {
        this.count--
      },
      // todo: dispatch this to store
      addProductToCart() {
        console.log(`omg, I didn't have time to implement this !`)
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .c-product {
    display: flex;
    flex-wrap: wrap;
    padding: 0 16px;

    &__title {
      color: var(--deep-blue);
    }

    &__price {
      margin-top: 16px;
      color: var(--accent-color);
      font-size: 34px;
    }

    &__description {
      margin-top: 34px;
      color: #585858;
      font-size: 18px;
      line-height: 32px;
    }

    &__hr {
      display: block;
      height: 13px;
      margin-top: 12px;
      border: 0;
      background-color: var(--orange-light);
    }

    &__warning {
      margin-top: 25px;
      color: var(--grey);
      font-size: 18px;
    }

    &__cart {
      width: 283px;
      margin-top: 20px;

      &__changer {
        width: 120px;
        background-color: var(--grey-transparent);

        &__button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          margin: 5px;
          border: 0;
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
        }
      }

      &__add-button {
        padding: 12px 28px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        background-color: var(--accent-color);
        color: #fff;
        font-size: 17px;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
      }
    }

    &__image {
      order: 1;
      width: 100%;
      height: 200px;
      background-position: 0 0;
      background-size: cover;
    }

    &__text {
      order: 2;
    }
  }

  @media (--medium) {
    .c-product {
      margin-top: 88px;
      padding: 0 90px;

      &__title {
        font-size: 52px;
        line-height: 61px;
      }

      &__text {
        order: 1;
        width: 60%;
        padding-right: 40px;
      }

      &__image {
        order: 2;
        width: 40%;
        height: 78vh;
        background-position: 0 0;
        background-size: cover;
      }

      &__cart {
        margin-top: 76px;
      }
    }
  }
</style>
