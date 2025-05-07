import { FlatCompat } from '@eslint/eslintrc'

// import.meta.dirname hanya ada di Node 20.11+, kamu bisa pakai fallback:
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Extend config from Next.js
  ...compat.extends('next'),

  // Override or disable rules here
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
]

export default eslintConfig
