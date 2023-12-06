import type { PoolStructure } from "../store/features/pools/types";

const poolsMocks: PoolStructure[] = [
  {
    _id: "6565cdaa1d9be1bc1e6af452",
    title: "beach pool",
    measuresLong: 15,
    measuresHigh: 10,
    measuresWide: 1,
    since: 2018,
    depuration: "electrolisis salty",
    material: "epoxy",
    image: "https://i.ibb.co/jv9YYD3/1.webp",
  },
  {
    _id: "6565cdc41d9be1bc1e6af454",
    title: "infinity pool",
    measuresLong: 25,
    measuresHigh: 12,
    measuresWide: 2,
    since: 2015,
    depuration: "electrolisis salty",
    material: "mortal",
    image: "https://i.ibb.co/7bhAvz6/2.webp",
  },
];

export default poolsMocks;
