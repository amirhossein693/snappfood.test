import {Action, AnyAction, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import { AppState } from './store';
import {
  VENDORS_GET_LIST,
  VENDORS_GET_LIST_SUCCESS,
  VENDORS_GET_LIST_FAILURE,
} from "./types";

export const getVendors: ThunkAction<void, AppState, unknown, AnyAction> = () => {
  return (dispatch: Dispatch): Action => {
    return dispatch({
      type: VENDORS_GET_LIST
    });
  };
};
