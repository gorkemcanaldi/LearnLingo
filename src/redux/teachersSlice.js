import { createSlice } from "@reduxjs/toolkit";

export const loadFavoritesFromStorage = (userId) => {
  try {
    const data = localStorage.getItem(`favorites_${userId}`);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

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
      s.allTeachers = a.payload;
      s.visibleCount = 4;
      s.loading = false;
    },
    setLoading: (s, a) => {
      s.loading = a.payload;
    },
    loadMore: (s) => {
      s.visibleCount += 4;
    },
    addFavorite: (s, a) => {
      if (!s.favorites.includes(a.payload.id)) {
        s.favorites.push(a.payload.id);
        localStorage.setItem(
          `favorites_${a.payload.userId}`,
          JSON.stringify(s.favorites),
        );
      }
    },
    removeFavorite: (s, a) => {
      s.favorites = s.favorites.filter((id) => id !== a.payload.id);
      localStorage.setItem(
        `favorites_${a.payload.userId}`,
        JSON.stringify(s.favorites),
      );
    },
    setFavorites: (s, a) => {
      s.favorites = a.payload.favorites;
      localStorage.setItem(
        `favorites_${a.payload.userId}`,
        JSON.stringify(s.favorites),
      );
    },
    clearFavorites: (s) => {
      s.favorites = [];
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
  setLoading,
  addFavorite,
  removeFavorite,
  setFavorites,
  clearFavorites,
  loadMore,
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
  clearFilters,
} = teachersSlice.actions;

export default teachersSlice.reducer;
