import { useEffect } from "react";
import PoolsList from "../../components/PoolsList/PoolsList";
import poolsMocks from "../../mocks/poolsMocks";
import { loadPoolsActionCreator } from "../../store/features/pools/poolsSlice";
import { useAppDispatch } from "../../store/hooks";
import PoolPageStyled from "./PoolPageStyled";

const PoolPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadPoolsActionCreator(poolsMocks));
    })();
  }, [dispatch]);

  return (
    <PoolPageStyled>
      <h2 className="page__main-title">Inspiration pools</h2>
      <h3 className="page__subtitle">Let your imagination run wild</h3>
      <PoolsList />
    </PoolPageStyled>
  );
};

export default PoolPage;
