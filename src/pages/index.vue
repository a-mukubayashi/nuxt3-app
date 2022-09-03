<template>
  <main>
    <h1>Index page</h1>
    <NuxtLink to="/welcome">welcome page</NuxtLink>
    <ContentDoc />
  </main>
</template>

<script setup>
definePageMeta({
  title: "index page title",
});
</script>
