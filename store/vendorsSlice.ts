import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface VendorsState {
  list: Array<[]>;
  loading: Boolean;
  fetched: Boolean;
  error: any;
}

const initialState: VendorsState = {
  list: [],
  loading: false,
  fetched: false,
  error: null,
};

export const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    getVendors(state, action) {
      state.loading = true;
      state.fetched = false;
    },
    getVendorsFailure(state, action) {
      state.loading = false;
      state.fetched = true;
      state.error = action?.payload;
    },
    getVendorsSuccess(state, action) {
      state.loading = false;
      state.fetched = true;
      state.list = action?.payload?.finalResult;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { getVendors, getVendorsFailure, getVendorsSuccess } =
  vendorsSlice.actions;

export const selectVendorsState = (state: AppState) => state.vendors;

export default vendorsSlice.reducer;
