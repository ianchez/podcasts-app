/* eslint-disable @typescript-eslint/naming-convention */

import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginReactQuery from '@tanstack/eslint-plugin-query'
import eslintConfigPrettier from "eslint-config-prettier";

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: tseslint.configs.recommended })

export default [
  ...compat.extends('standard-with-typescript'),
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          tsx: true
        }
      },
      globals: globals.browser
    },

    rules: {
      // Add your own rules here
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-console': 'warn'
    }
  },
  pluginReactConfig,
  ...pluginReactQuery.configs.recommended,
  eslintConfigPrettier
]
