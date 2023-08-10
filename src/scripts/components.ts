import { appButton } from './components/app/appButton'
import { appModal } from './components/app/appModal'
import { appText } from './components/app/appText'
import { appTooltip } from './components/app/appTooltip'

import { formError } from './components/form/formError'
import { formInputField } from './components/form/formInputField'
import { formInputGroupComposable } from './components/form/formInputGroupComposable'
import { transitionExpand } from './components/transitions/transitionExpand'
import type { Component } from './componentsTypes'
import { utilsGenerateUuid } from './components/utils/utilsGenerateUuid'

export const components: Component[] = [
  appButton,
  appModal,
  appText,
  appTooltip,

  formError,
  formInputField,
  formInputGroupComposable,

  transitionExpand,
  utilsGenerateUuid,
]
