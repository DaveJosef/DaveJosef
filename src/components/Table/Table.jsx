import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
    border: solid 4px rgb(${props => props.theme.foreground});
    border-radius: 1rem;
    border-spacing: 0px;
    border-collapse: separate;
    overflow-x: scroll;
    display: flex;
    padding: 0;
    width: 100%;
    
    tr {
        border: solid 4px rgb(${props => props.theme.foreground});
    }

    td, th {
        padding: 1rem;
        text-align: start;
    }
    
`;

function HeaderRow({ entries }) {

    const columnsMap = (column, index) => {
        return (
            <th key={index+"-"+column}>{column}</th>
        );
    }

    return (
        <tr>{ entries.map(columnsMap) }</tr>
    );
}

function Row({ entries, rowKey }) {

    const columnsMap = (column, index) => {
        return (
            <td key={index+"-"+column}>{column}</td>
        );
    }

    return (
        <tr key={rowKey}>{ entries.map(columnsMap) }</tr>
    );
}

function Table({ columns, rows, caption, hasFooter }) {

    const rowsMap = (row, index) => {
        return (
            <Row key={index+"-"+row} entries={Object.values(row)} />
        );
    }

  return (
    <StyledTable>
        <table>
            <caption><h3>{caption}</h3></caption>
            <thead>
                <HeaderRow entries={columns} />
            </thead>
            <tbody>{rows.map(rowsMap)}</tbody>
            {
                hasFooter &&
                <tfoot>
                    <HeaderRow entries={columns} />
                </tfoot>
            }
        </table>
    </StyledTable>
  );
}

export default Table;