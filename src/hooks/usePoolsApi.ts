import { useCallback } from "react";
import axios from "axios";
import { UsePoolsApiStructure } from "./types";
import {
  PoolStructure,
  PoolsStateStructure,
} from "../store/features/pools/types";

const usePoolsApi = (): UsePoolsApiStructure => {
  const getPools = useCallback(async (): Promise<PoolsStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    const { data: pools } = await axios.get<{ pools: PoolStructure[] }>(
      `/pools`,
    );

    return pools;
  }, []);

  return { getPools };
};

export default usePoolsApi;
