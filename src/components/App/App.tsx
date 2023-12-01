import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
