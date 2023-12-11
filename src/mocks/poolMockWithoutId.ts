import type { PoolDataStructure } from "../store/features/pools/types";

const poolsMocksWithoutId: PoolDataStructure[] = [
  {
    title: "beach pool",
    measuresLong: 15,
    measuresHigh: 10,
    measuresWide: 1,
    since: 2018,
    depuration: "electrolisis salty",
    material: "epoxy",
    image: "https://i.ibb.co/F609Q8p/poolbeach.webp",
  },
  {
    title: "infinity pool",
    measuresLong: 25,
    measuresHigh: 12,
    measuresWide: 2,
    since: 2015,
    depuration: "electrolisis salty",
    material: "mortal",
    image: "https://i.ibb.co/xMM08Sy/pool-infinity.webp",
  },
];

export default poolsMocksWithoutId;
