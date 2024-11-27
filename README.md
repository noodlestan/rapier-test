# Rapier.js test

> Testing Vite + [Rapier.js](https://www.rapier.rs/docs/user_guides/javascript/getting_started_js) (WASM) build

This branch is using `"@dimforge/rapier3d": "^0.14.0"` and break in production build.

See also:

- branch `compat` - works, but uses `"@dimforge/rapier3d-compat": "^0.14.0"` instead.
- branch `tree-shaking-disabled` works, but tree-shaking is disabled in rollup options

```
import RAPIER from "@dimforge/rapier3d";

(async () => {
  const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
  console.log("World created:", world);
})();
```

- `npm run dev` - OK
- `npm run build` - FAILS (use `npm run preview` to load it)

```
Uncaught (in promise) TypeError: i is undefined
```

Notes:

- the bundle `index.js` does not contain the inlined WASM code.
- the `rapier_wasm3d_bg.wasm` file is generated in `dist/assets` (roughly 1.4MB) but never loaded
