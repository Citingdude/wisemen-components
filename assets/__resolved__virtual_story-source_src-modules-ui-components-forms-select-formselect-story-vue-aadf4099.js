const __resolved__virtual_storySource_srcModulesUiComponentsFormsSelectFormselectStoryVue = `<script setup lang="ts">
const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

const selectedPerson = ref<string>()
const selectedPeople = ref<string[]>([])

interface State {
  hasSearch?: boolean
  isDisabled?: boolean
  isLoading?: boolean
}

const state: State = {
  hasSearch: true,
  isDisabled: false,
  isLoading: false,
}
<\/script>

<template>
  <Story title="Forms/Input/Select">
    <Variant title="Default">
      <template #controls>
        <HstCheckbox v-model="state.hasSearch" title="Search" />
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isLoading" title="Loading" />
      </template>

      <div class="flex flex-col justify-start gap-20 py-20">
        <!-- <FormSelect2 v-model="selectedPerson" :items="people" class="w-80" v-bind="state" /> -->
        <FormSelect
          v-bind="state"
          v-model="selectedPeople"
          class="w-80"
          :items="people"
          :display-function="value => value"
        />
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcModulesUiComponentsFormsSelectFormselectStoryVue as default
};
