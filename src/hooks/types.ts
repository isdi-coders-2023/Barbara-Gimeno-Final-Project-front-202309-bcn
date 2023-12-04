import { PoolsStateStructure } from "../store/features/pools/types";

export interface UsePoolsApiStructure {
  getPools: () => Promise<PoolsStateStructure>;
}
