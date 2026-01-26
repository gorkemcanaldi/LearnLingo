import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Teachers from "./components/Teachers/Teachers";
import NoPage from "./components/NoPage/NoPage";
import Favorites from "./components/Favorites/Favorites";
import Headers from "./components/Headers/Headers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listenToAuthChanges } from "./firebase/auth";
import {
  clearFavorites,
  loadFavoritesFromStorage,
  setFavorites,
} from "./redux/teachersSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = listenToAuthChanges((currentUser) => {
      if (currentUser) {
        const userId = currentUser.uid;
        const favs = loadFavoritesFromStorage(userId);
        dispatch(setFavorites({ userId, favorites: favs }));
      } else {
        dispatch(clearFavorites());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <div>
        <Headers />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Teachers />} path="/teachers" />
          <Route element={<Favorites />} path="/favorites" />
          <Route element={<NoPage />} path="/*" />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default App;
