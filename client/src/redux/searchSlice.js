import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    destination: undefined,
    date: {},
    options: undefined,
  },
  reducers: {
    newSearch: (state, action) => {
      state.destination = action.payload.destination;
      state.date = action.payload.date;
      state.options = action.payload.options;
    },
  },
});

export const { newSearch } = searchSlice.actions;
export default searchSlice.reducer;
