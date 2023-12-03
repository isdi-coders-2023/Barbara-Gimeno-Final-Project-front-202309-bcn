import PoolPageStyled from "./PoolPageStyled";
import { useEffect } from "react";
import { loadPoolsActionCreator } from "../../store/features/pools/poolsSlice";
import poolsMocks from "../../mocks/poolsMocks";
import { useAppDispatch } from "../../store/hooks";

const PoolPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async () => {
      dispatch(loadPoolsActionCreator(poolsMocks));
    };
  }, [dispatch]);

  return (
    <PoolPageStyled>
      <h2 className="page__main-title">Inspiration pools</h2>
      <h3 className="page__subtitle">Let your imagination run wild</h3>
    </PoolPageStyled>
  );
};

export default PoolPage;
