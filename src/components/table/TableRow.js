import React from 'react';
import styled from 'styled-components';

import TableColumn from './TableColumn';
import TableCellInput from './TableCellInput';
import DeleteButton from '../buttons/DeleteButton';

const TablerRowWrapper = styled.tr`
    font-size: 14px;
`;

const TableRow = ({ columns, data, id, onInputChange, onDeleteClick }) => (
    <TablerRowWrapper>
        {columns.map((column) => (
            <TableColumn key={column}>
                <TableCellInput
                    initialValue={data[column]}
                    onChange={onInputChange(id, column)}
                />
            </TableColumn>
        ))}
        <TableColumn key="delete">
            <DeleteButton onClick={onDeleteClick} />
        </TableColumn>
    </TablerRowWrapper>
);

export default TableRow;
