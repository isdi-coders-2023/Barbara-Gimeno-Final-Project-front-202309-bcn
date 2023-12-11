import { useNavigate } from "react-router-dom";
import PoolForm from "../../components/Form/Form";
import { addPoolActionCreator } from "../../store/features/pools/poolsSlice";
import { useAppDispatch } from "../../store/hooks";
import CreatePoolPageStyled from "./CreatePoolPageStyled";
import usePoolsApi from "../../hooks/usePoolsApi";
import { PoolDataStructure } from "../../store/features/pools/types";

const CreatePoolPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { addPool } = usePoolsApi();

  const formAction = async (pool: PoolDataStructure) => {
    const formPool = await addPool(pool);

    if (pool) {
      dispatch(addPoolActionCreator(formPool!));

      navigate("/home");
    }
  };

  return (
    <CreatePoolPageStyled>
      <h1 className="create">CREATE A NEW POOL INSPIRATION</h1>
      <PoolForm onSubmit={formAction} />
    </CreatePoolPageStyled>
  );
};

export default CreatePoolPage;
