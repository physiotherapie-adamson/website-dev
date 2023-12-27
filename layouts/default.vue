<script setup lang="ts"></script>

<template>
  <div class="min-h-full flex flex-col">
    <header class="sticky top-0 py-2 bg-white bg-opacity-50 backdrop-blur-lg border-b">
      <div class="container flex items-center">
        <NuxtLink href="/">
          <h1 class="flex items-center gap-2">
            <Icon name="Logo" size="3em" aria-hidden="true" />
            <span>
              <span class="text-2xl block">Praxis für Physiotherapie</span>
              <span class="font-bold">Kersti Adamson</span>
            </span>
          </h1>
        </NuxtLink>
        <nav class="ml-auto flex gap-2">
          <Button variant="ghost" href="/">Home</Button>
          <Button variant="ghost" href="/about">Über uns</Button>
          <Button variant="ghost" href="/gift-cards">Gutscheine</Button>
        </nav>
      </div>
    </header>
    <main class="container py-16">
      <slot />
    </main>
    <footer class="mt-auto py-6 border-t">
      <div class="container sm:flex">
        <p class="text-xs text-gray-500">
          Copyright © Praxis für Physiotherapie Kersti Adamson. Alle Rechte vorbehalten.
        </p>
        <nav class="ml-auto flex gap-4">
          <Button variant="link" size="sm" href="/imprint">Impressum</Button>
          <Button variant="link" size="sm" href="/privacy">Datenschutz</Button>
        </nav>
      </div>
    </footer>
  </div>
</template>
