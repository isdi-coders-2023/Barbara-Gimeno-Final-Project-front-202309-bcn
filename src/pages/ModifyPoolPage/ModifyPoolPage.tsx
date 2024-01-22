import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import usePoolsApi from "../../hooks/usePoolsApi";
import { PoolDataStructure } from "../../store/features/pools/types";
import {
  loadPoolsActionCreator,
  modifyPoolActionCreator,
} from "../../store/features/pools/poolsSlice";
import { useEffect } from "react";
import PoolForm from "../../components/Form/Form";
import ModifyPoolPageStyled from "./ModifyPoolPageStyled";

const ModifyPoolPage = (): React.ReactElement => {
  const { _id } = useParams();
  const { modifyPool: modifyPool, getPools } = usePoolsApi();
  const { pool } = useAppSelector((state) => state.poolsState);
  const dispatch = useAppDispatch();

  const updatePool = async (modifiedPool: PoolDataStructure) => {
    const updatedPool = await modifyPool(pool._id, modifiedPool);

    dispatch(modifyPoolActionCreator(updatedPool!));
  };

  useEffect(() => {
    (async () => {
      if (_id) {
        const pool = await getPools(_id);

        dispatch(loadPoolsActionCreator(pool!));

        return pool;
      }
    })();
  }, [dispatch, getPools, _id]);

  return (
    <ModifyPoolPageStyled className="modifyPool-page">
      <h2 className="modifyPool-page__title">Modify pool</h2>
      <PoolForm onSubmit={updatePool} selectedPool={pool} />
    </ModifyPoolPageStyled>
  );
};

export default ModifyPoolPage;
