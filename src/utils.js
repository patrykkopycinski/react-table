import uuid from 'uuid/v4';

const INITIAL_ROWS_COUNT = 5;

export const getInitialRowsState = (rowsCount = INITIAL_ROWS_COUNT) => {
  let i;
  let state = {};

  for (i = 0; i < rowsCount; i++) {
    const id = uuid();
    state[id] = {};
  }

  return state;
};
