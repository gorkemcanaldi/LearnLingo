import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTeachers: [],
  favorites: [],
  visibleCount: 4,
  loading: false,
  filters: {
    languages: "",
    levels: "",
    price: null,
  },
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setAllTeachers: (s, a) => {
      s.loading = true;
      s.allTeachers = a.payload;
      s.visibleCount = 4;
      s.loading = false;
    },
    loadMore: (s) => {
      s.visibleCount += 4;
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
    setLanguageFilter: (s, a) => {
      s.filters.languages = a.payload;
      s.visibleCount = 4;
    },
    setLevelFilter: (s, a) => {
      s.filters.levels = a.payload;
      s.visibleCount = 4;
    },
    setPriceFilter: (s, a) => {
      s.filters.price = a.payload === "" ? null : Number(a.payload);
      s.visibleCount = 4;
    },
    clearFilters: (s) => {
      s.filters = { languages: "", levels: "", price: null };
      s.visibleCount = 4;
    },
  },
});

export const {
  setAllTeachers,
  addFavorite,
  removeFavorite,
  setFavorites,
  loadMore,
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
  clearFilters,
} = teachersSlice.actions;

export default teachersSlice.reducer;
