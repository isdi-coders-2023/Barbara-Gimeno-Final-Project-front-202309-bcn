import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import usePoolsApi from "../../hooks/usePoolsApi";
import { type PoolDataStructure } from "../../store/features/pools/types";
import { modifyPoolActionCreator } from "../../store/features/pools/poolsSlice";
import { useEffect } from "react";
import PoolForm from "../../components/Form/Form";
import ModifyPoolPageStyled from "./ModifyPoolPageStyled";

const ModifyPoolPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { _id } = useParams();
  const { modifyPool, getPool } = usePoolsApi();

  const { selectedPool } = useAppSelector((state) => state.poolsState);

  const updatePool = async (modifiedPool: PoolDataStructure) => {
    const updatedPool = await modifyPool(pool._id, modifiedPool);

    dispatch(modifyPoolActionCreator(updatedPool!));
  };

  useEffect(() => {
    (async () => {
      if (_id) {
        const pool = await getPool(_id);

        dispatch(modifyPoolActionCreator(pool!));
      }
    })();
  }, [dispatch, getPool, _id]);

  return (
    <ModifyPoolPageStyled className="modifyPool-page">
      <h2 className="modifyPool-page__title">Modify pool</h2>
      <PoolForm onSubmit={updatePool} selectedPool={selectedPool} />
    </ModifyPoolPageStyled>
  );
};

export default ModifyPoolPage;
