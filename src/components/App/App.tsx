import { Routes, Route, Navigate } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};

export default App;
