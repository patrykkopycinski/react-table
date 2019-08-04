import FileSaver from 'file-saver';

export function getColumnsCSVContent(columns) {
  return columns.map(([key, value]) => value).join(',') + '\n';
}

export function getRowsWithExistingColumns(rows, columns) {
  return Object.values(rows).map(row => columns.map(([key]) => row[key]));
}

export function getRowsCSVContent(rows) {
  return rows
    .map(row => row.join(','))
    .reduce((acc, item) => acc + item + '\n', '');
}

export function downloadCSV(csvContent) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });

  FileSaver.saveAs(blob, 'data.txt');
}

export function exportCSV(columns, rows) {
  const columnEntries = Object.entries(columns);
  const rowsArray = getRowsWithExistingColumns(rows, columnEntries);

  const columnsCSVContent = getColumnsCSVContent(columnEntries);
  const rowsCCVContent = getRowsCSVContent(rowsArray);

  return columnsCSVContent + rowsCCVContent;
}
