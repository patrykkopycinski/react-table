import React, { useCallback } from 'react';
import styled from 'styled-components';

import TableColumn from './TableColumn';
import TableCellInput from './TableCellInput';
import DeleteButton from '../buttons/DeleteButton';

const TablerRowWrapper = styled.tr`
  font-size: 14px;
`;

const TableRow = ({ columns, data, id, onInputChange, onDeleteClick }) => {
  const handleDelete = useCallback(() => onDeleteClick(id), [
    onDeleteClick,
    id,
  ]);

  return (
    <TablerRowWrapper>
      {columns.map(column => (
        <TableColumn key={column}>
          <TableCellInput
            initialValue={data[column]}
            onChange={newValue => onInputChange(id, column, newValue)}
          />
        </TableColumn>
      ))}
      <TableColumn key="delete">
        <DeleteButton onClick={handleDelete} />
      </TableColumn>
    </TablerRowWrapper>
  );
};

export default TableRow;
