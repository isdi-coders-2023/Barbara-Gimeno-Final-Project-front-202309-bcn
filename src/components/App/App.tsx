import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../NavBar/NavBar";
import PoolPage from "../../pages/PoolPage/PoolPage";

const App = (): React.ReactElement => {
  return (
    <>
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
