export interface PoolDataStructure {
  title: string;
  measuresLong: number;
  measuresHigh: number;
  measuresWide: number;
  since: number;
  depuration: string;
  material: string;
  image: string;
}

export interface PoolStructure extends PoolDataStructure {
  _id: string;
}
export interface PoolsStateStructure {
  pools: PoolStructure[];
  selectedPool: PoolStructure;
}

export interface StateStructure extends PoolsStateStructure {
  pool: PoolStructure;
}
