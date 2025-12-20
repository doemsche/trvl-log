<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <app-theme-toggle />
      <auth-button />
    </div>
  </div>
</template>
