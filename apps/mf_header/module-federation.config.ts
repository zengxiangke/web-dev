import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin'

export default createModuleFederationConfig({
  name: 'mf_header',
  exposes: {
    '.': './src/index.tsx',
  },
  shared: {
    react: {
      singleton: true,
      import: false,
    },
    'react-dom': {
      singleton: true,
      import: false,
    },
  },
})
