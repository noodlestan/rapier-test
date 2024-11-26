import RAPIER from "@dimforge/rapier3d-compat";

(async () => {
  await RAPIER.init();
  const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
  console.log("World created:", world);
})();
