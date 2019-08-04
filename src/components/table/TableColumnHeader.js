import React, { useCallback } from 'react';
import styled from 'styled-components';
import TableCellInput from './TableCellInput';
import DeleteButton from '../buttons/DeleteButton';

const StyledColumnHeader = styled.th`
  padding: 8px;
  background-color: #fde9d9;
  font-size: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #f79646 #ccc;
`;

const StyledContent = styled.div`
  display: flex;
`;

const TableColumnHeader = ({
  columnId,
  columnName,
  onDeleteColumn,
  onNameChange,
}) => {
  const handleNameChange = useCallback(value => onNameChange(columnId, value), [
    onNameChange,
    columnId,
  ]);

  const handleDelete = useCallback(() => onDeleteColumn(columnId), [
    onDeleteColumn,
    columnId,
  ]);

  return (
    <StyledColumnHeader>
      <StyledContent>
        <TableCellInput initialValue={columnName} onChange={handleNameChange} />{' '}
        <DeleteButton onClick={handleDelete} />
      </StyledContent>
    </StyledColumnHeader>
  );
};

export default TableColumnHeader;
