import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import PoolsList from "../../components/PoolsList/PoolsList";
import { loadPoolsActionCreator } from "../../store/features/pools/poolsSlice";
import PoolPageStyled from "./PoolPageStyled";
import usePoolsApi from "../../hooks/usePoolsApi";

const PoolPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPools } = usePoolsApi();

  useEffect(() => {
    (async () => {
      const { pools } = await getPools();

      dispatch(loadPoolsActionCreator(pools));
    })();
  }, [dispatch, getPools]);

  return (
    <PoolPageStyled>
      <h2 className="page__main-title">Inspiration pools</h2>
      <span className="page__subtitle">Let your imagination run wild</span>
      <PoolsList />
    </PoolPageStyled>
  );
};

export default PoolPage;
