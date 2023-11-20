<script setup>
const env = import.meta.env;
</script>

<template>
  <main>
    <h1>Hello World</h1>
    <hr/>
    <div class="tw_w-[600px] tw_border tw_p-2 tw_overflow-x-scroll">
      <pre>{{ env }}</pre>
    </div>
  </main>
</template>

<style scoped lang="postcss">
</style>
