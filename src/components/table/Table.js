import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';
import TableColumnHeader from './TableColumnHeader';
import TableWrapper from './TableWrapper';
import TableRow from './TableRow';
import AddButton from '../buttons/AddButton';

const Table = ({
  dispatch,
  rows,
  columns,
  onUpdateRowField,
  onUpdateColumnField,
  onDeleteRow,
  onAddColumn,
  onDeleteColumn,
}) => {
  const columnEntries = Object.entries(columns);
  const columnKeys = columnEntries.map(([key, value]) => key);
  const rowEntries = Object.entries(rows);

  const handleColumnNameChange = (columnId, newValue) =>
    dispatch(onUpdateColumnField(columnId, newValue));

  const handleRowFieldChange = (rowId, fieldName, newValue) =>
    dispatch(onUpdateRowField(rowId, fieldName, newValue));

  const handleColumnDelete = useCallback(
    columnId => dispatch(onDeleteColumn(columnId)),
    [dispatch, onDeleteColumn]
  );

  const handleRowDelete = useCallback(rowId => dispatch(onDeleteRow(rowId)), [
    dispatch,
    onDeleteRow,
  ]);

  return (
    <TableWrapper>
      <TableHeader>
        <tr>
          {columnEntries.map(([key, value]) => (
            <TableColumnHeader
              onDeleteColumn={handleColumnDelete}
              onNameChange={handleColumnNameChange}
              key={key}
              columnId={key}
              columnName={value}
            />
          ))}
          <td key="addColumn">
            <AddButton onClick={onAddColumn} />
          </td>
        </tr>
      </TableHeader>
      <tbody>
        {rowEntries.map(([key, value]) => (
          <TableRow
            key={key}
            columns={columnKeys}
            id={key}
            data={value}
            onInputChange={handleRowFieldChange}
            onDeleteClick={handleRowDelete}
          />
        ))}
      </tbody>
    </TableWrapper>
  );
};

Table.propTypes = {
  rows: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  onUpdateRowField: PropTypes.func.isRequired,
  onUpdateColumnField: PropTypes.func.isRequired,
  onAddColumn: PropTypes.func.isRequired,
  onDeleteRow: PropTypes.func.isRequired,
  onDeleteColumn: PropTypes.func.isRequired,
};

export default Table;
