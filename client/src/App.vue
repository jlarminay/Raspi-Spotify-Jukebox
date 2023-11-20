<script setup>
import router from '@/lib/router';
</script>

<template>
  <div class="tw_p-4">
    <router-view :key="router.currentRoute.value.toString()" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped lang="postcss"></style>
