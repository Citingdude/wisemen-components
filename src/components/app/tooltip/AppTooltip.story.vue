<script setup lang="ts">
import type { Offset, Placement, Trigger } from './AppTooltip.vue'

interface State {
  trigger: Trigger
  content: string
  placement: Placement
  offset: Offset
}

const state: State = reactive({
  trigger: 'hover',
  content: 'Tooltip content',
  placement: 'top',
  offset: 'default',
})
</script>

<template>
  <Story title="App/Tooltips/AppTooltip">
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstSelect v-model="state.trigger" title="Trigger" :options="['hover', 'click']" />
        <HstSelect
          v-model="state.placement"
          title="Placement"
          :options="['left', 'top', 'right', 'bottom']"
        />
        <HstSelect
          v-model="state.offset"
          title="Offset"
          :options="['default', 'sm', 'lg']"
        />
        <HstText v-model="state.content" title="Text" />
      </template>

      <div class="flex items-center justify-center py-32">
        <AppTooltip
          :trigger="state.trigger"
          :content="state.content"
          :placement="state.placement"
          :offset="state.offset"
        />
      </div>
    </Variant>
  </Story>
</template>
