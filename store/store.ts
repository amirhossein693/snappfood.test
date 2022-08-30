import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { vendorsSlice } from "./vendorsSlice";
import { Context, createWrapper } from "next-redux-wrapper";

const makeStore = (context: Context) => {
  return configureStore({
    reducer: {
      [vendorsSlice.name]: vendorsSlice.reducer,
    },
    devTools: true,
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, {debug: true});