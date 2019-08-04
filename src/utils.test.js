import {
  getInitialRowsState,
  // addItem,
  // deleteItem,
  // updateColumnField,
  // updateRowField,
} from './utils';
import { INITIAL_ROWS_COUNT } from './constants';

describe('getInitialRowsState', () => {
  it('should return default initialState', () => {
    const state = getInitialRowsState();

    expect(Object.keys(state).length).toEqual(INITIAL_ROWS_COUNT);
  });

  it('should return custom initialState', () => {
    const state = getInitialRowsState(10);

    expect(Object.keys(state).length).toEqual(10);
  });
});

// describe('addItem', () => {
//   it('should return proper object', () => {
//     const value = 'test';
//     const collection = {};
//     const newCollection = addItem(collection, value);

//     expect(Object.values(newCollection)).toContain(value);
//   });
// });

// describe('deleteItem', () => {
//   it('should return proper object', () => {
//     const id = '12';
//     const collection = {
//       [id]: 'test',
//     };
//     const newCollection = deleteItem(collection, id);

//     expect(newCollection[id]).toBeUndefined();
//   });
// });

// describe('updateColumnField', () => {
//   it('should return proper object', () => {
//     const id = '12';
//     const value = 'test';
//     const newValue = 'beta';
//     const collection = {
//       [id]: 'test',
//     };
//     const newCollection = updateColumnField(collection, id, newValue);

//     expect(newCollection[id]).toEqual(newValue);
//   });
// });

// describe('updateRowField', () => {
//   it('should return proper object', () => {
//     const id = '12';
//     const column = 'column';
//     const value = 'test';
//     const newValue = 'beta';
//     const collection = {
//       [id]: {
//         [column]: 'test',
//       },
//     };
//     const newCollection = updateRowField(collection, id, column, newValue);

//     expect(newCollection[id][column]).toEqual(newValue);
//   });
// });
