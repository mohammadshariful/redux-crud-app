import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../features/Books/BookSlice";
const store = configureStore({
  reducer: {
    booksReducer: BookSlice,
  },
});
export default store;
