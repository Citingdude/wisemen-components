const __resolved__virtual_storySource_srcModulesUiComponentsAppModalsAppmodalStoryVue = '<script setup lang="ts">\nconst modalOpen1 = ref(false)\nconst handleClick = (): void => {\n  modalOpen1.value = true\n}\n<\/script>\n\n<template>\n  <Story\n    title="App/Modals/AppModal"\n  >\n    <Variant title="Default">\n      <AppButton @component:click="handleClick">\n        Click me\n      </AppButton>\n      <AppModal\n        :is-open="modalOpen1"\n        @close="modalOpen1 = false"\n      >\n        <template #title>\n          Title here\n        </template>\n        <template #content>\n          Content here\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus nulla ab eius enim similique atque officia? Porro consectetur, ea iusto perspiciatis ullam nisi minus, inventore iste quisquam placeat nemo?\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ullam ipsam minima, vitae commodi expedita corporis aliquid illum quis laudantium adipisci laboriosam est maxime quae enim aliquam sed ipsa.\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iste, adipisci sapiente odit beatae architecto aspernatur perferendis quis. Esse dicta, minima non aperiam sunt ad veniam ab velit officiis magni.\n        </template>\n        <template #footer>\n          Footer here\n        </template>\n      </AppModal>\n    </Variant>\n  </Story>\n</template>\n';
export {
  __resolved__virtual_storySource_srcModulesUiComponentsAppModalsAppmodalStoryVue as default
};
