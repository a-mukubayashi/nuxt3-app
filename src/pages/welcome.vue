<template>
  <main>
    <h1>Welcome page</h1>
    <NuxtLink to="/">index page</NuxtLink>
    <br />
    <UiButton />
    <br />
    <div>useHello: {{ hello }}</div>
    <div>nested function: {{ add(1, 2) }}</div>
    <button @click="getHello">get hello</button>
  </main>
</template>

<script setup lang="ts">
const getHello = async () => {
  const { data } = await useFetch("/api/hello");
  console.log(data.value.api); // works
};
const hello = useHello();
</script>
