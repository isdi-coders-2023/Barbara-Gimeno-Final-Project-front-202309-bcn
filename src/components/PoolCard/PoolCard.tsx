import usePoolsApi from "../../hooks/usePoolsApi";
import { deletePoolActionCreator } from "../../store/features/pools/poolsSlice";
import { PoolStructure } from "../../store/features/pools/types";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";
import PoolCardStyled from "./PoolCardStyled";

interface PoolCardProps {
  pool: PoolStructure;
}

const PoolCard = ({
  pool: { title, measuresLong, measuresHigh, measuresWide, since, image, _id },
}: PoolCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deletePool } = usePoolsApi();
  const deletedPool = () => {
    deletePool(_id);
    dispatch(deletePoolActionCreator(_id));
  };

  return (
    <PoolCardStyled>
      <img
        className="card__image"
        src={image}
        alt={title}
        width="240"
        height="203"
      />
      <div className="card__container">
        <h3 className="card__title">{title}</h3>
        <span
          className="card__measures"
          title={`${measuresLong} x ${measuresHigh} x ${measuresWide} m`}
        >
          Measures {measuresLong} x {measuresHigh} x {measuresWide} m
        </span>
        <span className="card__since" title={`${since}`}>
          Since {since}
        </span>
        <div className="button__delete">
          <Button
            type="button"
            actionOnClick={deletedPool}
            className="button__delete"
            text="Delete"
          />
        </div>
      </div>
    </PoolCardStyled>
  );
};

export default PoolCard;
