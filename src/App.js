import React, { Fragment, useCallback, useReducer } from 'react';

import AppContainer from './components/layout/AppContainer';
import GlobalStyle from './components/layout/GlobalStyle';
import Table from './components/table/Table';
import { downloadCSV, exportCSV } from './components/csvutils';
import AddRowSection from './components/layout/AddRowSection';
import ExportCSVButton from './components/buttons/ExportCSVButton';
import CreateTableButton from './components/buttons/CreateTableButton';

import reducer, { initialState } from './reducer';
import {
  addRow,
  updateRow,
  deleteRow,
  addColumn,
  updateColumn,
  deleteColumn,
  resetTable,
} from './actions';

import AddButton from './components/buttons/AddButton';

function App() {
  const [{ rows, columns }, dispatch] = useReducer(reducer, initialState);

  const handelCreateTable = useCallback(() => {
    dispatch(resetTable());
  }, []);

  const handleAddRow = useCallback(() => {
    dispatch(addRow());
  }, []);

  const handleAddColumn = useCallback(() => {
    dispatch(addColumn());
  }, []);

  const handleExportCSV = useCallback(() => {
    const csvContent = exportCSV(columns, rows);

    downloadCSV(csvContent);
  }, [columns, rows]);

  const hasColumns = Object.keys(columns).length;

  return (
    <AppContainer>
      <GlobalStyle />
      <div>
        {!hasColumns && (
          <div>
            <CreateTableButton onClick={handelCreateTable} />
          </div>
        )}
        {hasColumns && (
          <Fragment>
            <Table
              dispatch={dispatch}
              rows={rows}
              columns={columns}
              onUpdateRowField={updateRow}
              onUpdateColumnField={updateColumn}
              onDeleteRow={deleteRow}
              onDeleteColumn={deleteColumn}
              onAddColumn={handleAddColumn}
            />
            <AddRowSection>
              <AddButton onClick={handleAddRow} />
            </AddRowSection>
            <div>
              <ExportCSVButton onClick={handleExportCSV} />
            </div>
          </Fragment>
        )}
      </div>
    </AppContainer>
  );
}

export default App;
