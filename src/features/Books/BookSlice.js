import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "Love Bangladesh",
      author: "Mohammad Shariful",
    },
    {
      id: uuidv4(),
      title: "Javascript",
      author: "Rifan Ahmed ",
    },
    {
      id: uuidv4(),
      title: "ReactJs",
      author: "Jorder Walk",
    },
  ],
};
const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      const addBook = action.payload;
      state.books = [...state.books, addBook];
    },
    deleteBook: (state, action) => {
      const _id = action.payload;
      state.books = state.books.filter((book) => book.id !== _id);
    },
  },
});
export const { showBooks, addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
