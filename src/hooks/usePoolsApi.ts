import { useCallback } from "react";
import axios from "axios";
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

const usePoolsApi = () => {
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

  const deletePool = useCallback(
    async (id: string): Promise<Record<string, never> | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete<Record<string, never>>(
          `/pools/${id}`,
        );

        toast.success("Well done! Pool has been delated", {
          style: { backgroundColor: "#55B938", color: "#fff" },
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Ups, you pool wasn't deleted", {
          style: { backgroundColor: "#D65745", color: "#000" },
        });
      }
    },
    [dispatch],
  );

  return { getPools, deletePool };
};

export default usePoolsApi;
