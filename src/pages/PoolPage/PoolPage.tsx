import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import PoolsList from "../../components/PoolsList/PoolsList";
import poolsMocks from "../../mocks/poolsMocks";
import { loadPoolsActionCreator } from "../../store/features/pools/poolsSlice";
import PoolPageStyled from "./PoolPageStyled";

const PoolPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPoolsActionCreator(poolsMocks));
  }, [dispatch]);

  return (
    <PoolPageStyled>
      <h2 className="page__main-title">Inspiration pools</h2>
      <span className="page__subtitle">Let your imagination run wild</span>
      <PoolsList />
    </PoolPageStyled>
  );
};

export default PoolPage;
