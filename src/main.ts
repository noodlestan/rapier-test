import RAPIER from "@dimforge/rapier3d";

(async () => {
  const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
  console.log("World created:", world);
})();
