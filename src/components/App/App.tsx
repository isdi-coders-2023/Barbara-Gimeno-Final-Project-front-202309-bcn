import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../NavBar/NavBar";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
      <Navigation />
    </>
  );
};

export default App;
