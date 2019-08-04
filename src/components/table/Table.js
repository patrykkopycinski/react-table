import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';
import TableColumnHeader from './TableColumnHeader';
import TableColumnHeaderContent from './TableColumnHeaderContent';
import TableWrapper from './TableWrapper';
import TableCellInput from './TableCellInput';
import TableRow from './TableRow';
import DeleteButton from '../buttons/DeleteButton';
import AddButton from '../buttons/AddButton';

const Table = ({
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

  return (
    <TableWrapper>
      <TableHeader>
        <tr>
          {columnEntries.map(([key, value]) => (
            <TableColumnHeader key={key}>
              <TableColumnHeaderContent>
                <TableCellInput
                  initialValue={value}
                  onChange={onUpdateColumnField(key)}
                />{' '}
                <DeleteButton onClick={onDeleteColumn.bind(this, key)} />
              </TableColumnHeaderContent>
            </TableColumnHeader>
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
            onInputChange={onUpdateRowField}
            onDeleteClick={onDeleteRow.bind(this, key)}
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
