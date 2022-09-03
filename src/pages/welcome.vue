<template>
  <main>
    <h1>Welcome page</h1>
    <NuxtLink to="/">index page</NuxtLink>
    <br />
    <UiButton />
    <br />
    <div>useHello: {{ hello }}</div>
  </main>
</template>

<script setup>
const hello = useHello();
</script>
