import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Teachers from "./components/Teachers/Teachers";
import NoPage from "./components/NoPage/NoPage";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Teachers />} path="/teachers" />
          <Route element={<Favorites />} path="/favorites" />
          <Route element={<NoPage />} path="/*" />
        </Routes>
      </div>
    </>
  );
}

export default App;
