<template>
  <main>
    <h1>Index page</h1>
    <NuxtLink to="/welcome">welcome page</NuxtLink>
    <NuxtLink to="/admin">admin page</NuxtLink>
    <ContentDoc />
    <div>
      Counter: {{ counter }}
      <button @click="updateCounter(counter + 1)">+</button>
      <button @click="updateCounter(counter - 1)">-</button>
    </div>
  </main>
</template>

<script setup>
const { counter, updateCounter } = useCounter();

definePageMeta({
  title: "index page title",
});
</script>
