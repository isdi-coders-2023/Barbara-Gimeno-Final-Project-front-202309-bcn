import { PoolDataStructure } from "../../store/features/pools/types";
import PoolCardStyled from "./PoolCardStyled";

interface PoolCardProps {
  pool: PoolDataStructure;
}

const PoolCard = ({
  pool: { title, measuresLong, measuresHigh, measuresWide, since, image },
}: PoolCardProps): React.ReactElement => {
  return (
    <PoolCardStyled>
      <h3 className="card__title">{title}</h3>
      <img
        className="card__image"
        src={image}
        alt={title}
        width="240"
        height="203"
      />
      <div>
        <span
          className="card__measures"
          title={`${measuresLong} x ${measuresHigh} x ${measuresWide} m`}
        >
          {measuresLong} x {measuresHigh} x {measuresWide} m
        </span>
        <span className="card__since">{since}</span>
      </div>
    </PoolCardStyled>
  );
};

export default PoolCard;
