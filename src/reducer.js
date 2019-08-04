import uuid from 'uuid/v4';
import update from 'immutability-helper';

import {
  ADD_ROW,
  ADD_COLUMN,
  UPDATE_ROW,
  UPDATE_COLUMN,
  DELETE_ROW,
  DELETE_COLUMN,
  RESET_TABLE,
} from './constants';
import { getInitialRowsState } from './utils';

import { INITIAL_COLUMNS } from './constants';

export const initialState = {
  rows: getInitialRowsState(),
  columns: INITIAL_COLUMNS,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        rows: update(state.rows, {
          $merge: {
            [uuid()]: {},
          },
        }),
      };
    case UPDATE_ROW:
      return {
        ...state,
        rows: update(state.rows, {
          [action.payload.rowId]: {
            [action.payload.field]: {
              $set: action.payload.value,
            },
          },
        }),
      };
    case DELETE_ROW:
      return {
        ...state,
        rows: update(state.rows, {
          $unset: [action.payload],
        }),
      };
    case ADD_COLUMN:
      return {
        ...state,
        columns: update(state.columns, {
          $merge: {
            [uuid()]: '',
          },
        }),
      };
    case UPDATE_COLUMN:
      return {
        ...state,
        columns: update(state.columns, {
          [action.payload.columnId]: {
            $set: action.payload.value,
          },
        }),
      };
    case DELETE_COLUMN:
      return {
        ...state,
        columns: update(state.columns, {
          $unset: [action.payload],
        }),
      };
    case RESET_TABLE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
