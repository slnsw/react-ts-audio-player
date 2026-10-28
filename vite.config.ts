// @file
// vitest config.

import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    env: {},
    environment: 'jsdom',
    setupFiles: [
      path.join(__dirname, 'vitest.setup.ts'),
    ],
    reporters:
      process.env.GITHUB_ACTIONS === 'true'
        ? ['dot', 'github-actions']
        : ['dot'],
  },
  resolve: {
    tsconfigPaths: true,
  },
});
