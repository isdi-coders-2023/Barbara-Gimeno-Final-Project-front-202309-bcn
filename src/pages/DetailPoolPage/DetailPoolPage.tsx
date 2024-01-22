import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import usePoolsApi from "../../hooks/usePoolsApi";
import { useEffect } from "react";
import { loadSelectedPoolActionCreator } from "../../store/features/pools/poolsSlice";
import { hideLoadingActionCreator } from "../../store/features/ui/uiSlice";
import PoolCardStyled from "../../components/PoolCard/PoolCardStyled";

const DetailPoolPage = (): React.ReactElement => {
  const { _id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loadSelectedPool } = usePoolsApi();
  const {
    title,
    since,
    image,
    measuresHigh,
    measuresLong,
    measuresWide,
    material,
    depuration,
  } = useAppSelector((state) => state.poolsState.selectedPool);

  useEffect(() => {
    (async () => {
      const selectedPool = await loadSelectedPool(_id as string);
      if (selectedPool) {
        navigate("/");

        return;
      }

      dispatch(loadSelectedPoolActionCreator(selectedPool!));

      dispatch(hideLoadingActionCreator());
    })();
  }, [dispatch, loadSelectedPool, _id, navigate]);

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
        <span className="card__since" title={`${depuration}`}>
          Depuration {depuration}
        </span>
        <span className="card__since" title={`${material}`}>
          Material {material}
        </span>
        <div className="button__text"></div>
      </div>
    </PoolCardStyled>
  );
};

export default DetailPoolPage;
