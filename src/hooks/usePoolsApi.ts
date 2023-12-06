import { useCallback } from "react";
import axios from "axios";
import { UsePoolsApiStructure } from "./types";
import { toast } from "react-toastify";
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

  const getPools = useCallback(async (): Promise<
    PoolsStateStructure | undefined
  > => {
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
      toast.error("Error loading pools", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [dispatch]);

  return { getPools };
};

export default usePoolsApi;
