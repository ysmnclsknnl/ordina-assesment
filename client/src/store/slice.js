import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  isSuccess: false,
  message: "",
};

const mySlice = createSlice({
  name: "ordina-app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = mySlice.actions;
export default mySlice.reducer;
