const __resolved__virtual_storySource_srcModulesUiComponentsFormsRadioFormradioStoryVue = '<script setup lang="ts">\nconst model1 = ref()\n<\/script>\n\n<template>\n  <Story\n    title="Forms/Input/FormRadio"\n  >\n    <Variant title="Default">\n      <FormRadioGroup v-model="model1" class="flex flex-col gap-1">\n        <FormRadioOption value="value1" />\n        <FormRadioOption value="value2" />\n        <FormRadioOption value="value3" />\n      </FormRadioGroup>\n    </Variant>\n    <Variant title="With title">\n      <FormRadioGroup v-model="model1" class="flex flex-col gap-1" label="Title">\n        <FormRadioOption value="value1" />\n        <FormRadioOption value="value2" />\n        <FormRadioOption value="value3" />\n      </FormRadioGroup>\n    </Variant>\n\n    <Variant title="With label">\n      <FormRadioGroup v-model="model1" class="flex flex-col gap-1">\n        <FormRadioOption value="value1" label="label1" />\n        <FormRadioOption value="value2" label="label2" />\n        <FormRadioOption value="value3" label="label3" />\n      </FormRadioGroup>\n    </Variant>\n    <Variant title="With slot">\n      <FormRadioGroup v-model="model1" class="flex flex-col gap-1">\n        <FormRadioOption value="value1">\n          Slot 1\n        </FormRadioOption>\n        <FormRadioOption value="value2">\n          Slot 2\n        </FormRadioOption>\n        <FormRadioOption value="value3">\n          Slot 3\n        </FormRadioOption>\n      </FormRadioGroup>\n    </Variant>\n  </Story>\n</template>\n';
export {
  __resolved__virtual_storySource_srcModulesUiComponentsFormsRadioFormradioStoryVue as default
};
