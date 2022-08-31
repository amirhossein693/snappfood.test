import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import simpleSerializer from "../utils/simpleSerializer";

export interface VendorsState {
  list: Object;
  keys: Array<[]>;
  loading: Boolean;
  fetched: Boolean;
  error: any;
  page: string;
}

const initialState: VendorsState = {
  list: {},
  keys: [],
  loading: false,
  fetched: false,
  error: null,
  page: "0",
};

export const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    getVendors(state, action) {
      state.loading = true;
      state.fetched = false;
      state.page = action?.payload?.page ?? 0;
    },
    getVendorsFailure(state, action) {
      state.loading = false;
      state.fetched = true;
      state.error = action?.payload;
    },
    getVendorsSuccess(state, action) {
      const { keys, list } = simpleSerializer(action?.payload?.finalResult);
      state.loading = false;
      state.fetched = true;
      state.keys = Array.from(new Set([...state.keys, ...keys]));
      state.list = {
        ...state.list,
        ...(list ?? []),
      };
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
