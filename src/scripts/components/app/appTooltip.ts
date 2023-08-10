import { ComponentName, ComponentType } from '../../componentsTypes'

export const appTooltip = {
  component: ComponentName.APP_TOOLTIP,
  name: 'Tooltip',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/tooltip/AppTooltip.vue',
      folder: 'app/tooltip',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/button/appTooltip.style.ts',
      folder: 'app/tooltip',
    },
  ],
  internalDependencies: [],
  dependencies: ['class-variance-authority'],
}
