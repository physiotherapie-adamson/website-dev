<script setup lang="ts">
const drawer = ref(false);
useRouter().afterEach(() => (drawer.value = false));

const navbarRoutes = [
  { name: "Home", href: "/" },
  { name: "Über uns", href: "/about" },
  { name: "Gutscheine", href: "/gift-cards" },
];
</script>

<template>
  <header class="sticky top-0 py-2 bg-white bg-opacity-50 backdrop-blur-lg border-b">
    <div class="container flex items-center gap-2">
      <NuxtLink href="/">
        <h1 class="flex items-center gap-2">
          <Icon name="Logo" size="3em" aria-hidden="true" />
          <span>
            <span class="text-2xl block">Praxis für Physiotherapie</span>
            <span class="font-bold">Kersti Adamson</span>
          </span>
        </h1>
      </NuxtLink>
      <div class="ml-auto">
        <Button as="button" variant="ghost" size="icon" class="md:hidden" @click="drawer = true">
          <Icon name="uil:bars" size="1.5rem" />
        </Button>
        <Drawer v-model:open="drawer">
          <template #title>Navigation</template>
          <nav class="flex flex-col gap-2">
            <Button
              v-for="(route, i) of navbarRoutes"
              :key="i"
              class="justify-start"
              variant="ghost"
              :href="route.href"
            >
              {{ route.name }}
            </Button>
          </nav>
        </Drawer>
        <nav class="hidden md:flex gap-2">
          <Button v-for="(route, i) of navbarRoutes" :key="i" variant="ghost" :href="route.href">
            {{ route.name }}
          </Button>
        </nav>
      </div>
    </div>
  </header>
  <main class="container py-16">
    <slot />
  </main>
  <footer class="py-6 border-t">
    <div class="container sm:flex gap-2">
      <p class="text-xs text-gray-500">
        Copyright © Praxis für Physiotherapie Kersti Adamson. Alle Rechte vorbehalten.
      </p>
      <nav class="ml-auto flex gap-4">
        <Button variant="link" size="sm" href="/imprint">Impressum</Button>
        <Button variant="link" size="sm" href="/privacy">Datenschutz</Button>
      </nav>
    </div>
  </footer>
</template>
