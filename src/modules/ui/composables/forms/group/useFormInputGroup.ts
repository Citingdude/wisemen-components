import { useFormInputGroupContext } from '@/modules/ui/composables/forms/group/useFormInputGroupContext'
import type { Option } from '@/modules/ui/composables/forms/group/useFormInputGroupContext'

export interface UseFormInputGroupParams {
  model: Ref<number | null>
  isDisabled?: Ref<boolean>
  uuid: string
  element: Ref<HTMLElement | undefined>
}

export const useFormInputGroup = ({ model, uuid, isDisabled, element }: UseFormInputGroupParams): void => {
  const context = useFormInputGroupContext()
  const propsRef = computed(() => ({
    value: typeof model.value === 'number' ? model.value : 0,
    disabled: isDisabled?.value,
  }))
  const option: Option = ref({ id: uuid, element: element.value, propsRef: propsRef.value }) as Option

  const change = (value: number): void => {
    if (isDisabled?.value || !context)
      return

    const newValue = context.change(option, value)
    model.value = newValue
  }

  watch(
    () => model.value, (value) => {
      if (!value)
        return
      change(value)
    },
  )

  onMounted(() => {
    if (context)
      context.registerOption(option)
  })
  onUnmounted(() => {
    if (context)
      context.unregisterOption(uuid)
  })
}
