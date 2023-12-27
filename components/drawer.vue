<script setup lang="ts">
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from "radix-vue";
import { cva } from "class-variance-authority";

type Props = { side?: "left" | "right" | "top" | "bottom"; open: boolean };
type Emits = { "update:open": [value: boolean] };

withDefaults(defineProps<Props>(), { side: "left" });
const emit = defineEmits<Emits>();

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-border data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t border-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
  },
);
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', false)">
    <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />
      <DialogContent :class="sheetVariants({ side: side })">
        <div class="flex items-center">
          <DialogTitle class="text-lg font-semibold text-foreground">
            <slot name="title" />
          </DialogTitle>
          <Button as="button" variant="ghost" size="icon" class="ml-auto" @click="emit('update:open', false)">
            <Icon name="uil:times" size="1.5rem" />
          </Button>
        </div>
        <div class="py-6">
          <slot />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
