import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { netherlandsFlightURL } from "../contants";

const initialState = {
  flightData: [],
  isLoading: false,
  error: null,
};

export const getFlightData = createAsyncThunk(
  "flightData",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetch(netherlandsFlightURL, {
        headers: {
          Authorization: "Basic eWFzZW1pbmdueTpBc2RmLjEyMzQh",
        },
      });
      const json = await data.json();
      console.log(json);
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const mySlice = createSlice({
  name: "ordina-app",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFlightData.pending, (state) => {
      return { ...state, isLoading: true, error: null };
    });
    builder.addCase(getFlightData.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    });
    builder.addCase(getFlightData.fulfilled, (state, action) => {
      const flightObject = {
        ...action.payload,
        states: action.payload.states.map((state) => [
          state[0],
          state[2],
          state[11],
          state[13],
        ]),
      };
      return {
        ...state,
        isLoading: false,
        flightData: state.flightData.concat([flightObject]),
      };
    });
  },
});

// export const {} = mySlice.actions;
export default mySlice.reducer;
