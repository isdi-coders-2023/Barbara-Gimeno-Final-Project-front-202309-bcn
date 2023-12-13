import { useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  PoolDataStructure,
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

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getPools = useCallback(async (): Promise<
    PoolsStateStructure | undefined
  > => {
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
    async (id: string): Promise<object | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete<object>(`/pools/${id}`);

        toast.success("Well done! Pool has been deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Ups, your pool wasn't deleted", {
          style: { backgroundColor: "#D65745", color: "#000" },
        });
      }
    },
    [dispatch],
  );

  const addPool = useCallback(
    async (newpool: PoolDataStructure): Promise<PoolStructure | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const { data } = await axios.post<PoolStructure>(
          "/pools/create",
          newpool,
        );

        toast.success("Well done! You have created a new pool inspiration", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Error creating pool, please try again", {
          style: { backgroundColor: "#D65745", color: "#000" },
        });
      }
    },
    [dispatch],
  );

  return { getPools, deletePool, addPool };
};

export default usePoolsApi;
