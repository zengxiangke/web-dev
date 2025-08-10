import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'
import { pluginReact } from '@rsbuild/plugin-react'
import { defineConfig } from '@rslib/core'
import moduleFederationConfig from './module-federation.config'

const shared = {
  dts: {
    bundle: false,
  },
}

export default defineConfig({
  lib: [
    {
      dts: {
        bundle: true,
        distPath: './dist/esm',
      },
      bundle: true,
      source: {
        entry: {
          index: './src/index.tsx',
        },
      },
      format: 'esm',
      output: {
        cleanDistPath: true,
        distPath: {
          root: './dist/esm',
        },
      },
    },
    // {
    //   ...shared,
    //   format: 'cjs',
    //   output: {
    //     distPath: {
    //       root: './dist/cjs',
    //     },
    //   },
    // },
    {
      format: 'mf',
      output: {
        // set unpkg cdn as assetPrefix if you want to publish
        // assetPrefix:
        //   process.env.NODE_ENV === 'production'
        //     ? `https://unpkg.com/${pkg.name}@latest/dist/mf/`
        //     : undefined,
        distPath: {
          root: './dist/mf',
        },
      },
    },
  ],
  server: {
    port: 3002,
  },
  plugins: [
    pluginReact(),
    //
    pluginModuleFederation(moduleFederationConfig),
  ],
})
