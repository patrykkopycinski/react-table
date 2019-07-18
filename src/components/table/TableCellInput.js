import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDebouncedCallback } from 'use-debounce';

const StyledInput = styled.input`
    width: 100%;
    border: 0;
    padding: 10px;
    font-size: inherit;
    box-sizing: border-box;
`;

const TableCellInput = ({ initialValue, onChange }) => {
    const [value, setValue] = useState(initialValue);
    const [debouncedCallback] = useDebouncedCallback(
        (value) => {
          setValue(value);
          onChange(value);
        },
        300,
    );
    const handleOnChange = (event) => debouncedCallback(event.target.value);
    const handleOnBlur = (event) => onChange(event.target.value);

    return (
        <StyledInput
            defaultValue={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
        />
    );
};

TableCellInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

TableCellInput.defaultProps = {
    initialValue: '',
};

export default TableCellInput;