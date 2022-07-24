import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialBooks = [
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
];
const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { showBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;
