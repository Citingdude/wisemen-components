const __resolved__virtual_storySource_srcModulesUiComponentsAppTextApptextStoryVue = `<script setup lang="ts">
import AppText from './AppText.vue'

import type { TextProps } from './appTextVariants'
import { textBoldnessOptions, textTruncateOptions, textVariantOptions } from './appTextVariants'

interface State {
  variant: TextProps['variant']
  boldness: TextProps['boldness']
  numberOfLines?: TextProps['truncate']
  text: string
}

const state = reactive<State>({
  variant: 'p',
  boldness: undefined,
  numberOfLines: undefined,
  text: 'Text',
})
<\/script>

<template>
  <Story
    title="App/Text/AppText"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstSelect v-model="state.variant" title="Variant" :options="textVariantOptions" />
        <HstSelect v-model="state.boldness" title="Boldness" :options="['none', ...textBoldnessOptions]" />
        <HstSelect v-model="state.numberOfLines" title="Number of lines" :options="['none', ...textTruncateOptions]" />
        <HstTextarea v-model="state.text" title="Text" />
      </template>

      <AppText v-bind="state">
        {{ state.text }}
      </AppText>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcModulesUiComponentsAppTextApptextStoryVue as default
};
