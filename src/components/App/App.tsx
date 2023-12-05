import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../NavBar/NavBar";
import PoolPage from "../../pages/PoolPage/PoolPage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);
  return (
    <>
      {uiState.isLoading && <Loading />}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<PoolPage />} />
      </Routes>

      <Navigation />
    </>
  );
};

export default App;
