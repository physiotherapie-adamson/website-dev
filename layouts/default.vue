<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
  <nav>
    <div class="container">TODO</div>
  </nav>
  <main class="container">
    <slot />
  </main>
  <footer class="py-6 border-t">
    <div class="container sm:flex">
      <p class="text-xs text-gray-500">
        Copyright © Praxis für Physiotherapie Kersti Adamson. Alle Rechte vorbehalten.
      </p>
      <div class="ml-auto flex gap-4">
        <Button variant="link" size="sm" :as="NuxtLink" to="/imprint">Impressum</Button>
        <Button variant="link" size="sm" :as="NuxtLink" to="/privacy">Datenschutz</Button>
      </div>
    </div>
  </footer>
</template>
