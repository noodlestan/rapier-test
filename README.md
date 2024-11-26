# Rapier.js test

> Testing Vite + [Rapier.js](https://www.rapier.rs/docs/user_guides/javascript/getting_started_js) (WASM) build

This branch is using `"@dimforge/rapier3d-compat": "^0.14.0"`

```
import RAPIER from "@dimforge/rapier3d-compat";

(async () => {
  await RAPIER.init();
  const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
  console.log("World created:", world);
})();
```

- `npm run dev` - OK
- `npm run build` - OK
