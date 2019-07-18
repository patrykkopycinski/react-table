import React, { Fragment, useState } from 'react';

import AppContainer from './components/layout/AppContainer';
import GlobalStyle from './components/layout/GlobalStyle';
import Table from './components/table/Table';
import { downloadCSV, exportCSV } from './components/csvutils';
import { INITIAL_COLUMNS } from './components/constants'; 
import AddRowSection from './components/layout/AddRowSection';
import ExportCSVButton from './components/buttons/ExportCSVButton';
import CreateTableButton from './components/buttons/CreateTableButton';

import { 
  getInitialRowsState,
  addItem,
  deleteItem,
  updateColumnField, 
  updateRowField,
} from './components/utils';
import AddButton from './components/buttons/AddButton';


function App() {
  const initialRows = getInitialRowsState();

  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [rows, setRows] = useState(initialRows);

  const handelCreateTable = () => {
    setColumns(INITIAL_COLUMNS);
    setRows(initialRows);
  }

  const handleAddRow = () => {
      const updatedRows = addItem(rows, {})

      return setRows(updatedRows);
  }

  const handleAddColumn = () => {
      const updatedColumns = addItem(columns, '')

      return setColumns(updatedColumns);
  }

  const handleUpdateColumnField = (columnId) => (value) => {
      const updatedColumns = updateColumnField(columns, columnId, value);

      return setColumns(updatedColumns);
  };

  const handleUpdateRowField = (rowId, field) => (value) => {
      const updatedRows = updateRowField(rows, rowId, field, value);

      return setRows(updatedRows);
  }

  const handleDeleteRow = (rowId) => {
      const newRows = deleteItem(rows, rowId)

      return setRows(newRows);
  }

  const handleDeleteColumn = (columnId) => {
      const newColumns = deleteItem(columns, columnId);

      return setColumns(newColumns);
  }
  
  const handleExportCSV = () => {
    const csvContent = exportCSV(columns, rows);

    downloadCSV(csvContent);
  }

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
              rows={rows}
              columns={columns}
              onUpdateRowField={handleUpdateRowField}
              onUpdateColumnField={handleUpdateColumnField}
              onDeleteRow={handleDeleteRow}
              onDeleteColumn={handleDeleteColumn}
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
