import { Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";
import Navigation from "../NavBar/NavBar";
import PoolPage from "../../pages/PoolPage/PoolPage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import CreatePoolPage from "../../pages/CreatePoolPage/CreatePoolPage";
import ModifyPoolPage from "../../pages/ModifyPoolPage/ModifyPoolPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);
  return (
    <>
      {uiState.isLoading && <Loading />}
      <ToastContainer />
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<PoolPage />} />
        <Route path="/pools-create" element={<CreatePoolPage />} />
        <Route path="/modify-pool/:_id" element={<ModifyPoolPage />} />
      </Routes>
    </>
  );
};

export default App;
