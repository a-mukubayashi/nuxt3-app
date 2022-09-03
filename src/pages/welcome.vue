<template>
  <main>
    <h1 class="welcome">Welcome page</h1>
    <NuxtLink to="/">index page</NuxtLink>
    <br />
    <UiButton name="button label" @onClick="onClick" />
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

const onClick = () => {
  console.log("button emit event");
};
</script>

<style scoped>
.welcome {
  color: var(--secondary);
}
</style>
