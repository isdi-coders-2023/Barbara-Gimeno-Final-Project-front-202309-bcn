import PoolsList from "../../components/PoolsList/PoolsList";
import PoolPageStyled from "./PoolPageStyled";

const PoolPage = (): React.ReactElement => {
  return (
    <PoolPageStyled>
      <h2 className="page__main-title">Inspiration pools</h2>
      <h3 className="page__subtitle">Let your imagination run wild</h3>
      <PoolsList />
    </PoolPageStyled>
  );
};

export default PoolPage;
