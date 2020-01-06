<template>
  <div class="error-page">
    <h1>No content here !</h1>
    <svg xmlns="http://www.w3.org/2000/svg" width="100px" viewBox="0 0 59.96 70.1">
      <path
        d="M53.38 70.1L0 63.87 8.86 0l35.91 4L60 23.55zM41.46 7.9L13 5.05 4.94 59.78l44.3 5.41 5.36-36.9L37.53 26zM17.69 50.11c-.31-.4-3.05-2.68-3.56-3.39 7.28-8.08 25.06-8 30 2.71-.82.3-4.5 1.89-5.22 2.29-2.06-5.96-14.12-7.84-21.22-1.61zM31.38 28l-3 2.25-4.51-5.42-6.15 3.29L15.24 24l5.59-2.8-3.7-4.44 4.5-3L25.22 19l6.4-3.2 1.93 3.86-5.77 3.08z"
        fill-rule="evenodd"
      />
    </svg>
  </div>
</template>
<style lang="postcss" scoped>
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;

    & h1 {
      margin-bottom: 100px;
    }
  }
</style>
