import { useAppSelector } from "../../store/hooks";
import PoolCard from "../PoolCard/PoolCard";
import PoolListStyled from "./PoolsListStyled";

const PoolsList = (): React.ReactElement => {
  const pools = useAppSelector((state) => {
    return state.poolsState.pools;
  });

  return (
    <PoolListStyled>
      {pools.map((pool) => (
        <li key={pool._id}>
          <PoolCard pool={pool} />
        </li>
      ))}
    </PoolListStyled>
  );
};

export default PoolsList;
