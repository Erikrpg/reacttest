import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "ვეფხისტყაოსანი",
    author: "შოთა რუსთაველი",
  },
  {
    id: 2,
    title: "დათა თუთაშხია",
    author: "ჭაბუა ამირეჯიბი",
  },
  {
    id: 3,
    title: "მე, ბებია, ილიკო და ილარიონი",
    author: "ნოდარ დუმბაძე",
  },
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },

    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },

    clearBooks: () => {
      return [];
    },
  },
});

export const { addBook, removeBook, clearBooks } = booksSlice.actions;

export default booksSlice.reducer;
