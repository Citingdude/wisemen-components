// histoire.config.js
import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  tree: {
    groups: [
      {
        id: 'top',
        title: '', // No toggle
      },
      {
        title: 'Components',
        include: (file): boolean => !file.title.includes('Serialize'),
      },
    ],
  },
  defaultStoryProps: {
    layout: {
      type: 'grid',
      width: '100%',
    },
    autoPropsDisabled: true,
  },
  plugins: [
    HstVue(),
    Components({
      dts: true,
    }),
    AutoImport({
      dts: true,
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        'vue-i18n',
        {
          axios: [
            ['default', 'axios'],
          ],
        },
      ],
      resolvers: [
        /* ... */
      ],
    }),

  ],
  setupFile: './histoire.setup.ts',
  theme: {
    title: 'Wisemen',
  },
})
