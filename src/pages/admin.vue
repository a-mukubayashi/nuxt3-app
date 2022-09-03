<template>
  <main>
    <h1>admin page</h1>
    <NuxtLink to="/">index page</NuxtLink>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
