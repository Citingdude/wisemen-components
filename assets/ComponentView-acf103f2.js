import { as as defineComponent, b_ as useRoute, ax as openBlock, aJ as createElementBlock, aN as toDisplayString } from "./vendor-0d4e1342.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const componentInfo = [
  {
    component: "AppButton",
    name: "Button",
    files: [
      {
        name: "AppButton.vue",
        dir: "./src/modules/ui/components/app/buttons/app-button",
        placementDir: "app/buttons",
        type: "components",
        content: `<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from './appButtonVariants'
import type { ButtonProps } from './appButtonVariants'
import type { Icon } from '@/icons'

interface Props {
  isDisabled?: boolean
  isLoading?: boolean
  isRounded?: boolean
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  frontIcon?: Icon
  backIcon?: Icon
}

const {
  variant = 'default',
  size = 'default',
  isDisabled = false,
  isLoading = false,
  frontIcon,
  backIcon,
} = defineProps<Props>()

const emits = defineEmits(['component:click'])

const handleClick = (): void => {
  if (!isDisabled && !isLoading)
    emits('component:click')
}
<\/script>

<template>
  <button
    :class="twMerge(buttonVariants({ variant, size, isRounded }))" @click="handleClick"
  >
    <div :class="{ 'opacity-30': isLoading }" class="flex items-center gap-2 whitespace-nowrap transition-opacity">
      <slot name="front-icon">
        <AppIcon v-if="frontIcon" :icon="frontIcon" />
      </slot>
      <slot />
      <slot name="back-icon">
        <AppIcon v-if="backIcon" :icon="backIcon" />
      </slot>
    </div>
    <AppButtonLoader :is-loading="isLoading" />
  </button>
</template>
`
      },
      {
        name: "appButtonVariants.ts",
        dir: "./src/modules/ui/components/app/buttons/app-button",
        placementDir: "app/buttons",
        type: "components",
        content: "import type { VariantProps } from 'class-variance-authority'\nimport { cva } from 'class-variance-authority'\n\nexport const variantOptions = {\n  default: 'bg-primary text-primary-foreground hover:bg-primary/90',\n  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive',\n  outline: 'border border-primary hover:bg-secondary text-secondary-foreground',\n  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',\n  ghost: 'hover:bg-secondary text-secondary-foreground',\n  link: 'text-primary underline-offset-4 hover:underline',\n}\n\nexport const sizeOptions = {\n  icon: 'h-10 p-3 w-10',\n  default: 'h-10 px-4 py-2',\n  sm: 'h-9 rounded px-3',\n  lg: 'h-11 rounded px-8',\n}\n\nexport const loaderVariantOptions = {\n  white: 'bg-white',\n  primary: 'bg-primary',\n}\n\nexport const buttonVariants = cva(\n  'relative inline-flex items-center justify-center rounded text-sm font-medium text-destructive-foreground transition-colors disabled:pointer-events-none disabled:opacity-50',\n  {\n    variants: {\n      variant: variantOptions,\n      size: sizeOptions,\n      isRounded: {\n        true: 'rounded-full',\n        false: '',\n      },\n    },\n    defaultVariants: {\n      variant: 'default',\n      size: 'default',\n    },\n  },\n)\n\nexport type ButtonProps = VariantProps<typeof buttonVariants>\n\nexport const buttonVariantOptions = Object.keys(variantOptions)\nexport const buttonSizeOptions = Object.keys(sizeOptions)\n"
      },
      {
        name: "AppButtonLoader.vue",
        dir: "./src/modules/ui/components/app/buttons/app-button",
        placementDir: "app/buttons",
        type: "components",
        content: `<script setup lang="ts">
import { fadeTransition } from '@/transitions'

interface Props {
  isLoading: boolean
}
const {
  isLoading,
} = defineProps<Props>()
<\/script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <Transition v-bind="fadeTransition">
    <div v-if="isLoading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="relative inline-block h-2.5 w-10">
        <div
          v-for="i in 4" :key="i" class="orb shadow-focus absolute top-[1px] h-2 w-2 rounded-full bg-current"
        />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.orb:nth-child(1) {
  left: 4px;
  animation: lds-ellipsis1 0.6s infinite;
}

.orb:nth-child(2) {
  left: 4px;
  animation: lds-ellipsis2 0.6s infinite;
}

.orb:nth-child(3) {
  left: 16px;
  animation: lds-ellipsis2 0.6s infinite;
}

.orb:nth-child(4) {
  left: 28px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(12px, 0);
  }
}
</style>
`
      }
    ],
    internalDependencies: [],
    dependencies: [
      "class-variance-authority"
    ]
  },
  {
    component: "FormError",
    name: "FormError",
    files: [
      {
        name: "FormError.vue",
        dir: "./src/modules/ui/components/forms/error",
        placementDir: "forms/errors",
        type: "components",
        content: '<script setup lang="ts">\ninterface Props {\n  errorMessage?: string\n}\nconst { errorMessage } = defineProps<Props>()\n<\/script>\n\n<template>\n  <p class="text-sm text-destructive">\n    <slot>\n      {{ errorMessage }}\n    </slot>\n  </p>\n</template>\n'
      }
    ]
  },
  {
    component: "FormInputField",
    name: "FormInputField",
    files: [
      {
        name: "FormInputField.vue",
        dir: "./src/modules/ui/components/forms/field",
        placementDir: "forms/field",
        type: "components",
        content: `<script setup lang="ts" generic="TModel extends string | number | undefined">
import { twMerge } from 'tailwind-merge'
import { useClipboard } from '@vueuse/core'
import type { InputFieldProps } from './formInputFieldVariants'
import { inputFieldExtraContentVariants, inputFieldVariants } from './formInputFieldVariants'
import { generateUuid } from '@/helpers/uuid/generateUuid'
import { useFormInputGroup } from '@/modules/ui/composables/forms/group/useFormInputGroup'
import type { Icon } from '@/icons'

interface Props {
  isSuccess?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isTouched?: boolean
  isDirty?: boolean
  isCopyable?: boolean
  isOptional?: boolean
  hasExtraContentBorder?: boolean
  placeholder?: string
  type?: TModel extends number ? 'number' : 'text' | 'password' | 'email' | 'tel' | 'url' | 'search'
  label?: string
  errors?: { _errors: string[] }
  backContent?: string
  frontContent?: string
  backIcon?: Icon
  frontIcon?: Icon
}

const {
  isSuccess = false,
  isReadOnly = false,
  isDisabled = false,
  isTouched = false,
  isDirty = false,
  isCopyable = false,
  placeholder,
  backContent,
  frontContent,
  backIcon,
  frontIcon,
  label,
  errors = { _errors: [] },
  type = 'text',
} = defineProps<Props>()

const emits = defineEmits<{
  blur: []
}>()

const model = defineModel<TModel>()
const uuid = generateUuid()
const element = ref<HTMLElement>()

const slots = defineSlots<{
  label?: (props: {}) => any
  'front-content'?: (props: {}) => any
  'back-content'?: (props: {}) => any
}>()

const errorShown = computed(() => errors._errors.length > 0 && (isTouched || isDirty))

// Extra content logic
const hasFrontContent = computed(() => frontContent || slots['front-content'] || frontIcon)
const hasBackContent = computed(() => backContent || slots['back-content'] || backIcon || isCopyable || type === 'password')
const currentExtraContent = computed<InputFieldProps['extraContent']>(() => {
  if (hasFrontContent.value && hasBackContent.value)
    return 'both'
  if (hasFrontContent.value)
    return 'front'
  if (hasBackContent.value)
    return 'back'
  return 'default'
})

// Input status logic
const currentStatus = computed<InputFieldProps['status']>(() => {
  if (errorShown.value)
    return 'error'
  if (isSuccess)
    return 'success'
  if (isReadOnly)
    return 'readonly'
  if (isDisabled)
    return 'disabled'
  return 'default'
})

// Copy logic
const copyModel = computed(() => model.value?.toString() ?? '')
const { copy } = useClipboard()

// Adds grouping logic if a wrapped in FormGroup component
if (type === 'number')
  useFormInputGroup({ model: model as Ref<number>, element, uuid, isDisabled: computed(() => isDisabled) })

// Password logic
const passwordShown = ref(false)
const togglePasswordShown = (): void => {
  passwordShown.value = !passwordShown.value
}
const inputType = computed<string>(() => (type === 'password' && passwordShown.value) ? 'text' : type)
<\/script>

<template>
  <div ref="element">
    <!-- Label -->
    <div class="flex items-center justify-between gap-4">
      <FormLabel :for="uuid">
        <slot name="label">
          {{ label }}
        </slot>
      </FormLabel>
      <p v-if="isOptional" class="text-xs text-muted-foreground">
        Optional
      </p>
    </div>

    <div class="flex">
      <!-- Content before the input -->
      <div
        v-if="hasFrontContent" :class="
          twMerge(inputFieldExtraContentVariants(
            {
              extraContentType: 'front',
              status: currentStatus,
              extraContentBorder: hasExtraContentBorder,
            },
          ))"
      >
        <slot name="front-content">
          <AppIcon v-if="frontIcon" :icon="frontIcon" />
          <div v-else-if="frontContent">
            {{ frontContent }}
          </div>
        </slot>
      </div>

      <!-- Input -->
      <input
        :id="uuid" v-model="model" :disabled="isDisabled" :type="inputType" min="0"
        :class="twMerge(inputFieldVariants({ status: currentStatus, extraContent: currentExtraContent }))"
        :placeholder="placeholder" :readonly="isReadOnly" @blur="emits('blur')"
      >

      <!-- Content after the input -->
      <div
        v-if="hasBackContent" :class="
          twMerge(inputFieldExtraContentVariants(
            {
              extraContentType: 'back',
              status: currentStatus,
              extraContentBorder: hasExtraContentBorder,
            },
          ))"
      >
        <slot name="back-content">
          <button v-if="type === 'password'" @click="togglePasswordShown">
            <AppIcon v-if="passwordShown" icon="eyeClosed" />
            <AppIcon v-else icon="eyeOpen" />
          </button>
          <button v-else-if="isCopyable" @click="copy(copyModel)">
            Copy
          </button>
          <AppIcon v-else-if="backIcon" :icon="backIcon" />
          <div v-else-if="backContent">
            {{ backContent }}
          </div>
        </slot>
      </div>
    </div>
    <!-- Error -->
    <TransitionExpand :duration="0.2">
      <FormError v-if="errorShown" :error-message="errors._errors[0]" />
    </TransitionExpand>
  </div>
</template>
`
      },
      {
        name: "formInputFieldVariants.ts",
        dir: "./src/modules/ui/components/forms/field",
        placementDir: "forms/field",
        type: "components",
        content: "import type { VariantProps } from 'class-variance-authority'\nimport { cva } from 'class-variance-authority'\n\nexport const statusOptions = {\n  default: 'border-border',\n  error: 'border-destructive',\n  success: 'border-success',\n  readonly: 'bg-muted text-muted-foreground',\n  disabled: 'opacity-60',\n}\n\nexport const extraContentOptions = {\n  default: '',\n  back: 'rounded-r-none border-r-0',\n  front: 'rounded-l-none border-l-0',\n  both: 'rounded-l-none border-l-0 rounded-r-none border-r-0',\n}\n\nexport const inputFieldVariants = cva(\n  'relative w-full rounded border border-border bg-input px-4 py-2 placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0',\n  {\n    variants: {\n      status: statusOptions,\n      extraContent: extraContentOptions,\n    },\n    defaultVariants: {\n      status: 'default',\n      extraContent: 'default',\n    },\n  },\n)\n\nexport const extraContentTypes = {\n  back: 'rounded-l-none border-l-0',\n  front: 'rounded-r-none border-r-0',\n}\n\nexport const extraContentBorderOptions = {\n  true: '',\n  false: '',\n}\n\nexport const inputFieldExtraContentVariants = cva(\n  'flex items-center justify-center rounded border border-border bg-input px-4',\n  {\n    variants: {\n      status: statusOptions,\n      extraContentType: extraContentTypes,\n      extraContentBorder: extraContentBorderOptions,\n    },\n    compoundVariants: [\n      {\n        extraContentBorder: true,\n        extraContentType: 'front',\n        class: 'border-r',\n      },\n      {\n        extraContentBorder: true,\n        extraContentType: 'back',\n        class: 'border-l',\n      },\n    ],\n    defaultVariants: {\n      extraContentType: 'back',\n    },\n  },\n)\n\nexport type InputFieldProps = VariantProps<typeof inputFieldVariants>\nexport const inputFieldStatusOptions = Object.keys(statusOptions)\n"
      }
    ],
    internalDependencies: [
      "FormError",
      "FormInputGroupComposable",
      "TransitionExpand"
    ],
    dependencies: [
      "@vueuse/core"
    ]
  },
  {
    component: "FormInputGroupComposable",
    name: "FormInputGroupComposable",
    files: [
      {
        name: "useFormInputGroup.ts",
        dir: "./src/modules/ui/composables/forms/group",
        placementDir: "forms/group",
        type: "composables",
        content: "import { useFormInputGroupContext } from '@/modules/ui/composables/forms/group/useFormInputGroupContext'\nimport type { Option } from '@/modules/ui/composables/forms/group/useFormInputGroupContext'\n\nexport interface UseFormInputGroupParams {\n  model: Ref<number | null>\n  isDisabled?: Ref<boolean>\n  uuid: string\n  element: Ref<HTMLElement | undefined>\n}\n\nexport const useFormInputGroup = ({ model, uuid, isDisabled, element }: UseFormInputGroupParams): void => {\n  const context = useFormInputGroupContext()\n  const propsRef = computed(() => ({\n    value: typeof model.value === 'number' ? model.value : 0,\n    disabled: isDisabled?.value,\n  }))\n  const option: Option = ref({ id: uuid, element: element.value, propsRef: propsRef.value }) as Option\n\n  const change = (value: number): void => {\n    if (isDisabled?.value || !context)\n      return\n\n    const newValue = context.change(option, value)\n    model.value = newValue\n  }\n\n  watch(\n    () => model.value, (value) => {\n      if (!value)\n        return\n      change(value)\n    },\n  )\n\n  onMounted(() => {\n    if (context)\n      context.registerOption(option)\n  })\n  onUnmounted(() => {\n    if (context)\n      context.unregisterOption(uuid)\n  })\n}\n"
      },
      {
        name: "useFormInputGroupContext.ts",
        dir: "./src/modules/ui/composables/forms/group",
        placementDir: "forms/group",
        type: "composables",
        content: "import { inject } from 'vue'\nimport type { ComputedRef, InjectionKey, Ref } from 'vue'\n\nexport type Option = Ref<{ id: string; element: HTMLElement | undefined; propsRef: { value: number; disabled: boolean } }>\n\nexport interface FormInputGroupStateDefinition {\n  // State\n  valueMeasurement?: ComputedRef<string>\n  percentProgress?: ComputedRef<boolean>\n  valueProgress?: ComputedRef<boolean>\n  maxLabel?: ComputedRef<boolean>\n\n  options: Ref<Option[]>\n  maxValue: ComputedRef<number | undefined>\n  valueUsed: ComputedRef<number>\n\n  disabled: Ref<boolean>\n  change(option: Option, newValue: number): number | null\n  registerOption(action: Option): void\n  unregisterOption(id: string): void\n}\n\nexport const FormInputGroupContext = Symbol('FormGroupContext') as InjectionKey<FormInputGroupStateDefinition>\n\nexport const useFormInputGroupContext = (): FormInputGroupStateDefinition | null => {\n  const context = inject(FormInputGroupContext, null)\n  return context\n}\n"
      }
    ]
  },
  {
    component: "Icons",
    name: "Icons",
    files: [
      {
        name: "AddIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <circle cx="14" cy="14" r="14" fill="currentColor" />\n    <path d="M13.9995 9.23999C13.7151 9.23999 13.485 9.47016 13.485 9.75458V13.4854H9.75443C9.47002 13.4854 9.23987 13.7156 9.23987 14C9.23987 14.2844 9.47002 14.5146 9.75443 14.5146H13.485V18.2454C13.485 18.5298 13.7151 18.76 13.9995 18.76C14.2839 18.76 14.5141 18.5298 14.5141 18.2454V14.5146H18.2446C18.5291 14.5146 18.7592 14.2844 18.7592 14C18.7592 13.7156 18.5291 13.4854 18.2446 13.4854H14.5141V9.75458C14.5141 9.47016 14.2839 9.23999 13.9995 9.23999Z" fill="white" stroke="white" />\n  </svg>\n</template>\n'
      },
      {
        name: "ArrowDownIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M13.4321 10.9496L8.61965 15.7545V0H6.38027V15.7545L1.56778 10.9496L0 12.5145L7.5 20L15 12.5145L13.4321 10.9496Z" fill="currentColor" />\n  </svg>\n</template>\n'
      },
      {
        name: "CheckmarkIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0702 1.55622C10.6466 2.10737 10.6466 3.00095 10.0702 3.55209L5.49262 7.92951C5.21585 8.19418 4.84047 8.34287 4.44905 8.34287C4.05763 8.34287 3.68225 8.19418 3.40548 7.92951L0.649058 5.29364C0.0727095 4.7425 0.0727098 3.84892 0.649059 3.29778C1.22541 2.74664 2.15985 2.74664 2.7362 3.29778L4.44905 4.93572L7.98311 1.55622C8.55945 1.00508 9.4939 1.00508 10.0702 1.55622Z" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" />\n  </svg>\n</template>\n'
      },
      {
        name: "ChevronDownIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35909 3.43113C9.66728 3.1259 10.1638 3.1259 10.472 3.43113C10.7844 3.74054 10.7844 4.24538 10.472 4.5548L6.94327 8.04972C6.55354 8.43572 5.92561 8.43572 5.53588 8.04972L2.00715 4.5548C1.69474 4.24538 1.69474 3.74054 2.00715 3.43113C2.31534 3.1259 2.81188 3.1259 3.12006 3.43113L6.23958 6.52075L9.35909 3.43113Z" fill="currentColor" />\n  </svg>\n</template>\n'
      },
      {
        name: "ChevronRightIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.516644 1.57523C0.230503 1.28631 0.230503 0.820812 0.516644 0.531884C0.806733 0.23897 1.28006 0.238971 1.57015 0.531884L4.80311 3.79633C5.18908 4.18605 5.18908 4.81395 4.80311 5.20367L1.57015 8.46811C1.28006 8.76103 0.806733 8.76103 0.516644 8.46812C0.230503 8.17919 0.230503 7.71369 0.516644 7.42477L3.4132 4.5L0.516644 1.57523Z" fill="currentColor" />\n  </svg>\n</template>\n'
      },
      {
        name: "CloseIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M8.77059 8.44068C8.99305 8.66219 8.99305 9.03858 8.77059 9.2826C8.65936 9.39335 8.50381 9.45998 8.34827 9.45998C8.19272 9.45998 8.03718 9.39335 7.92595 9.2826L4.98878 6.33627L2.02982 9.26C1.91859 9.37076 1.76304 9.43738 1.60749 9.43738C1.45195 9.43738 1.31812 9.39326 1.20689 9.26C0.984424 9.03849 0.984424 8.6621 1.20689 8.41808L4.14316 5.49435L1.20689 2.54803C0.984424 2.32652 0.984424 1.95013 1.20689 1.70611C1.42935 1.4846 1.80735 1.4846 2.05242 1.70611L4.98869 4.65243L7.94766 1.72871C8.17012 1.50719 8.54813 1.50719 8.79319 1.72871C9.01566 1.95022 9.01566 2.32661 8.79319 2.57063L5.83423 5.49435L8.77059 8.44068Z" fill="currentColor" stroke="currentColor" stroke-width="1.1" />\n  </svg>\n</template>\n'
      },
      {
        name: "EditIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.35986 7.99986C1.35986 4.3324 4.3324 1.35986 7.99986 1.35986C11.6673 1.35986 14.6399 4.3324 14.6399 7.99986C14.6399 11.6673 11.6673 14.6399 7.99986 14.6399C6.16668 14.6399 4.50579 13.8962 3.30465 12.6951C3.05471 12.4451 3.05471 12.0399 3.30465 11.79C3.55458 11.54 3.95981 11.54 4.20975 11.79C5.1806 12.7608 6.51971 13.3599 7.99986 13.3599C10.9604 13.3599 13.3599 10.9604 13.3599 7.99986C13.3599 5.03933 10.9604 2.63986 7.99986 2.63986C5.03933 2.63986 2.63986 5.03933 2.63986 7.99986C2.63986 8.35333 2.35333 8.63986 1.99986 8.63986C1.6464 8.63986 1.35986 8.35333 1.35986 7.99986Z" fill="currentColor" />\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88081 6.21431C7.13075 5.96437 7.53597 5.96437 7.78591 6.21431L9.78591 8.21431C10.0358 8.46424 10.0358 8.86947 9.78591 9.1194C9.53597 9.36934 9.13075 9.36934 8.88081 9.1194L6.88081 7.1194C6.63088 6.86947 6.63088 6.46424 6.88081 6.21431Z" fill="currentColor" />\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.48997 6.50997C9.18791 6.2079 8.69714 6.2079 8.39507 6.50997L4.56107 10.344C4.55707 10.348 4.5543 10.3538 4.55381 10.3599L4.45671 11.5439L5.63781 11.447C5.63791 11.447 5.63771 11.447 5.63781 11.447C5.64544 11.4463 5.65153 11.4433 5.65597 11.4389L9.48997 7.60487C9.79204 7.30281 9.79204 6.81203 9.48997 6.50997ZM7.48997 5.60487C8.29191 4.80293 9.59314 4.80293 10.3951 5.60487C11.197 6.40681 11.197 7.70803 10.3951 8.50997L6.56107 12.344C6.34157 12.5635 6.05279 12.6965 5.7459 12.7225L5.74417 12.7226L3.8095 12.8813C3.62217 12.8966 3.43755 12.8289 3.30464 12.696C3.17173 12.5631 3.10397 12.3784 3.11933 12.1911L3.2779 10.2576C3.27792 10.2574 3.27794 10.2572 3.27796 10.2569C3.30294 9.94734 3.43747 9.65738 3.65597 9.43887L7.48997 5.60487Z" fill="currentColor" />\n  </svg>\n</template>\n'
      },
      {
        name: "EyeClosedIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512C791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z" /><path fill="currentColor" d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z" /></svg>\n</template>\n'
      },
      {
        name: "EyeOpenIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112z" /></svg>\n</template>\n'
      },
      {
        name: "FilterIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 19.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0L9.29 16.7a.989.989 0 0 1-.29-.83v-5.12L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L15 10.75v9.13M7.04 5L11 10.06v5.52l2 2v-7.53L16.96 5H7.04Z" /></svg>\n</template>\n'
      },
      {
        name: "InfoIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M5.625 6.8749C5.625 7.70803 4.375 7.70803 4.375 6.8749C4.375 6.04178 5.625 6.04178 5.625 6.8749Z" fill="currentColor" />\n    <path d="M4.375 3.43744C4.375 3.09226 4.65482 2.81244 5 2.81244C5.34518 2.81244 5.625 3.09226 5.625 3.43744V4.68744C5.625 5.03262 5.34518 5.31244 5 5.31244C4.65482 5.31244 4.375 5.03262 4.375 4.68744V3.43744Z" fill="currentColor" />\n    <path d="M7.44691 0.365594C7.21253 0.131219 6.89392 0 6.5625 0H3.4375C3.10608 0 2.78747 0.131225 2.55309 0.365594L0.365594 2.55309C0.131219 2.78747 0 3.10608 0 3.4375V6.5625C0 6.89392 0.131225 7.21253 0.365594 7.44691L2.55309 9.63441C2.78747 9.86878 3.10608 10 3.4375 10H6.5625C6.89392 10 7.21253 9.86878 7.44691 9.63441L9.63441 7.44691C9.86878 7.21253 10 6.89392 10 6.5625V3.4375C10 3.10608 9.86877 2.78747 9.63441 2.55309L7.44691 0.365594ZM8.75 5.73404C8.75 6.26447 8.53928 6.77318 8.16421 7.14826L7.14829 8.16418C6.77321 8.53926 6.2645 8.74997 5.73407 8.74997H4.26593C3.73549 8.74997 3.22679 8.53926 2.85171 8.16418L1.83579 7.14826C1.46071 6.77318 1.25 6.26447 1.25 5.73404V4.2659C1.25 3.73546 1.46071 3.22676 1.83579 2.85168L2.85171 1.83576C3.22679 1.46068 3.73549 1.24997 4.26593 1.24997H5.73407C6.2645 1.24997 6.77321 1.46068 7.14829 1.83576L8.16421 2.85168C8.53928 3.22675 8.75 3.73546 8.75 4.2659V5.73404Z" fill="currentColor" />\n  </svg>\n</template>\n'
      },
      {
        name: "NoFilterIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2.39 1.73L1.11 3L9 10.89v4.98c-.04.29.06.6.29.83l4.01 4.01c.39.39 1.02.39 1.41 0c.23-.21.33-.53.29-.83v-2.99l5.84 5.84l1.27-1.27L15 14.35v-.01l-2-1.99l-2-2.01L4.15 3.5L2.39 1.73M6.21 3L8.2 5h8.76l-3.85 4.91L15 11.8v-1.05l4.79-6.13a1 1 0 0 0-.17-1.4c-.19-.14-.4-.22-.62-.22H6.21M11 12.89l2 2v2.69l-2-2v-2.69Z" /></svg>\n</template>\n'
      },
      {
        name: "SearchIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0719 9.89719L14.7504 13.5806H14.7506C15.0797 13.9093 15.0797 14.4446 14.7706 14.7533C14.6069 14.918 14.3805 15 14.1749 15C13.9494 15 13.7438 14.918 13.5793 14.7533L9.88063 11.0898C8.79115 11.9337 7.47526 12.3452 6.16023 12.3452C4.5779 12.3452 3.01559 11.748 1.80332 10.5344C-0.601107 8.12729 -0.601107 4.21794 1.80332 1.81081C3.0155 0.596361 4.5779 0 6.16023 0C7.74256 0 9.30488 0.597184 10.5171 1.81081C12.737 4.01218 12.9216 7.49006 11.0719 9.89719ZM2.99457 9.36256C3.85757 10.2057 4.96794 10.6791 6.1802 10.6791C7.37241 10.6791 8.52285 10.2266 9.36583 9.36256C10.208 8.49859 10.6809 7.38698 10.6809 6.17335C10.6809 4.95973 10.2289 3.82808 9.36583 2.98415C8.50283 2.14105 7.39246 1.66765 6.1802 1.66765C4.96794 1.66765 3.83755 2.14022 2.99457 2.98415C1.24762 4.75406 1.24762 7.61364 2.99457 9.36256Z" fill="currentColor" />\n\n  </svg>\n</template>\n'
      },
      {
        name: "SettingsIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.77792 15H8.19791L8.26471 14.9901C8.58682 14.9174 8.88595 14.7686 9.13861 14.5559C9.33166 14.3886 9.48204 14.1775 9.57829 13.9401C9.67618 13.6755 9.84517 13.443 10.0667 13.268C10.1684 13.198 10.2909 13.1658 10.4139 13.1756C10.6261 13.174 10.8361 13.2172 11.0297 13.303C11.5279 13.5169 12.0966 13.4879 12.5697 13.2248C13.0394 12.9629 13.3528 12.4898 13.4097 11.955C13.4523 11.6438 13.4086 11.3272 13.2823 11.0395C13.1789 10.8016 13.1384 10.5413 13.1647 10.2832C13.1838 10.152 13.2516 10.0322 13.3555 9.94908C13.495 9.80416 13.6634 9.69096 13.8494 9.61549C14.3957 9.41151 14.8026 8.94722 14.9333 8.37956V8.37901C14.9351 8.37226 14.9378 8.36588 14.9404 8.35983L14.9404 8.35982C14.9441 8.35117 14.9475 8.34321 14.9475 8.33581L14.9655 8.28003L14.9748 8.23519C15.0071 8.07878 15.0071 7.91746 14.9748 7.76051L14.9666 7.72004L14.9486 7.6834C14.9289 7.63309 14.9092 7.58114 14.8912 7.53083C14.8408 7.38426 14.779 7.24098 14.7063 7.10426C14.5302 6.79254 14.2519 6.55138 13.9183 6.42231C13.6448 6.32388 13.4069 6.1467 13.2336 5.91427C13.174 5.81473 13.1466 5.69935 13.1548 5.58341C13.151 5.37067 13.1942 5.15903 13.2812 4.96489C13.4764 4.51865 13.4764 4.01115 13.2812 3.5649C13.0969 3.13288 12.7359 2.80147 12.2897 2.65491C11.8801 2.5067 11.4289 2.52202 11.0297 2.69811C10.7918 2.80475 10.5293 2.84686 10.2695 2.82006C10.1132 2.79163 9.97315 2.70303 9.88073 2.57343C9.75166 2.43343 9.65049 2.26991 9.58214 2.09218C9.37761 1.58741 8.9505 1.20625 8.42605 1.06023C7.89611 0.913665 7.32791 1.03835 6.90846 1.39327C6.67768 1.57757 6.4994 1.81929 6.39057 2.09327C6.29269 2.35413 6.12207 2.58108 5.89894 2.74733C5.80378 2.80968 5.69058 2.83975 5.57683 2.83428C5.36465 2.8403 5.1541 2.79819 4.96106 2.71069C4.51481 2.51546 4.00731 2.51546 3.56107 2.71069C3.12686 2.89662 2.79491 3.26139 2.64943 3.71037C2.50561 4.1156 2.52146 4.56075 2.69318 4.95505C2.80748 5.20716 2.84795 5.48606 2.80912 5.76004C2.77084 5.90277 2.68443 6.028 2.56412 6.11441C2.42467 6.24293 2.2617 6.34355 2.08397 6.41081C1.57867 6.61425 1.19858 7.04409 1.05804 7.57017C0.914749 8.09845 1.04054 8.66281 1.39381 9.08063C1.57592 9.30812 1.81326 9.48421 2.08397 9.59194C2.34483 9.68983 2.57178 9.861 2.73803 10.0847C2.80146 10.1864 2.8299 10.3067 2.81896 10.4259C2.81732 10.6474 2.76975 10.8656 2.67897 11.0674C2.40335 11.7155 2.55264 12.4664 3.05521 12.9596C3.55771 13.4529 4.31131 13.588 4.95388 13.3003C5.19122 13.1964 5.45099 13.156 5.70856 13.1827C5.81356 13.1827 5.95356 13.2303 6.12856 13.4627C6.23903 13.6093 6.33309 13.7684 6.40856 13.9358C6.62183 14.4269 7.04676 14.7944 7.56355 14.9355L7.77792 15ZM8.07873 14.0845H7.91796L7.82665 14.0577C7.56415 13.9943 7.34759 13.8105 7.2415 13.5623C7.13814 13.3309 7.00907 13.1122 6.8565 12.9098C6.61369 12.5522 6.2276 12.317 5.7983 12.2656C5.38706 12.2241 4.97197 12.2886 4.59299 12.4532C4.2955 12.5888 3.9455 12.5287 3.71034 12.3023C3.47519 12.0753 3.40191 11.7281 3.52605 11.4256C3.6644 11.1095 3.73713 10.7688 3.73878 10.4232C3.7508 10.1088 3.66003 9.79814 3.47955 9.54001C3.21158 9.1829 2.84792 8.90782 2.4312 8.74759C2.30597 8.69836 2.1955 8.61634 2.11183 8.51079C1.94012 8.32157 1.87668 8.05798 1.94231 7.8108C2.00738 7.56853 2.17855 7.36838 2.40878 7.26775C2.69424 7.15946 2.95674 6.99705 3.18151 6.79033C3.46369 6.56119 3.654 6.23744 3.71635 5.87924C3.7776 5.43792 3.71362 4.98784 3.53151 4.58097C3.45057 4.39339 3.44619 4.18175 3.51893 3.99034C3.58127 3.78855 3.72947 3.62395 3.92361 3.54082C4.13142 3.44895 4.36822 3.44566 4.57876 3.53098C4.89595 3.67262 5.23992 3.74317 5.58665 3.73825C5.89235 3.747 6.19258 3.65786 6.44359 3.48341C6.80563 3.21654 7.08399 2.85177 7.24586 2.43232C7.29618 2.30436 7.37985 2.1917 7.48813 2.10584C7.6779 1.93576 7.94149 1.87342 8.18812 1.94069C8.4293 2.0085 8.62836 2.18022 8.72953 2.40991C8.83835 2.69536 8.99967 2.95732 9.20585 3.18263C9.44975 3.4845 9.80085 3.68028 10.1858 3.7284C10.6015 3.76942 11.0204 3.70215 11.4021 3.53263C11.5919 3.45005 11.8062 3.44568 11.9987 3.52005C12.1978 3.58678 12.358 3.73716 12.4368 3.93184C12.5286 4.13857 12.5336 4.37372 12.4493 4.58427C12.3066 4.90036 12.2355 5.24379 12.241 5.59051C12.2322 5.89512 12.3192 6.19426 12.4898 6.44582C12.7638 6.82318 13.1428 7.11082 13.5792 7.27325C13.7186 7.32465 13.8351 7.42418 13.9084 7.55325C13.9571 7.6484 13.9986 7.74739 14.0331 7.84911V7.84856C14.0484 7.89231 14.0637 7.93442 14.0806 7.97762V7.99567C14.0817 8.00989 14.0817 8.02411 14.0806 8.03778L14.0769 8.04884C14.068 8.0756 14.058 8.10551 14.0484 8.14004C13.992 8.42551 13.7908 8.66067 13.5179 8.7602C13.2111 8.88215 12.9338 9.06699 12.7042 9.30324C12.4499 9.5384 12.2896 9.85778 12.2519 10.2023C12.2125 10.6135 12.2787 11.0275 12.4439 11.406C12.504 11.5416 12.5242 11.6909 12.5029 11.8374C12.4827 12.0841 12.3416 12.3045 12.1261 12.4253C11.9046 12.5484 11.64 12.5648 11.4048 12.4702C11.0904 12.3285 10.748 12.2574 10.4029 12.2618C10.077 12.2487 9.75708 12.3477 9.49568 12.5418C9.14568 12.8174 8.87716 13.1833 8.71857 13.6C8.67538 13.7039 8.60811 13.7969 8.52225 13.8702C8.39264 13.9741 8.24116 14.0473 8.07873 14.0845ZM7.9906 10.8646C7.23209 10.8629 6.50479 10.5605 5.9693 10.0235C5.43336 9.48645 5.13258 8.75855 5.13312 8.00006C5.13422 7.2432 5.43499 6.51691 5.96984 5.98155C6.50523 5.44562 7.23038 5.14374 7.98779 5.14101C8.74521 5.14265 9.47206 5.44398 10.008 5.97991C10.5439 6.51585 10.8452 7.24209 10.8463 8.0001C10.8458 8.75587 10.5456 9.48101 10.0124 10.0169C9.47861 10.5523 8.75455 10.8553 7.99875 10.8591H7.98453L7.9906 10.8646ZM6.19638 7.26611C6.49541 6.53876 7.20366 6.06354 7.9906 6.06244L7.99173 6.05694C9.06257 6.06072 9.92936 6.92922 9.931 7.99999C9.92988 9.06859 9.06745 9.93648 7.99887 9.94304H7.98793C7.47714 9.94522 6.98715 9.74397 6.62567 9.38304C6.06677 8.82963 5.89779 7.99345 6.19638 7.26611Z" fill="currentColor" />\n    <path d="M8.19791 15V15.25H8.21627L8.23443 15.2473L8.19791 15ZM7.77792 15L7.70585 15.2394L7.7411 15.25H7.77792V15ZM8.26471 14.9901L8.30122 15.2375L8.31057 15.2361L8.31978 15.234L8.26471 14.9901ZM9.13861 14.5559L9.29965 14.7472L9.30236 14.7448L9.13861 14.5559ZM9.57829 13.9401L9.81008 14.0341L9.81277 14.0269L9.57829 13.9401ZM10.0667 13.268L9.92493 13.0621L9.91813 13.0668L9.91166 13.0719L10.0667 13.268ZM10.4139 13.1756L10.394 13.4248L10.4049 13.4257L10.4159 13.4256L10.4139 13.1756ZM11.0297 13.303L10.9283 13.5316L10.9311 13.5328L11.0297 13.303ZM12.5697 13.2248L12.6912 13.4433L12.6914 13.4432L12.5697 13.2248ZM13.4097 11.955L13.1619 11.921L13.1611 11.9286L13.4097 11.955ZM13.2823 11.0395L13.053 11.1392L13.0534 11.1401L13.2823 11.0395ZM13.1647 10.2832L12.9171 10.2471L12.916 10.2579L13.1647 10.2832ZM13.3555 9.94908L13.5117 10.1443L13.5244 10.1341L13.5357 10.1224L13.3555 9.94908ZM13.8494 9.61549L13.7619 9.38119L13.7553 9.38384L13.8494 9.61549ZM14.9333 8.37956L15.1769 8.43566L15.1833 8.40797V8.37956H14.9333ZM14.9333 8.37901L14.6917 8.31461L14.6833 8.34626V8.37901H14.9333ZM14.9404 8.35983L14.7119 8.25828L14.7105 8.2616L14.9404 8.35983ZM14.9404 8.35982L15.1689 8.46136L15.1703 8.45808L14.9404 8.35982ZM14.9475 8.33581L14.7096 8.25886L14.6975 8.29638V8.33581H14.9475ZM14.9655 8.28003L15.2034 8.35699L15.2076 8.34407L15.2103 8.33078L14.9655 8.28003ZM14.9748 8.23519L15.2196 8.28594L15.2197 8.2857L14.9748 8.23519ZM14.9748 7.76051L14.7298 7.81017L14.7299 7.81085L14.9748 7.76051ZM14.9666 7.72004L15.2116 7.67037L15.2052 7.63863L15.1909 7.60957L14.9666 7.72004ZM14.9486 7.6834L14.7158 7.77451L14.7196 7.78437L14.7243 7.79386L14.9486 7.6834ZM14.8912 7.53083L14.6547 7.612L14.6558 7.61524L14.8912 7.53083ZM14.7063 7.10426L14.9271 6.98681L14.924 6.9813L14.7063 7.10426ZM13.9183 6.42231L14.0085 6.18909L14.0029 6.18709L13.9183 6.42231ZM13.2336 5.91427L13.0191 6.04271L13.0256 6.05358L13.0332 6.06374L13.2336 5.91427ZM13.1548 5.58341L13.4042 5.60106L13.405 5.59L13.4048 5.57891L13.1548 5.58341ZM13.2812 4.96489L13.5093 5.06709L13.5102 5.0651L13.2812 4.96489ZM13.2812 3.5649L13.0512 3.663L13.0521 3.6651L13.2812 3.5649ZM12.2897 2.65491L12.2046 2.8901L12.2117 2.89242L12.2897 2.65491ZM11.0297 2.69811L10.9288 2.46937L10.9274 2.46998L11.0297 2.69811ZM10.2695 2.82006L10.2248 3.06603L10.2343 3.06775L10.2439 3.06874L10.2695 2.82006ZM9.88073 2.57343L10.0843 2.42828L10.0752 2.41551L10.0645 2.40397L9.88073 2.57343ZM9.58214 2.09218L9.81551 2.00242L9.81384 1.9983L9.58214 2.09218ZM8.42605 1.06023L8.49311 0.81939L8.49269 0.819276L8.42605 1.06023ZM6.90846 1.39327L7.06453 1.5887L7.06995 1.58412L6.90846 1.39327ZM6.39057 2.09327L6.15819 2.00096L6.15651 2.00544L6.39057 2.09327ZM5.89894 2.74733L6.03594 2.95645L6.04226 2.95231L6.04831 2.94781L5.89894 2.74733ZM5.57683 2.83428L5.58884 2.58457L5.57929 2.58411L5.56974 2.58438L5.57683 2.83428ZM4.96106 2.71069L5.06427 2.48297L5.06126 2.48165L4.96106 2.71069ZM3.56107 2.71069L3.65948 2.94051L3.66127 2.93973L3.56107 2.71069ZM2.64943 3.71037L2.88512 3.79402L2.88726 3.78743L2.64943 3.71037ZM2.69318 4.95505L2.46395 5.05488L2.46549 5.05827L2.69318 4.95505ZM2.80912 5.76004L3.05059 5.8248L3.05452 5.81014L3.05665 5.79512L2.80912 5.76004ZM2.56412 6.11441L2.41829 5.91135L2.40591 5.92024L2.3947 5.93057L2.56412 6.11441ZM2.08397 6.41081L1.99545 6.17695L1.9906 6.1789L2.08397 6.41081ZM1.05804 7.57017L1.29932 7.63562L1.29957 7.6347L1.05804 7.57017ZM1.39381 9.08063L1.58905 8.92434L1.58472 8.91921L1.39381 9.08063ZM2.08397 9.59194L1.99151 9.82427L1.99613 9.82601L2.08397 9.59194ZM2.73803 10.0847L2.95016 9.95238L2.94476 9.94373L2.93868 9.93554L2.73803 10.0847ZM2.81896 10.4259L2.57001 10.4031L2.56905 10.4136L2.56897 10.4241L2.81896 10.4259ZM2.67897 11.0674L2.45093 10.9648L2.44891 10.9696L2.67897 11.0674ZM3.05521 12.9596L3.23034 12.7812L3.23033 12.7812L3.05521 12.9596ZM4.95388 13.3003L4.85362 13.0713L4.85173 13.0721L4.95388 13.3003ZM5.70856 13.1827L5.68269 13.4314L5.69559 13.4327H5.70856V13.1827ZM6.12856 13.4627L5.92884 13.6131L5.92892 13.6132L6.12856 13.4627ZM6.40856 13.9358L6.63789 13.8362L6.63645 13.833L6.40856 13.9358ZM7.56355 14.9355L7.63564 14.696L7.62939 14.6943L7.56355 14.9355ZM7.91796 14.0845L7.84756 14.3244L7.88203 14.3345H7.91796V14.0845ZM8.07873 14.0845V14.3345H8.10698L8.13453 14.3282L8.07873 14.0845ZM7.82665 14.0577L7.89713 13.8176L7.88539 13.8147L7.82665 14.0577ZM7.2415 13.5623L7.47142 13.464L7.46975 13.4603L7.2415 13.5623ZM6.8565 12.9098L6.64941 13.0504L6.65689 13.0604L6.8565 12.9098ZM5.7983 12.2656L5.82803 12.0174L5.82344 12.0169L5.7983 12.2656ZM4.59299 12.4532L4.49338 12.2239L4.48929 12.2257L4.59299 12.4532ZM3.71034 12.3023L3.53673 12.4821L3.53695 12.4824L3.71034 12.3023ZM3.52605 11.4256L3.29696 11.3254L3.29477 11.3307L3.52605 11.4256ZM3.73878 10.4232L3.48882 10.4136L3.48878 10.422L3.73878 10.4232ZM3.47955 9.54001L3.68456 9.39668L3.67952 9.38996L3.47955 9.54001ZM2.4312 8.74759L2.33974 8.98026L2.34148 8.98093L2.4312 8.74759ZM2.11183 8.51079L2.30774 8.35549L2.30256 8.34896L2.29697 8.34279L2.11183 8.51079ZM1.94231 7.8108L1.70086 7.74595L1.70068 7.74665L1.94231 7.8108ZM2.40878 7.26775L2.32 7.03372L2.30866 7.03868L2.40878 7.26775ZM3.18151 6.79033L3.02392 6.59625L3.01794 6.60111L3.01227 6.60632L3.18151 6.79033ZM3.71635 5.87924L3.96279 5.92213L3.96397 5.91361L3.71635 5.87924ZM3.53151 4.58097L3.30194 4.68002L3.30332 4.68311L3.53151 4.58097ZM3.51893 3.99034L3.75262 4.07915L3.75545 4.07172L3.75779 4.06414L3.51893 3.99034ZM3.92361 3.54082L4.02202 3.77066L4.0247 3.76947L3.92361 3.54082ZM4.57876 3.53098L4.68077 3.30257L4.67265 3.29928L4.57876 3.53098ZM5.58665 3.73825L5.59381 3.48812L5.5831 3.48827L5.58665 3.73825ZM6.44359 3.48341L6.58632 3.68878L6.59193 3.68464L6.44359 3.48341ZM7.24586 2.43232L7.0132 2.34083L7.01262 2.34231L7.24586 2.43232ZM7.48813 2.10584L7.64346 2.30173L7.64937 2.29705L7.65498 2.29201L7.48813 2.10584ZM8.18812 1.94069L8.2558 1.70001L8.2539 1.69949L8.18812 1.94069ZM8.72953 2.40991L8.96343 2.32074L8.95832 2.30913L8.72953 2.40991ZM9.20585 3.18263L9.40031 3.02551L9.39547 3.01953L9.39028 3.01386L9.20585 3.18263ZM10.1858 3.7284L10.1548 3.97656L10.1613 3.9772L10.1858 3.7284ZM11.4021 3.53263L11.3023 3.30339L11.3006 3.30415L11.4021 3.53263ZM11.9987 3.52005L11.9085 3.75349L11.9193 3.75709L11.9987 3.52005ZM12.4368 3.93184L12.2049 4.02565L12.2083 4.03338L12.4368 3.93184ZM12.4493 4.58427L12.6774 4.68726L12.6815 4.67712L12.4493 4.58427ZM12.241 5.59051L12.4911 5.5977L12.4909 5.58657L12.241 5.59051ZM12.4898 6.44582L12.2828 6.58623L12.2875 6.5927L12.4898 6.44582ZM13.5792 7.27325L13.492 7.50755L13.4927 7.50782L13.5792 7.27325ZM13.9084 7.55325L14.1312 7.43929L14.1258 7.42981L13.9084 7.55325ZM14.0331 7.84911L13.7963 7.92931L14.2831 7.84911H14.0331ZM14.0331 7.84856L14.269 7.76597L13.7831 7.84856H14.0331ZM14.0806 7.97762H14.3306V7.93033L14.3134 7.8863L14.0806 7.97762ZM14.0806 7.99567H13.8306V8.00527L13.8314 8.01484L14.0806 7.99567ZM14.0806 8.03778L14.3178 8.11703L14.3274 8.08811L14.3299 8.05772L14.0806 8.03778ZM14.0769 8.04884L14.314 8.12822L14.3141 8.1281L14.0769 8.04884ZM14.0484 8.14004L13.8075 8.07313L13.805 8.0823L13.8031 8.09164L14.0484 8.14004ZM13.5179 8.7602L13.4322 8.52524L13.4256 8.52788L13.5179 8.7602ZM12.7042 9.30324L12.8741 9.48705L12.8834 9.47751L12.7042 9.30324ZM12.2519 10.2023L12.0034 10.1751L12.003 10.1785L12.2519 10.2023ZM12.4439 11.406L12.2147 11.506L12.2153 11.5073L12.4439 11.406ZM12.5029 11.8374L12.2555 11.8014L12.2544 11.8092L12.2538 11.817L12.5029 11.8374ZM12.1261 12.4253L12.2475 12.6439L12.2484 12.6434L12.1261 12.4253ZM11.4048 12.4702L11.302 12.6983L11.3115 12.7021L11.4048 12.4702ZM10.4029 12.2618L10.3929 12.512L10.4061 12.5118L10.4029 12.2618ZM9.49568 12.5418L9.34656 12.341L9.341 12.3454L9.49568 12.5418ZM8.71857 13.6L8.94953 13.696L8.95222 13.6889L8.71857 13.6ZM8.52225 13.8702L8.67869 14.0653L8.68455 14.0603L8.52225 13.8702ZM5.9693 10.0235L6.14632 9.84694L6.14625 9.84687L5.9693 10.0235ZM7.9906 10.8646L7.99006 11.1146L8.64524 11.116L8.15755 10.6785L7.9906 10.8646ZM5.13312 8.00006L4.88312 7.9997L4.88312 7.99988L5.13312 8.00006ZM5.96984 5.98155L6.1467 6.15825L6.14671 6.15824L5.96984 5.98155ZM7.98779 5.14101L7.98833 4.89101L7.98689 4.89101L7.98779 5.14101ZM10.008 5.97991L9.8312 6.15669L9.8312 6.15669L10.008 5.97991ZM10.8463 8.0001L11.0963 8.00028L11.0963 7.99974L10.8463 8.0001ZM10.0124 10.0169L10.1894 10.1934L10.1896 10.1933L10.0124 10.0169ZM7.99875 10.8591V11.1091L8.00002 11.1091L7.99875 10.8591ZM7.98453 10.8591V10.6091H7.33147L7.81759 11.0452L7.98453 10.8591ZM7.9906 6.06244L7.99095 6.31244L8.19477 6.31216L8.23555 6.11246L7.9906 6.06244ZM6.19638 7.26611L5.96516 7.17105L5.96511 7.17117L6.19638 7.26611ZM7.99173 6.05694L7.99261 5.80694L7.78777 5.80622L7.74678 6.00693L7.99173 6.05694ZM9.931 7.99999L10.181 8.00025L10.181 7.99961L9.931 7.99999ZM7.99887 9.94304V10.193L8.0004 10.193L7.99887 9.94304ZM7.98793 9.94304V9.69304L7.98686 9.69304L7.98793 9.94304ZM6.62567 9.38304L6.80231 9.20613L6.80157 9.2054L6.62567 9.38304ZM8.19791 14.75H7.77792V15.25H8.19791V14.75ZM8.22819 14.7428L8.1614 14.7527L8.23443 15.2473L8.30122 15.2375L8.22819 14.7428ZM8.97759 14.3647C8.75546 14.5517 8.49264 14.6824 8.20964 14.7463L8.31978 15.234C8.68099 15.1524 9.01644 14.9856 9.29963 14.7472L8.97759 14.3647ZM9.34662 13.8462C9.26505 14.0473 9.1378 14.2258 8.97486 14.367L9.30236 14.7448C9.52552 14.5514 9.69903 14.3076 9.80997 14.0341L9.34662 13.8462ZM9.91166 13.0719C9.65421 13.2753 9.45767 13.5456 9.34381 13.8534L9.81277 14.0269C9.89469 13.8054 10.0361 13.6108 10.2216 13.4642L9.91166 13.0719ZM10.4339 12.9264C10.2543 12.912 10.0746 12.9591 9.92493 13.0621L10.2084 13.474C10.2622 13.4369 10.3275 13.4195 10.394 13.4248L10.4339 12.9264ZM11.131 13.0745C10.9046 12.9741 10.6594 12.9237 10.412 12.9256L10.4159 13.4256C10.5928 13.4242 10.7676 13.4603 10.9283 13.5316L11.131 13.0745ZM12.4482 13.0063C12.0429 13.2317 11.5554 13.2566 11.1283 13.0733L10.9311 13.5328C11.5004 13.7771 12.1504 13.744 12.6912 13.4433L12.4482 13.0063ZM13.1611 11.9286C13.1128 12.3824 12.8469 12.784 12.4479 13.0065L12.6914 13.4432C13.232 13.1418 13.5928 12.5973 13.6583 11.9814L13.1611 11.9286ZM13.0534 11.1401C13.161 11.3852 13.1984 11.6553 13.162 11.9211L13.6574 11.9889C13.7062 11.6323 13.6561 11.2691 13.5112 10.939L13.0534 11.1401ZM12.916 10.2579C12.8854 10.5587 12.9325 10.862 13.053 11.1392L13.5115 10.9399C13.4253 10.7413 13.3915 10.524 13.4134 10.3085L12.916 10.2579ZM13.1994 9.75386C13.0453 9.8771 12.9454 10.0541 12.9173 10.2471L13.4121 10.3193C13.4222 10.2499 13.458 10.1873 13.5117 10.1443L13.1994 9.75386ZM13.7553 9.38384C13.5374 9.47229 13.3395 9.60518 13.1754 9.77573L13.5357 10.1224C13.6505 10.0032 13.7894 9.90962 13.9434 9.84713L13.7553 9.38384ZM14.6896 8.32347C14.5778 8.8093 14.2296 9.20668 13.7619 9.38128L13.9368 9.8497C14.5618 9.61634 15.0273 9.08513 15.1769 8.43566L14.6896 8.32347ZM14.6833 8.37901V8.37956H15.1833V8.37901H14.6833ZM14.7105 8.2616C14.709 8.26515 14.6989 8.28773 14.6917 8.31461L15.1748 8.44342C15.1727 8.45124 15.1707 8.45679 15.1698 8.45896C15.1692 8.4607 15.1687 8.46172 15.1703 8.45806L14.7105 8.2616ZM14.7119 8.25828L14.7119 8.25829L15.1688 8.46136L15.1688 8.46135L14.7119 8.25828ZM14.6975 8.33581C14.6975 8.3025 14.7049 8.27808 14.7078 8.26931C14.7105 8.2611 14.7133 8.25494 14.7105 8.26155L15.1703 8.45808C15.1711 8.45605 15.1775 8.44158 15.1828 8.42539C15.1883 8.40863 15.1975 8.37652 15.1975 8.33581H14.6975ZM14.7277 8.20307L14.7096 8.25886L15.1853 8.41277L15.2034 8.35699L14.7277 8.20307ZM14.73 8.18443L14.7207 8.22928L15.2103 8.33078L15.2196 8.28594L14.73 8.18443ZM14.7299 7.81085C14.7554 7.93465 14.7554 8.06165 14.73 8.18468L15.2197 8.2857C15.2588 8.09591 15.2588 7.90027 15.2197 7.71017L14.7299 7.81085ZM14.7216 7.76971L14.7298 7.81017L15.2198 7.71084L15.2116 7.67037L14.7216 7.76971ZM14.7243 7.79386L14.7423 7.8305L15.1909 7.60957L15.1728 7.57293L14.7243 7.79386ZM14.6558 7.61524C14.6749 7.66832 14.6954 7.72258 14.7158 7.77451L15.1814 7.59228C15.1623 7.54361 15.1435 7.49395 15.1265 7.44642L14.6558 7.61524ZM14.4856 7.22168C14.5519 7.34636 14.6085 7.47749 14.6547 7.61199L15.1276 7.44966C15.0732 7.29103 15.0062 7.1356 14.927 6.98685L14.4856 7.22168ZM13.8281 6.65547C14.1075 6.76358 14.3409 6.96568 14.4886 7.22722L14.924 6.9813C14.7195 6.6194 14.3962 6.33917 14.0085 6.18915L13.8281 6.65547ZM13.0332 6.06374C13.2357 6.33518 13.5137 6.54236 13.8336 6.65754L14.0029 6.18709C13.776 6.1054 13.5782 5.95821 13.434 5.7648L13.0332 6.06374ZM12.9055 5.56576C12.8937 5.73245 12.933 5.89889 13.0191 6.04271L13.4481 5.78583C13.415 5.73057 13.3996 5.66624 13.4042 5.60106L12.9055 5.56576ZM13.053 4.8627C12.951 5.0904 12.9004 5.33847 12.9049 5.58791L13.4048 5.57891C13.4016 5.40286 13.4374 5.22766 13.5093 5.06708L13.053 4.8627ZM13.0521 3.6651C13.2194 4.04747 13.2194 4.48232 13.0521 4.86469L13.5102 5.0651C13.7334 4.55497 13.7334 3.97483 13.5102 3.4647L13.0521 3.6651ZM12.2117 2.89242C12.5895 3.01652 12.8951 3.29709 13.0512 3.663L13.5111 3.46681C13.2986 2.96867 12.8824 2.58642 12.3677 2.41739L12.2117 2.89242ZM11.1306 2.92685C11.471 2.77671 11.8555 2.76368 12.2046 2.88999L12.3748 2.41982C11.9046 2.24972 11.3869 2.26733 10.9288 2.46937L11.1306 2.92685ZM10.2439 3.06874C10.5473 3.10004 10.8539 3.05088 11.132 2.92624L10.9274 2.46998C10.7297 2.55862 10.5113 2.59368 10.2952 2.57138L10.2439 3.06874ZM9.67718 2.71857C9.80752 2.90136 10.0046 3.02599 10.2248 3.06603L10.3143 2.57409C10.2217 2.55727 10.1388 2.5047 10.0843 2.42828L9.67718 2.71857ZM9.3488 2.18192C9.42837 2.3888 9.54623 2.57943 9.69692 2.74288L10.0645 2.40397C9.95709 2.28742 9.87262 2.15102 9.81547 2.00243L9.3488 2.18192ZM8.35899 1.30107C8.80874 1.42629 9.17503 1.75316 9.35043 2.18606L9.81384 1.9983C9.58019 1.42166 9.09226 0.98621 8.49311 0.819391L8.35899 1.30107ZM7.06995 1.58412C7.42626 1.28262 7.90905 1.17663 8.35941 1.30118L8.49269 0.819276C7.88317 0.650701 7.22957 0.794074 6.74697 1.20243L7.06995 1.58412ZM6.62292 2.18556C6.71581 1.95169 6.86791 1.74559 7.06447 1.58863L6.75245 1.19792C6.48746 1.40955 6.28299 1.68689 6.15823 2.00098L6.62292 2.18556ZM6.04831 2.94781C6.30993 2.75288 6.50992 2.48681 6.62464 2.1811L6.15651 2.00544C6.07545 2.22145 5.93421 2.40929 5.74957 2.54686L6.04831 2.94781ZM5.56482 3.084C5.73011 3.09194 5.89567 3.04835 6.03594 2.95645L5.76194 2.53822C5.71189 2.571 5.65105 2.58756 5.58884 2.58457L5.56482 3.084ZM4.85785 2.93839C5.08571 3.04168 5.334 3.09127 5.58391 3.08418L5.56974 2.58438C5.39529 2.58933 5.22249 2.55471 5.06426 2.48299L4.85785 2.93839ZM3.66127 2.93973C4.04364 2.77245 4.47849 2.77245 4.86085 2.93973L5.06126 2.48165C4.55113 2.25848 3.97099 2.25848 3.46086 2.48165L3.66127 2.93973ZM2.88726 3.78743C3.01057 3.40687 3.29184 3.09793 3.65948 2.94051L3.46266 2.48088C2.96188 2.69532 2.57925 3.11592 2.41161 3.63331L2.88726 3.78743ZM2.92239 4.85522C2.77592 4.51892 2.76247 4.13933 2.88503 3.79399L2.41383 3.62675C2.24876 4.09186 2.267 4.60258 2.46398 5.05487L2.92239 4.85522ZM3.05665 5.79512C3.10218 5.47379 3.05467 5.14693 2.92088 4.85182L2.46549 5.05827C2.56029 5.26738 2.59371 5.49834 2.56159 5.72496L3.05665 5.79512ZM2.70996 6.31747C2.87725 6.19732 2.99739 6.02318 3.05059 5.8248L2.56765 5.69529C2.5443 5.78236 2.49162 5.85868 2.41829 5.91135L2.70996 6.31747ZM2.17246 6.64463C2.38007 6.56605 2.57053 6.44848 2.73354 6.29824L2.3947 5.93057C2.27881 6.03737 2.14332 6.12104 1.99547 6.177L2.17246 6.64463ZM1.29957 7.6347C1.41983 7.18452 1.74509 6.81675 2.17733 6.64272L1.9906 6.1789C1.41225 6.41175 0.977334 6.90365 0.816509 7.50565L1.29957 7.6347ZM1.58472 8.91921C1.2844 8.56403 1.17758 8.08445 1.29932 7.63562L0.816757 7.50473C0.651919 8.11244 0.796672 8.76159 1.20291 9.24204L1.58472 8.91921ZM2.17641 9.35966C1.94614 9.26802 1.74414 9.11822 1.58898 8.92439L1.19864 9.23686C1.40771 9.49803 1.68039 9.7004 1.99152 9.82423L2.17641 9.35966ZM2.93868 9.93554C2.74386 9.67343 2.47779 9.47271 2.1718 9.35788L1.99613 9.82601C2.21186 9.90696 2.3997 10.0486 2.53738 10.2338L2.93868 9.93554ZM3.06792 10.4488C3.08383 10.2753 3.04254 10.1005 2.95016 9.95238L2.5259 10.217C2.56039 10.2723 2.57597 10.3381 2.57001 10.4031L3.06792 10.4488ZM2.90696 11.17C3.01202 10.9364 3.06706 10.6839 3.06896 10.4278L2.56897 10.4241C2.56759 10.6109 2.52747 10.7948 2.45097 10.9648L2.90696 11.17ZM3.23033 12.7812C2.80116 12.36 2.67364 11.7187 2.90903 11.1652L2.44891 10.9696C2.13306 11.7123 2.30413 12.5727 2.88009 13.138L3.23033 12.7812ZM4.85173 13.0721C4.30299 13.3178 3.65942 13.2024 3.23034 12.7812L2.88008 13.138C3.456 13.7034 4.31964 13.8582 5.05603 13.5285L4.85173 13.0721ZM5.73443 12.9341C5.43381 12.9028 5.13058 12.9501 4.85362 13.0713L5.05414 13.5293C5.25187 13.4428 5.46817 13.4091 5.68269 13.4314L5.73443 12.9341ZM6.32828 13.3124C6.12194 13.0383 5.91521 12.9327 5.70856 12.9327V13.4327C5.71891 13.4327 5.73624 13.4339 5.76608 13.4514C5.79962 13.471 5.85493 13.515 5.92884 13.6131L6.32828 13.3124ZM6.63645 13.833C6.55343 13.6489 6.44993 13.4738 6.3282 13.3123L5.92892 13.6132C6.02813 13.7449 6.11275 13.888 6.18066 14.0386L6.63645 13.833ZM7.62939 14.6943C7.18557 14.5731 6.82087 14.2576 6.63787 13.8362L6.17925 14.0354C6.42279 14.5962 6.90794 15.0156 7.49771 15.1766L7.62939 14.6943ZM7.84998 14.7606L7.63561 14.6961L7.49149 15.1749L7.70585 15.2394L7.84998 14.7606ZM7.91796 14.3345H8.07873V13.8345H7.91796V14.3345ZM7.75626 14.2976L7.84756 14.3244L7.98835 13.8447L7.89705 13.8179L7.75626 14.2976ZM7.01161 13.6605C7.14859 13.9811 7.42843 14.2187 7.76792 14.3007L7.88539 13.8147C7.69988 13.7699 7.54659 13.64 7.47139 13.464L7.01161 13.6605ZM6.65689 13.0604C6.79811 13.2476 6.91757 13.4501 7.01325 13.6643L7.46975 13.4603C7.35871 13.2118 7.22004 12.9767 7.05611 12.7593L6.65689 13.0604ZM5.76858 12.5139C6.12596 12.5566 6.44747 12.7524 6.64966 13.0503L7.06334 12.7694C6.7799 12.3519 6.32923 12.0774 5.82803 12.0174L5.76858 12.5139ZM4.69259 12.6825C5.03228 12.535 5.40441 12.4771 5.77316 12.5144L5.82344 12.0169C5.3697 11.971 4.91166 12.0422 4.49339 12.2239L4.69259 12.6825ZM3.53695 12.4824C3.84593 12.7798 4.30577 12.8589 4.6967 12.6807L4.48929 12.2257C4.28522 12.3188 4.04507 12.2775 3.88374 12.1222L3.53695 12.4824ZM3.29477 11.3307C3.13164 11.7281 3.22804 12.1842 3.53673 12.4821L3.88395 12.1224C3.72233 11.9664 3.67217 11.728 3.75732 11.5206L3.29477 11.3307ZM3.48878 10.422C3.4873 10.7333 3.42181 11.0403 3.29702 11.3254L3.75507 11.5259C3.90699 11.1788 3.98697 10.8044 3.98877 10.4244L3.48878 10.422ZM3.27466 9.68326C3.42374 9.89649 3.49891 10.1534 3.48896 10.4137L3.98859 10.4328C4.00269 10.0641 3.89631 9.69979 3.68444 9.39676L3.27466 9.68326ZM2.34148 8.98093C2.71426 9.12427 3.03975 9.37044 3.27959 9.69006L3.67952 9.38996C3.38341 8.99536 2.98157 8.69136 2.52092 8.51424L2.34148 8.98093ZM1.91592 8.6661C2.02683 8.80601 2.17326 8.91482 2.33974 8.98026L2.52265 8.51491C2.43867 8.48191 2.36417 8.42667 2.30774 8.35549L1.91592 8.6661ZM1.70068 7.74665C1.61344 8.07524 1.69762 8.42636 1.9267 8.67879L2.29697 8.34279C2.18262 8.21678 2.13992 8.04072 2.18394 7.87495L1.70068 7.74665ZM2.30866 7.03868C2.00833 7.16994 1.7855 7.43083 1.70086 7.74595L2.18375 7.87565C2.22925 7.70623 2.34878 7.56681 2.5089 7.49683L2.30866 7.03868ZM3.01227 6.60632C2.81082 6.7916 2.57563 6.93708 2.32011 7.03401L2.49746 7.5015C2.81285 7.38185 3.10266 7.2025 3.35074 6.97434L3.01227 6.60632ZM3.47005 5.83637C3.41808 6.13496 3.25937 6.40506 3.02392 6.59625L3.3391 6.9844C3.66801 6.71732 3.88993 6.33992 3.96264 5.92211L3.47005 5.83637ZM3.30332 4.68311C3.46627 5.04716 3.52353 5.44994 3.46872 5.84487L3.96397 5.91361C4.03166 5.4259 3.96096 4.92852 3.75969 4.47884L3.30332 4.68311ZM3.28523 3.90154C3.18953 4.15339 3.19513 4.43242 3.30196 4.68001L3.76105 4.48193C3.70601 4.35436 3.70286 4.21011 3.75262 4.07915L3.28523 3.90154ZM3.82521 3.311C3.56363 3.423 3.36407 3.64465 3.28007 3.91655L3.75779 4.06414C3.79847 3.93245 3.89531 3.82489 4.02201 3.77064L3.82521 3.311ZM4.67265 3.29928C4.39969 3.18867 4.09254 3.19279 3.82252 3.31217L4.0247 3.76947C4.17031 3.7051 4.33675 3.70266 4.48488 3.76268L4.67265 3.29928ZM5.5831 3.48827C5.27262 3.49268 4.96465 3.42951 4.6807 3.30271L4.47682 3.75925C4.82724 3.91574 5.20722 3.99366 5.59019 3.98822L5.5831 3.48827ZM6.30092 3.27811C6.09392 3.42198 5.84623 3.49557 5.5938 3.48835L5.57949 3.98814C5.93847 3.99842 6.29124 3.89374 6.58627 3.6887L6.30092 3.27811ZM7.01262 2.34231C6.86789 2.71737 6.61898 3.04355 6.29526 3.28217L6.59193 3.68464C6.99229 3.38953 7.3001 2.98617 7.4791 2.52233L7.01262 2.34231ZM7.3328 1.90995C7.19026 2.02297 7.07977 2.17155 7.0132 2.34084L7.47852 2.52381C7.51258 2.43717 7.56943 2.36043 7.64346 2.30173L7.3328 1.90995ZM8.2539 1.69949C7.92555 1.60994 7.57434 1.69287 7.32127 1.91967L7.65498 2.29201C7.78146 2.17866 7.95742 2.1369 8.12234 2.18188L8.2539 1.69949ZM8.95832 2.30913C8.82681 2.01058 8.56834 1.7879 8.2558 1.70002L8.12045 2.18135C8.29026 2.2291 8.4299 2.34987 8.50074 2.51068L8.95832 2.30913ZM9.39028 3.01386C9.20545 2.81187 9.06077 2.57699 8.96313 2.32085L8.49593 2.49896C8.61593 2.81374 8.79389 3.10276 9.02141 3.3514L9.39028 3.01386ZM10.2169 3.48033C9.89623 3.44026 9.60366 3.2772 9.40031 3.02551L9.01139 3.33975C9.29585 3.6918 9.70546 3.9203 10.1548 3.97647L10.2169 3.48033ZM11.3006 3.30415C10.9585 3.45607 10.5831 3.51639 10.2104 3.47961L10.1613 3.9772C10.6199 4.02246 11.0822 3.94824 11.5036 3.76111L11.3006 3.30415ZM12.0888 3.28685C11.835 3.18877 11.5524 3.19458 11.3023 3.30339L11.5018 3.76187C11.6313 3.70552 11.7775 3.70258 11.9086 3.75325L12.0888 3.28685ZM12.6685 3.8381C12.5623 3.57549 12.3463 3.37288 12.0782 3.28301L11.9193 3.75709C12.0493 3.80067 12.1537 3.89884 12.205 4.02559L12.6685 3.8381ZM12.6815 4.67712C12.7908 4.40365 12.7844 4.0984 12.6652 3.83031L12.2083 4.03338C12.2729 4.17874 12.2763 4.3438 12.2172 4.49142L12.6815 4.67712ZM12.4909 5.58657C12.4861 5.27664 12.5496 4.96969 12.6772 4.68716L12.2215 4.48138C12.0636 4.83103 11.985 5.21094 11.991 5.59446L12.4909 5.58657ZM12.6967 6.30549C12.5556 6.09754 12.4836 5.85005 12.4909 5.59769L11.9911 5.58333C11.9808 5.9402 12.0827 6.29098 12.2829 6.58616L12.6967 6.30549ZM13.6664 7.03895C13.2761 6.89369 12.9371 6.63644 12.6921 6.29894L12.2875 6.5927C12.5904 7.00991 13.0094 7.32795 13.492 7.50754L13.6664 7.03895ZM14.1258 7.42981C14.0236 7.24989 13.861 7.1107 13.6656 7.03868L13.4927 7.50782C13.5762 7.53861 13.6466 7.59847 13.691 7.67668L14.1258 7.42981ZM14.2699 7.76891C14.2316 7.65601 14.1854 7.54576 14.131 7.4394L13.6858 7.66709C13.7288 7.75105 13.7656 7.83876 13.7963 7.92931L14.2699 7.76891ZM13.7831 7.84856V7.84911H14.2831V7.84856H13.7831ZM14.3134 7.8863C14.2979 7.8469 14.2837 7.80788 14.269 7.76597L13.7971 7.93114C13.8131 7.97673 13.8295 8.02194 13.8479 8.06894L14.3134 7.8863ZM14.3306 7.99567V7.97762H13.8306V7.99567H14.3306ZM14.3299 8.05772C14.332 8.03052 14.332 8.00322 14.3299 7.97649L13.8314 8.01484C13.8314 8.01562 13.8315 8.01634 13.8315 8.01693C13.8315 8.01752 13.8314 8.01784 13.8314 8.01784L14.3299 8.05772ZM14.3141 8.1281L14.3178 8.11703L13.8435 7.95852L13.8398 7.96959L14.3141 8.1281ZM14.2893 8.20695C14.2969 8.17946 14.305 8.15523 14.314 8.12822L13.8399 7.96946C13.831 7.99596 13.8191 8.03155 13.8075 8.07313L14.2893 8.20695ZM13.6036 8.99506C13.9587 8.86553 14.2204 8.55961 14.2937 8.18845L13.8031 8.09164C13.7637 8.29142 13.6229 8.4558 13.4322 8.52533L13.6036 8.99506ZM12.8834 9.47751C13.0884 9.26666 13.336 9.10153 13.6103 8.99252L13.4256 8.52788C13.0862 8.66277 12.7793 8.86733 12.5249 9.12897L12.8834 9.47751ZM12.5004 10.2295C12.5316 9.94455 12.6641 9.68079 12.8739 9.48679L12.5344 9.11969C12.2356 9.396 12.0476 9.771 12.0034 10.1751L12.5004 10.2295ZM12.673 11.306C12.5248 10.9664 12.4654 10.595 12.5008 10.2261L12.003 10.1785C11.9596 10.6321 12.0326 11.0887 12.2147 11.506L12.673 11.306ZM12.7503 11.8734C12.7784 11.6805 12.7518 11.4836 12.6724 11.3046L12.2153 11.5073C12.2563 11.5996 12.2701 11.7013 12.2555 11.8014L12.7503 11.8734ZM12.2484 12.6434C12.5367 12.4817 12.7251 12.187 12.7521 11.8579L12.2538 11.817C12.2403 11.9811 12.1465 12.1273 12.0038 12.2073L12.2484 12.6434ZM11.3115 12.7021C11.6165 12.8248 11.9601 12.8036 12.2475 12.6439L12.0047 12.2068C11.8492 12.2932 11.6634 12.3048 11.4981 12.2382L11.3115 12.7021ZM10.4061 12.5118C10.7148 12.5079 11.021 12.5715 11.3021 12.6981L11.5075 12.2422C11.1597 12.0856 10.7812 12.007 10.3998 12.0118L10.4061 12.5118ZM9.64473 12.7425C9.86035 12.5824 10.1241 12.5008 10.3929 12.5116L10.413 12.012C10.0299 11.9966 9.65382 12.113 9.34662 12.3411L9.64473 12.7425ZM8.95222 13.6889C9.09475 13.3144 9.33601 12.9858 9.65035 12.7382L9.341 12.3454C8.95534 12.6491 8.65957 13.0522 8.48492 13.5111L8.95222 13.6889ZM8.68455 14.0603C8.80067 13.9612 8.89128 13.8359 8.94942 13.696L8.48772 13.5041C8.45948 13.572 8.41555 13.6326 8.35995 13.68L8.68455 14.0603ZM8.13453 14.3282C8.33369 14.2826 8.51955 14.1927 8.67861 14.0652L8.36588 13.6751C8.26572 13.7554 8.14863 13.8121 8.02294 13.8408L8.13453 14.3282ZM5.79227 10.2C6.3746 10.784 7.16539 11.1128 7.99006 11.1146L7.99114 10.6146C7.29878 10.6131 6.63499 10.337 6.14632 9.84694L5.79227 10.2ZM4.88312 7.99988C4.88253 8.82466 5.2096 9.61614 5.79234 10.2001L6.14625 9.84687C5.65713 9.35675 5.38262 8.69243 5.38312 8.00024L4.88312 7.99988ZM5.79298 5.80486C5.2113 6.38708 4.88431 7.17681 4.88312 7.9997L5.38312 8.00042C5.38412 7.30958 5.65867 6.64673 6.1467 6.15825L5.79298 5.80486ZM7.98689 4.89101C7.16349 4.89398 6.37506 5.22218 5.79297 5.80487L6.14671 6.15824C6.63539 5.66906 7.29727 5.3935 7.98869 5.39101L7.98689 4.89101ZM10.1848 5.80314C9.602 5.22037 8.81175 4.8928 7.98833 4.89101L7.98725 5.39101C8.67868 5.39251 9.34212 5.6676 9.8312 6.15669L10.1848 5.80314ZM11.0963 7.99974C11.0951 7.17558 10.7675 6.38588 10.1848 5.80314L9.8312 6.15669C10.3203 6.64581 10.5953 7.3086 10.5963 8.00046L11.0963 7.99974ZM10.1896 10.1933C10.7692 9.61065 11.0957 8.82223 11.0963 8.00028L10.5963 7.99992C10.5958 8.68952 10.3219 9.35138 9.83513 9.8406L10.1896 10.1933ZM8.00002 11.1091C8.82188 11.1049 9.60911 10.7755 10.1894 10.1934L9.83531 9.84042C9.34812 10.3291 8.68722 10.6056 7.99749 10.6091L8.00002 11.1091ZM7.98453 11.1091H7.99875V10.6091H7.98453V11.1091ZM8.15755 10.6785L8.15148 10.673L7.81759 11.0452L7.82366 11.0506L8.15755 10.6785ZM7.99026 5.81244C7.10213 5.81368 6.30271 6.35003 5.96516 7.17105L6.4276 7.36118C6.68812 6.7275 7.30518 6.3134 7.99095 6.31244L7.99026 5.81244ZM7.74678 6.00693L7.74566 6.01243L8.23555 6.11246L8.23667 6.10696L7.74678 6.00693ZM10.181 7.99961C10.1791 6.79125 9.20102 5.81121 7.99261 5.80694L7.99085 6.30694C8.92412 6.31023 9.67957 7.06719 9.681 8.00037L10.181 7.99961ZM8.0004 10.193C9.20653 10.1856 10.1797 9.20605 10.181 8.00025L9.681 7.99973C9.68002 8.93114 8.92837 9.68733 7.99733 9.69304L8.0004 10.193ZM7.98793 10.193H7.99887V9.69304H7.98793V10.193ZM6.44903 9.55995C6.8577 9.96801 7.41169 10.1955 7.989 10.193L7.98686 9.69304C7.5426 9.69494 7.11659 9.51994 6.80231 9.20613L6.44903 9.55995ZM5.96511 7.17117C5.62813 7.99201 5.81875 8.93587 6.44977 9.56069L6.80157 9.2054C6.31478 8.72338 6.16744 7.99489 6.42765 7.36106L5.96511 7.17117Z" fill="currentColor" />\n  </svg>\n</template>\n'
      },
      {
        name: "SortAscendingIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2M2 17h10v2H2M6 5v2H2V5m0 6h7v2H2v-2Z" /></svg>\n</template>\n'
      },
      {
        name: "SortDescendingIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2M2 17h10v2H2M6 5v2H2V5m0 6h7v2H2v-2Z" /></svg>\n</template>\n'
      },
      {
        name: "TrashIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M5.29243 0C4.89761 0 4.57812 0.31949 4.57812 0.714303C4.57812 1.10842 4.89761 1.42861 5.29243 1.42861H9.18484C9.57966 1.42861 9.89915 1.10842 9.89915 0.714303C9.89915 0.31949 9.57966 0 9.18484 0L5.29243 0Z" fill="currentColor" />\n    <path d="M13.2026 2.07092H1.2743C0.879488 2.07092 0.559998 2.39111 0.559998 2.78523C0.559998 3.18004 0.879488 3.49953 1.2743 3.49953H1.9886L2.75662 12.0356H2.75593C2.8494 13.1489 3.78204 14.0041 4.89884 14H9.57806C10.6949 14.0042 11.6276 13.1489 11.721 12.0356L12.489 3.49953H13.2033H13.2026C13.5974 3.49953 13.9169 3.18004 13.9169 2.78523C13.9169 2.39111 13.5974 2.07092 13.2026 2.07092H13.2026ZM10.2924 11.9108C10.2638 12.284 9.95198 12.5728 9.57808 12.5714H4.89885C4.52495 12.5728 4.21316 12.284 4.18455 11.9108L3.43468 3.49953H11.0424L10.2924 11.9108Z" fill="currentColor" />\n  </svg>\n</template>\n'
      },
      {
        name: "WarningIcon.vue",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: '<template>\n  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M5.625 6.87484C5.625 7.70797 4.375 7.70797 4.375 6.87484C4.375 6.04172 5.625 6.04172 5.625 6.87484Z" fill="currentColor" />\n    <path d="M4.375 3.4375C4.375 3.09232 4.65482 2.8125 5 2.8125C5.34518 2.8125 5.625 3.09232 5.625 3.4375V4.6875C5.625 5.03268 5.34518 5.3125 5 5.3125C4.65482 5.3125 4.375 5.03268 4.375 4.6875V3.4375Z" fill="currentColor" />\n    <path d="M7.44691 0.365594C7.21253 0.131219 6.89392 0 6.5625 0H3.4375C3.10608 0 2.78747 0.131225 2.55309 0.365594L0.365594 2.55309C0.131219 2.78747 0 3.10608 0 3.4375V6.5625C0 6.89392 0.131225 7.21253 0.365594 7.44691L2.55309 9.63441C2.78747 9.86878 3.10608 10 3.4375 10H6.5625C6.89392 10 7.21253 9.86878 7.44691 9.63441L9.63441 7.44691C9.86878 7.21253 10 6.89392 10 6.5625V3.4375C10 3.10608 9.86877 2.78747 9.63441 2.55309L7.44691 0.365594ZM8.75 5.73404C8.75 6.26447 8.53928 6.77318 8.16421 7.14826L7.14829 8.16418C6.77321 8.53926 6.2645 8.74997 5.73407 8.74997H4.26593C3.73549 8.74997 3.22679 8.53926 2.85171 8.16418L1.83579 7.14826C1.46071 6.77318 1.25 6.26447 1.25 5.73404V4.2659C1.25 3.73546 1.46071 3.22676 1.83579 2.85168L2.85171 1.83576C3.22679 1.46068 3.73549 1.24997 4.26593 1.24997H5.73407C6.2645 1.24997 6.77321 1.46068 7.14829 1.83576L8.16421 2.85168C8.53928 3.22675 8.75 3.73546 8.75 4.2659V5.73404Z" fill="#E14300" />\n  </svg>\n</template>\n'
      },
      {
        name: "icons.ts",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: "import { AddIcon, ArrowDownIcon, CheckmarkIcon, ChevronDownIcon, ChevronRightIcon, CloseIcon, EditIcon, EyeClosedIcon, EyeOpenIcon } from '.'\n\nexport const icons = {\n  add: AddIcon,\n  arrowDown: ArrowDownIcon,\n  checkmark: CheckmarkIcon,\n  chevronDown: ChevronDownIcon,\n  chevronRight: ChevronRightIcon,\n  close: CloseIcon,\n  edit: EditIcon,\n  eyeOpen: EyeOpenIcon,\n  eyeClosed: EyeClosedIcon,\n}\n\nexport const iconNames = Object.keys(icons) as Icon[]\nexport type Icon = keyof typeof icons\n"
      },
      {
        name: "index.ts",
        dir: "./src/icons",
        placementDir: "",
        type: "icons",
        content: "export { default as AddIcon } from './AddIcon.vue'\nexport { default as ArrowDownIcon } from './ArrowDownIcon.vue'\nexport { default as CheckmarkIcon } from './CheckmarkIcon.vue'\nexport { default as ChevronDownIcon } from './ChevronDownIcon.vue'\nexport { default as ChevronRightIcon } from './ChevronRightIcon.vue'\nexport { default as CloseIcon } from './CloseIcon.vue'\nexport { default as EditIcon } from './EditIcon.vue'\nexport { default as EyeOpenIcon } from './EyeOpenIcon.vue'\nexport { default as EyeClosedIcon } from './EyeClosedIcon.vue'\n\nexport { icons, iconNames } from './icons'\nexport type { Icon } from './icons'\n"
      }
    ]
  },
  {
    component: "AppModal",
    name: "Modal",
    files: [
      {
        name: "AppModal.vue",
        dir: "./src/modules/ui/components/app/modal",
        placementDir: "app/modal",
        type: "components",
        content: `<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'
import type { ModalProps } from './appModalVariants'
import { modalVariants } from './appModalVariants'
import type { Icon } from '@/icons'

interface Props {
  hasNoCloseButton?: boolean
  hasNoCloseOutside?: boolean
  size?: ModalProps['size']
  title?: string
  icon?: Icon
}

const {
  hasNoCloseButton = false,
  hasNoCloseOutside = false,
  size = 'default',
} = defineProps<Props>()

const isOpen = defineModel<boolean>('isOpen', {
  required: true,
})

const handleClickOutside = (): void => {
  if (!hasNoCloseOutside)
    isOpen.value = false
}

const handleClickCloseButton = (): void => {
  if (!hasNoCloseButton)
    isOpen.value = false
}
<\/script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-[999]" @close="handleClickOutside">
      <TransitionChild
        as="template"
        class="ease-[cubic-bezier(.8,_.16,_0,_1.3)]"
        enter="duration-300 ease-out "
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto p-4">
        <TransitionChild
          as="template"
          class="ease-[cubic-bezier(.8,_.16,_0,_1.3)]"
          enter="duration-300 ease-out "
          enter-from="opacity-0 scale-0"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-0"
        >
          <DialogPanel :class="twMerge(modalVariants({ size }))">
            <div class="flex justify-between gap-4">
              <DialogTitle class="flex flex-col items-start justify-start gap-8">
                <slot name="icon">
                  <AppButton v-if="icon" :front-icon="icon" size="icon" variant="outline" is-rounded />
                </slot>
                <slot name="title">
                  <AppText variant="large">
                    {{ title }}
                  </AppText>
                </slot>
              </DialogTitle>
              <button class="flex ">
                <AppIcon v-if="!hasNoCloseButton" icon="close" @click="handleClickCloseButton" />
              </button>
            </div>

            <div>
              <slot name="content" />
            </div>

            <div class="mt-4">
              <slot name="footer" />
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
`
      },
      {
        name: "appModalVariants.ts",
        dir: "./src/modules/ui/components/app/modal",
        placementDir: "app/modal",
        type: "components",
        content: "import type { VariantProps } from 'class-variance-authority'\nimport { cva } from 'class-variance-authority'\n\nexport const sizeOptions = {\n  default: 'w-[80ch] ',\n  sm: 'w-[60ch]',\n  full: 'w-full',\n  lg: 'w-[120ch]',\n}\n\nexport const loaderVariantOptions = {\n  white: 'bg-white',\n  primary: 'bg-primary',\n}\n\nexport const modalVariants = cva(\n  'flex flex-col gap-4 rounded-lg bg-white p-6 text-left',\n  {\n    variants: {\n      size: sizeOptions,\n    },\n    defaultVariants: {\n      size: 'default',\n    },\n  },\n)\n\nexport type ModalProps = VariantProps<typeof modalVariants>\nexport const modalSizeOptions = Object.keys(sizeOptions)\n"
      }
    ],
    dependencies: [
      "@headlessui/vue"
    ],
    internalDependencies: [
      "AppText",
      "AppButton",
      "AppIcon"
    ]
  },
  {
    component: "AppText",
    name: "Text",
    files: [
      {
        name: "AppText.vue",
        dir: "./src/modules/ui/components/app/text",
        placementDir: "app/text",
        type: "components",
        content: `<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { textVariants } from './appTextVariants'
import type { TextProps } from './appTextVariants'

interface Props {
  variant: TextProps['variant']
  boldness?: TextProps['boldness']
  numberOfLines?: TextProps['truncate']
}

const {
  variant = 'p',
  numberOfLines,
  boldness,
} = defineProps<Props>()

const htmlElement = computed(() => {
  switch (variant) {
    case 'quote':
    case 'large':
    case 'small':
    case 'subtle':
      return 'p'
    default:
      return variant ?? 'p'
  }
})
<\/script>

<template>
  <Component :is="htmlElement" :class="twMerge(textVariants({ variant, boldness, truncate: numberOfLines }))">
    <slot />
  </Component>
</template>
`
      },
      {
        name: "appTextVariants.ts",
        dir: "./src/modules/ui/components/app/text",
        placementDir: "app/text",
        type: "components",
        content: "import type { VariantProps } from 'class-variance-authority'\nimport { cva } from 'class-variance-authority'\n\nexport const variantOptions = {\n  p: 'text-base',\n  h1: 'font-bold text-5xl',\n  h2: 'font-semibold text-3xl',\n  h3: 'font-semibold text-2xl',\n  h4: 'font-semibold text-xl',\n  quote: 'italic',\n  large: 'text-lg font-semibold',\n  small: 'text-sm',\n  subtle: 'text-sm text-muted-foreground',\n}\n\nexport const boldnessOptions = {\n  bold: 'font-bold',\n  normal: 'font-normal',\n  light: 'font-light',\n  thin: 'font-thin',\n  extrabold: 'font-extrabold',\n  semibold: 'font-semibold',\n  none: '',\n}\n\nexport const truncateOptions = {\n  1: 'line-clamp-1',\n  2: 'line-clamp-2',\n  3: 'line-clamp-3',\n  4: 'line-clamp-4',\n  5: 'line-clamp-5',\n  6: 'line-clamp-6',\n\n}\n\nexport const textVariants = cva(\n  '',\n  {\n    variants: {\n      variant: variantOptions,\n      boldness: boldnessOptions,\n      truncate: truncateOptions,\n    },\n    defaultVariants: {\n      variant: 'p',\n      boldness: 'none',\n      truncate: undefined,\n    },\n  },\n)\n\nexport type TextProps = VariantProps<typeof textVariants>\n\nexport const textVariantOptions = Object.keys(variantOptions)\nexport const textBoldnessOptions = Object.keys(boldnessOptions)\nexport const textTruncateOptions = Object.keys(truncateOptions)\n"
      }
    ],
    internalDependencies: []
  },
  {
    component: "AppTooltip",
    name: "Tooltip",
    files: [
      {
        name: "AppTooltip.vue",
        dir: "./src/modules/ui/components/app/tooltip",
        placementDir: "app/tooltip",
        type: "components",
        content: `<script setup lang="ts">
import {
  onMounted,
  ref,
} from 'vue'

import type { Middleware } from '@floating-ui/dom'
import {
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom'
import { useMouseInElement, watchDebounced } from '@vueuse/core'
import { scaleBounceTransition } from '@/transitions'

interface SlotEvents {
  onBlur: () => void
  onFocus: () => void
  onKeydown: (event: KeyboardEvent) => void
}

interface Props {
  offset: number
  hasNoFlip: boolean
  hasNoShift: boolean
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
}

const props = withDefaults(defineProps<Props>(), {
  offset: 12,
  hasNoFlip: false,
  hasNoShift: false,
  placement: 'bottom',
})

defineSlots<{
  element: (props: { events: SlotEvents }) => any
  tooltip: (props: {}) => any
}>()

const tooltipSlot = ref()
const element = ref<HTMLElement>()
const tooltip = ref<HTMLElement>()
const tooltipWrapper = ref<HTMLElement>()

const { isOutside: tooltipWrapperOutside } = useMouseInElement(tooltipWrapper)
const { isOutside: tooltipOutside } = useMouseInElement(tooltip)

const update = (): void => {
  if (!element.value || !tooltip.value)
    return

  const middleware: Middleware[] = []

  if (props.offset)
    middleware.push(offset(props.offset))

  if (!props.hasNoFlip)
    middleware.push(flip())

  if (!props.hasNoShift)
    middleware.push(shift())

  computePosition(element.value, tooltip.value, {
    placement: props.placement,
    middleware,
  }).then(({ x, y }) => {
    if (!tooltip.value)
      return
    Object.assign(tooltip.value.style, {
      left: \`\${x}px\`,
      top: \`\${y}px\`,
    })
  })
}
const tooltipShow = ref(false)
const showTooltip = (): void => {
  tooltipShow.value = true

  nextTick(() => {
    update()
  })
}

const hideTooltip = (): void => {
  if (tooltipOutside.value && tooltipWrapperOutside.value)
    tooltipShow.value = false
}

onMounted(() => {
  hideTooltip();
  ([
    ['focus', showTooltip],
    ['blur', hideTooltip],
  ] as const).forEach(([event, listener]) => {
    if (!element.value)
      return
    element.value.addEventListener(event, listener)
  })
})

const handleEscape = (event: KeyboardEvent): void => {
  if (event.key === 'Escape')
    hideTooltip()
}

watchDebounced(() => [tooltipOutside.value, tooltipWrapperOutside.value], () => {
  hideTooltip()
}, { debounce: 200, maxWait: 1000 })

watch(() => [tooltipOutside.value, tooltipWrapperOutside.value], () => {
  if (!tooltipOutside.value || !tooltipWrapperOutside.value)
    showTooltip()
})

const slotEvents = {
  onBlur: hideTooltip,
  onFocus: showTooltip,
  onKeydown: handleEscape,
}
<\/script>

<template>
  <div ref="tooltipWrapper" class="relative max-w-max">
    <div ref="element" class="grid max-w-max place-items-center">
      <slot name="element" :events="slotEvents" />
    </div>
    <Teleport to="body">
      <Transition v-bind="scaleBounceTransition">
        <div v-if="tooltipShow" id="tooltip" ref="tooltip" role="tooltip"
          :class="[tooltipSlot?.childElementCount === 0 ? 'opacity-0' : 'opacity-100']"
          class="absolute z-50 flex min-w-max rounded text-black shadow-main">
          <div ref="tooltipSlot" class="flex w-full max-w-[60ch] flex-col items-center justify-center">
            <slot name="tooltip" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
`
      }
    ],
    internalDependencies: [],
    dependencies: [
      "@floating-ui/dom",
      "@vueuse/core"
    ]
  },
  {
    component: "TransitionExpand",
    name: "TransitionExpand",
    files: [
      {
        name: "TransitionExpand.vue",
        dir: "./src/modules/ui/components/transitions",
        placementDir: "transitions",
        type: "components",
        content: `<script lang="ts" setup>
interface Props {
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 0.5,
})

const durationString = computed(() => \`\${props.duration}s\`)

const enter = (element: Element): void => {
  const htmlElement: HTMLElement = element as HTMLElement
  const width = getComputedStyle(htmlElement).width

  htmlElement.style.width = width
  htmlElement.style.position = 'absolute'
  htmlElement.style.visibility = 'hidden'
  htmlElement.style.height = 'auto'

  const height = getComputedStyle(htmlElement).height

  htmlElement.style.width = ''
  htmlElement.style.position = ''
  htmlElement.style.visibility = ''
  htmlElement.style.height = ''

  getComputedStyle(htmlElement)

  requestAnimationFrame(() => {
    htmlElement.style.height = height
  })
}

const afterEnter = (element: Element): void => {
  const htmlElement: HTMLElement = element as HTMLElement
  htmlElement.style.height = 'auto'
}

const leave = (element: Element): void => {
  const htmlElement: HTMLElement = element as HTMLElement
  const height = getComputedStyle(htmlElement).height

  htmlElement.style.height = height
  getComputedStyle(htmlElement)

  requestAnimationFrame(() => {
    htmlElement.style.height = '0'
  })
}
<\/script>

<template>
  <transition
    name="expand"
    @after-enter="afterEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height v-bind(durationString) cubic-bezier(0.645, 0.045, 0.355, 1), opacity v-bind(durationString);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  height: 0;
}

* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
`
      }
    ]
  },
  {
    component: "Transitions",
    name: "Transitions",
    files: [
      {
        name: "index.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "export interface TransitionClasses {\n  enterFromClass?: string\n  enterActiveClass?: string\n  enterToClass?: string\n  leaveFromClass?: string\n  leaveActiveClass?: string\n  leaveToClass?: string\n  moveClass?: string\n\n  enterFrom?: string\n  enter?: string\n  enterTo?: string\n  leaveFrom?: string\n  leave?: string\n  leaveTo?: string\n  move?: string\n\n}\n\nexport * from './scaleBounce.transition'\nexport * from './snackbar.transition'\nexport * from './fade.transition'\nexport * from './list.transition'\nexport * from './staticList.transition'\n"
      },
      {
        name: "fade.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const fadeTransition: TransitionClasses = {\n  enterActiveClass: 'transition-opacity ease duration-300',\n  leaveActiveClass: 'transition-opacity ease duration-300',\n  enterFromClass: 'opacity-0',\n  leaveToClass: 'opacity-0',\n}\n\nexport const widthExpand: TransitionClasses = {\n  enterActiveClass: 'transition-all ease duration-500',\n  leaveActiveClass: 'transition-all ease duration-500',\n  enterFromClass: 'w-0 text-red-500',\n  leaveToClass: 'w-0 text-red-500',\n}\n"
      },
      {
        name: "list.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const listTransition: TransitionClasses = {\n  moveClass: 'transition-all ease duration-500',\n  enterActiveClass: 'transition-all ease duration-500',\n  leaveActiveClass: 'transition-all ease duration-500 absolute',\n\n  enterFromClass: 'opacity-0',\n  leaveToClass: 'opacity-0',\n}\n"
      },
      {
        name: "scaleBounce.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const scaleBounceTransition: TransitionClasses = {\n  enterFromClass: 'scale-0 opacity-0',\n  enterActiveClass: 'transition-scale-bounce',\n  enterToClass: 'scale-100 opacity-100',\n  leaveFromClass: 'scale-100 opacity-100',\n  leaveActiveClass: 'transition-scale-bounce',\n  leaveToClass: 'scale-0 opacity-0',\n\n  enterFrom: 'scale-0 opacity-0',\n  enter: 'transition-scale-bounce',\n  enterTo: 'scale-100 opacity-100',\n  leaveFrom: 'scale-100 opacity-100',\n  leave: 'transition-scale-bounce',\n  leaveTo: 'scale-0 opacity-0',\n}\n"
      },
      {
        name: "snackbar.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const snackbarTransition: TransitionClasses = {\n  moveClass: 'transition-all ease duration-500',\n  enterActiveClass: 'transition-all ease duration-500',\n  leaveActiveClass: 'transition-all ease duration-500 absolute',\n\n  enterFromClass: 'scale-0 opacity-0',\n  leaveToClass: 'scale-0 opacity-0',\n\n}\n"
      },
      {
        name: "staticList.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const staticList: TransitionClasses = {\n  moveClass: 'transition-all ease duration-500',\n  enterActiveClass: 'transition-all ease duration-500',\n  leaveActiveClass: 'transition-all ease duration-500 absolute',\n\n  enterFromClass: 'translate-x-8 opacity-0',\n  leaveToClass: 'translate-x-8 opacity-0',\n}\n"
      }
    ]
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentView",
  setup(__props, { expose: __expose }) {
    __expose();
    const componentName = useRoute().params.componentName;
    const foundComponent = componentInfo.find((component) => component.component === componentName);
    const __returned__ = { componentName, foundComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock(
    "div",
    null,
    toDisplayString((_a = $setup.foundComponent) == null ? void 0 : _a.files[0].content),
    1
    /* TEXT */
  );
}
_sfc_main.__file = "src/pages/ComponentView.vue";
const ComponentView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/pages/ComponentView.vue"]]);
export {
  ComponentView as default
};
