import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTeachers: [],
  teachersLoad: [],
  favorites: [],
  loading: false,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setAllTeachers: (s, a) => {
      s.loading = true;
      s.allTeachers = a.payload;
      s.teachersLoad = a.payload.slice(0, 4);
      s.loading = false;
    },
    loadMore: (s) => {
      const currentLenght = s.teachersLoad.length;
      const more = s.allTeachers.slice(currentLenght, currentLenght + 4);
      s.teachersLoad = [...s.teachersLoad, ...more];
    },
    addFavorite: (s, a) => {
      if (!s.favorites.includes(a.payload)) {
        s.favorites.push(a.payload);
      }
    },
    removeFavorite: (s, a) => {
      s.favorites = s.favorites.filter((id) => id !== a.payload);
    },
    setFavorites: (s, a) => {
      s.favorites = a.payload;
    },
  },
});

export const {
  setAllTeachers,
  addFavorite,
  removeFavorite,
  setFavorites,
  loadMore,
} = teachersSlice.actions;

export default teachersSlice.reducer;
