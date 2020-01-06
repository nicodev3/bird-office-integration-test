<template>
  <header class="g-header u-flex u-flex-align-center">
    <div class=" u-flex u-flex-space-between u-flex-align-center u-full-width">
      <nuxt-link :to="{ name: 'index' }" class="g-header__nuxt-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="157px" viewBox="0 0 158 38" class="g-header__logo">
          <path
            d="M0 0h158v3H0zm0 35h157.88v3H0zM134 4.21h24v8.2h-6.49v21.06h-11V12.41H134zm-16.48 0v29.26h20v-8.64h-9V4.21zM95 4.47h12.06l9.25 29h-10.72l-1.1-4.42h-6.74l-1 4.42H85.53zm4.25 18.13H103l-1.83-8.44zm-10-18.13H78.49l-3 14.16-3.24-14.16h-9.49L59.7 18.63 56.77 4.47H46l8 29h10l3.35-14.15 3.45 14.15H81zm-59 6.21h16v6h-7.76v2.47h6.74v6h-6.74v2.47h7.74v5.91h-16zM0 33.47v-29h13.64c8.06 0 14.48 4.37 14.48 14.53 0 9.91-6.21 14.44-14.53 14.44zm11.26-8.69c3.45 0 5.74-1.44 5.74-5.85 0-4.84-2.26-6.13-5.72-6.13h-.89v12zM153 30.87a2.42 2.42 0 112.43 2.38 2.38 2.38 0 01-2.43-2.38zm2.43 2a2 2 0 10-1.95-2 1.92 1.92 0 001.9 1.99zm-.47-1.68h.39l.52.88h.6l-.61-.92a.73.73 0 00.69-.8c0-.41-.33-.73-1-.73h-1v2.45h.45zm0-.41V30h.54c.29 0 .63 0 .63.38s-.27.4-.64.4z"
            fill-rule="evenodd"
          />
        </svg>
      </nuxt-link>

      <div class="g-header__divider"></div>
      <div class="g-header__shopping">
        <div class="g-header__shopping__count">0</div>
        <div class="g-header__shopping__text">shopping cart</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="28px" viewBox="0 0 28 25" class="g-header__shopping__logo">
          <path
            d="M.91 0a.92.92 0 000 1.83h3.52l3.14 14.83c.13.56.49 1 .95 1h15.23a.94.94 0 00.92-.91 1 1 0 00-.92-.92H9.27L8.88 14H25a.94.94 0 00.88-.71L28 4.16a1 1 0 00-.88-1.11H6.56L6.07.72A1 1 0 005.18 0zM7 4.88h19l-1.76 7.32H8.5zm4.92 14a3.05 3.05 0 103 3.12 3.06 3.06 0 00-3.05-3.1zm8.53 0a3.05 3.05 0 103 3.05 3.07 3.07 0 00-3.05-3.03zm-8.53 1.83A1.22 1.22 0 1110.66 22a1.21 1.21 0 011.21-1.27zm8.53 0A1.22 1.22 0 1119.18 22a1.21 1.21 0 011.22-1.27z"
            fill="#febd17"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="postcss">
  .g-header {
    height: 80px;
    padding: 0 8px;
    box-shadow: 0 1px 1px 0 hsla(0, 0%, 0%, 0.15);

    &__nuxt-link {
      height: 37px;
    }

    &__divider {
      display: none;
      width: 1px;
      height: 50px;
      margin: 0 16px 0 auto;
      background-color: #c3c3c3;
    }

    &__shopping {
      width: 188px;
      display: flex;
      justify-content: flex-end;

      &__count {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--accent-color);
        color: #fff;
        font-size: 10px;
      }

      &__text {
        display: none;
        color: var(--grey);
        font-weight: 600;
        letter-spacing: 1px;
      }
    }
  }

  @media (--medium) {
    .g-header {
      padding: 0 70px;

      &__divider {
        display: block;
      }

      &__shopping {
        justify-content: space-between;
        &__text {
          display: block;
        }
      }
    }
  }
</style>
