import {
  ADD_ROW,
  ADD_COLUMN,
  UPDATE_ROW,
  UPDATE_COLUMN,
  DELETE_ROW,
  DELETE_COLUMN,
  RESET_TABLE,
} from './constants';

export const addRow = () => ({
  type: ADD_ROW,
});

export const updateRow = (rowId, field, value) => ({
  type: UPDATE_ROW,
  payload: {
    rowId,
    field,
    value,
  },
});

export const deleteRow = payload => ({
  type: DELETE_ROW,
  payload,
});

export const addColumn = () => ({
  type: ADD_COLUMN,
});

export const updateColumn = (columnId, value) => ({
  type: UPDATE_COLUMN,
  payload: {
    columnId,
    value,
  },
});

export const deleteColumn = payload => ({
  type: DELETE_COLUMN,
  payload,
});

export const resetTable = () => ({
  type: RESET_TABLE,
});
