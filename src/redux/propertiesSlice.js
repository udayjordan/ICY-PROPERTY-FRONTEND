import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verifiedProperties: [],
  unverifiedProperties: [],
  allProperties: [], // Store all properties together
  mode: "dark", // Default theme mode
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setAllProperties: (state, action) => {
      state.allProperties = action.payload;
    },
    setMode: (state, action) => {
      document.documentElement.className = action.payload;
      state.mode = action.payload;
    },
  },
});

export const { setAllProperties, setMode } = propertiesSlice.actions;
export default propertiesSlice.reducer;
