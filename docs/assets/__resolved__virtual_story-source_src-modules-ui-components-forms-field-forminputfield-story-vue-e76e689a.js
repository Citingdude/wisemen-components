const __resolved__virtual_storySource_srcModulesUiComponentsFormsFieldForminputfieldStoryVue = `<script setup lang="ts">
const model = ref<number>()
const model2 = ref<number>()
const model3 = ref()
<\/script>

<template>
  <Story title="Forms/Input/Field">
    <Variant title="Default">
      <FormInputField v-model="model" />
    </Variant>
    <Variant title="Label">
      <FormInputField v-model="model" label="exampleLabel" />
      <FormInputField v-model="model">
        <template #label>
          Slot label
        </template>
      </FormInputField>
    </Variant>
    <Variant title="Placeholder">
      <FormInputField v-model="model" placeholder="examplePlaceholder" />
    </Variant>
    <Variant title="Unit">
      <FormInputField v-model="model" unit="m2" />
    </Variant>
    <Variant title="Number">
      <FormInputField v-model="model" type="number" />
    </Variant>
    <Variant title="Disabled">
      <FormInputField v-model="model" is-disabled />
    </Variant>
    <Variant title="Readonly">
      <FormInputField v-model="model" is-read-only />
    </Variant>
    <Variant title="Success">
      <FormInputField v-model="model" has-success />
    </Variant>
    <Variant title="Error">
      <FormInputField v-model="model" :errors="{ _errors: ['Error test'] }" />
    </Variant>
    <Variant title="Front content">
      <FormInputField v-model="model">
        <template #front-content>
          <WarningIcon class="w-4" />
        </template>
      </FormInputField>
    </Variant>
    <Variant title="Back content">
      <FormInputField v-model="model">
        <template #back-content>
          <WarningIcon class="w-4" />
        </template>
      </FormInputField>
    </Variant>
    <Variant title="Group">
      <FormInputGroup :total-value="500">
        <FormInputField v-model="model" type="number" />
        <FormInputField v-model="model2" type="number" />
        <FormInputField v-model="model3" type="number" />
      </FormInputGroup>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcModulesUiComponentsFormsFieldForminputfieldStoryVue as default
};
