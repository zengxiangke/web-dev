import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin'

export default createModuleFederationConfig({
  name: 'mf_provider',
  exposes: {
    '.': './src/components/ProviderComponent.tsx',
    './myMath': './src/utils/myMath.ts',
  },
  shared: {
    react: { singleton: true, import: false },
    // 'react-dom': { singleton: true },
  },
})
