<script setup lang="ts">
export type Trigger = 'hover' | 'click'
export type Placement = 'left' | 'top' | 'right' | 'bottom'
export type Offset = 'default' | 'sm' | 'lg'

const props = withDefaults(defineProps<{
  content: string

  trigger?: Trigger
  placement?: Placement
  offset?: Offset
}>(), {
  trigger: 'hover',
  placement: 'top',
  offset: 'default',
})

const isOpen = ref(false)

function toggle(): void {
  isOpen.value = !isOpen.value
}

function open(): void {
  isOpen.value = true
}

function close(): void {
  isOpen.value = false
}

const placementClasses = computed(() => {
  switch (props.placement) {
    case 'left':
      return 'right-full bottom-1/2 translate-y-1/2'
    case 'top':
      return 'bottom-full right-1/2 translate-x-1/2'
    case 'right':
      return 'left-full bottom-1/2 translate-y-1/2'
    case 'bottom':
      return 'top-full right-1/2 translate-x-1/2'
  }
})

const offsetClasses = computed(() => {
  if (props.offset === 'default') {
    switch (props.placement) {
      case 'left':
        return 'mr-2'
      case 'top':
        return 'mb-2'
      case 'right':
        return 'ml-2'
      case 'bottom':
        return 'mt-2'
    }
  }

  if (props.offset === 'sm') {
    switch (props.placement) {
      case 'left':
        return 'mr-1'
      case 'top':
        return 'mb-1'
      case 'right':
        return 'ml-1'
      case 'bottom':
        return 'mt-1'
    }
  }

  if (props.offset === 'lg') {
    switch (props.placement) {
      case 'left':
        return 'mr-4'
      case 'top':
        return 'mb-4'
      case 'right':
        return 'ml-4'
      case 'bottom':
        return 'mt-4'
    }
  }
})
</script>

<template>
  <div class="relative">
    <div
      @click="trigger === 'click' ? toggle() : undefined"
      @mouseenter="trigger === 'hover' ? open() : undefined"
      @mouseleave="trigger === 'hover' ? close() : undefined"
    >
      <slot>
        <AppButton>
          Default tooltip
        </AppButton>
      </slot>
    </div>

    <div
      v-show="isOpen"
      id="tooltip-default"
      role="tooltip"
      class="absolute z-10 inline-block w-max max-w-xs rounded-popover bg-neutral-900 px-3 py-2 text-body font-medium text-white shadow-popover-shadow transition-opacity duration-300 dark:bg-neutral-700"
      :class="[placementClasses, offsetClasses]"
    >
      {{ content }}
    </div>
  </div>
</template>
