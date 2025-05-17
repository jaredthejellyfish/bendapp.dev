import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginRouter from "@tanstack/eslint-plugin-router";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";

export default tseslint.config(
  // 1. Global ignores
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      ".wrangler/",
      "!.github",
      "!.vscode",
      "public/build/",
      // Add any other generated or vendored paths specific to your project
    ],
  },

  // 2. Base ESLint recommended rules for JavaScript files
  {
    ...js.configs.recommended,
    files: ["**/*.{js,mjs,cjs}"], // Scope to non-TypeScript JS files
  },

  // 3. General language options applicable across JS, TS, JSX, TSX
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
      },
    },
  },

  // 4. TypeScript configurations
  {
    files: ["**/*.{ts,tsx,mts,cts}"], // Apply only to TypeScript files
    extends: [...tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        project: true, // Automatically find and use tsconfig.json
        tsconfigRootDir: import.meta.dirname, // Root directory for tsconfig.json
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      // Note: @typescript-eslint/no-unused-vars is already included and set to error
      // by tseslint.configs.strictTypeChecked.
    },
  },

  // 5. React configuration
  {
    ...pluginReact.configs.flat.recommended,
    files: ["**/*.{jsx,tsx}"], // Explicitly scope React rules
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      // Disable the rule requiring React to be in scope for JSX (for React 17+ new JSX transform)
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off", // Also disable this if using the new transform
      // You can add other React specific rule overrides here if needed
    },
  },

  // 6. Tanstack Router plugin configuration
  {
    files: [
      "app/routes/**/*.{ts,tsx}", // Standard location for route definitions
      "app/components/**/*.{ts,tsx}", // If routes/links are in components
      "**/*.route.{ts,tsx}", // For files following a *.route.tsx pattern
    ],
    plugins: {
      "@tanstack/router": pluginRouter,
    },
    rules: {
      "@tanstack/router/create-route-property-order": "error",
    },
  },

  // 7. JSON files configuration
  // For .json files (uses eslint-plugin-json's recommended config)
  json.configs.recommended,

  // For .jsonc files (uses recommended-with-comments for JSON with comments)
  {
    ...json.configs["recommended-with-comments"],
    files: ["**/*.jsonc"],
  },

  // For .json5 files (can also use recommended-with-comments)
  {
    ...json.configs["recommended-with-comments"],
    files: ["**/*.json5"],
  },

  // 8. Markdown files configuration
  // Lints code blocks within Markdown files.
  markdown.configs.recommended,

  // 9. CSS files configuration
  css.configs.recommended
);
