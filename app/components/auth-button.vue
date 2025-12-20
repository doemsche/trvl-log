<script lang="ts" setup>
import { useAuthStore } from "@@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <button class="btn btn-accent" @click="authStore.signIn">
    Sign In with Github
    <span v-if="authStore.loading" class="loading loading-spinner loading-sm" />
    <Icon
      v-else
      name="tabler:brand-github"
      size="23"
    />
  </button>
</template>
