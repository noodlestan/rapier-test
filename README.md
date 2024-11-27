# Rapier.js test

> Testing Vite + [Rapier.js](https://www.rapier.rs/docs/user_guides/javascript/getting_started_js) (WASM) build

This branch is using `"@dimforge/rapier3d": "^0.14.0"` + tree-shaking disabled.

See branch `compat` for a fully working demo (uses `"@dimforge/rapier3d-compat": "^0.14.0"` instead).

Kudos: https://github.com/doppl3r/kinematic-character-controller-example/blob/master/vite.config.js#L9C2-L14C5

```ts
  build: {
    emptyOutDir: true,
    rollupOptions: {
      treeshake: false,
    },
  },
```

- `npm run dev` - OK
- `npm run build` - OK
