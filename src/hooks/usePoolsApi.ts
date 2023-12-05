import { useCallback } from "react";
import axios from "axios";
import { UsePoolsApiStructure } from "./types";
import {
  PoolStructure,
  PoolsStateStructure,
} from "../store/features/pools/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const usePoolsApi = (): UsePoolsApiStructure => {
  const dispatch = useAppDispatch();

  const getPools = useCallback(async (): Promise<PoolsStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    try {
      dispatch(showLoadingActionCreator());
      const { data: pools } = await axios.get<{ pools: PoolStructure[] }>(
        `/pools`,
      );

      dispatch(hideLoadingActionCreator());
      return pools;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      throw new Error((error as Error).message);
    }
  }, [dispatch]);

  return { getPools };
};

export default usePoolsApi;
