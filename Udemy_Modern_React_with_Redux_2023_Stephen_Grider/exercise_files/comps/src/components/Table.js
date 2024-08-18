import { Fragment } from 'react';

// function Table({ data, config, keyFn }) {
function Table({ data, config }) {
  const renderedHeaders = config.map(column => {
    //CHECK TO DISPLAY CUSTOM HEADER OR NOT
    if (column.header) {
      // return column.header();
      // return <>{column.header()}</>; //Fragmemt usage with no key
      return <Fragment key={column.label}>{column.header()}</Fragment>; //VERY IMPORTANT! We would need a key to get rid of the React error message since we are displaying this DOM element in lieu of the standard code below with the key.
    }
    return <th key={column.label}>{column.label}</th>; //regular header
  });

  const renderedRows = data.map(rowData => {
    //RENDER ROWS
    const renderedCells = config.map(column => {
      //RENDER CELLS PER ROW
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      // <tr className="border-b" key={keyFn(rowData)}>
      <tr className="border-b" key={config[0].render(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
