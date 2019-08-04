import uuid from 'uuid/v4';
import update from 'immutability-helper';

import { INITIAL_ROWS } from './constants';

export function getInitialRowsState(rowsCount = INITIAL_ROWS) {
  let i;
  let state = {};

  for (i = 0; i < rowsCount; i++) {
    const id = uuid();
    state[id] = {};
  }

  return state;
}

export function addItem(collection, value) {
  const id = uuid();

  return update(collection, {
    $merge: {
      [id]: value,
    },
  });
}

export function deleteItem(collection, id) {
  return update(collection, {
    $unset: [id],
  });
}

export function updateColumnField(columns, columnId, value) {
  return update(columns, {
    [columnId]: {
      $set: value,
    },
  });
}

export function updateRowField(rows, rowId, field, value) {
  return update(rows, {
    [rowId]: {
      [field]: {
        $set: value,
      },
    },
  });
}
