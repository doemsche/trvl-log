<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "unknown error occured";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center mt-4">
    <div role="alert" class="alert alert-error">
      <span>Oh no {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary">
      Home
      <Icon name="tabler:arrow-left" size="32" />
    </NuxtLink>
  </div>
</template>
