// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    {
      name: 'Orange',
      color: 'bg-orange-500',
      score: 5,
    },
    {
      name: 'Apple',
      color: 'bg-red-500',
      score: 3,
    },
    {
      name: 'Banana',
      color: 'bg-yellow-500',
      score: 1,
    },
    {
      name: 'Lime',
      color: 'bg-green-500',
      score: 4,
    },
    {
      name: 'Cherry',
      color: 'bg-red-700',
      score: 1.5,
    },
  ];

  const config = [
    {
      label: 'Fruits', //designate a label for the table columns
      render: rowData => rowData.name, //designate how the cell will render
      sortValue: rowData => rowData.name, //designate whether there will be a sorting by name
    },
    {
      label: 'Color', //designate a label for the table columns
      render: rowData => <div className={`p-3 m-2 ${rowData.color}`}></div>, //designate how the cell will render
    },
    {
      label: 'Score', //designate a label for the table columns
      render: rowData => rowData.score, //designate how the cell will render
      sortValue: rowData => rowData.score, //designate whether there will be a sorting by score
    },
    {
      label: 'Squared Score', //designate a label for the table columns
      render: rowData => rowData.score ** 2, //designate how the cell will render
      sortValue: rowData => rowData.score ** 2, //designate whether there will be a sorting by score
    },
  ];

  // const keyFn = rowData => {
  //   return rowData.name;
  // }; //Alternate way of providing a key value for the fragment @ table.js

  return (
    <div>
      {/* <SortableTable data={data} config={config} keyFn={keyFn} /> */}
      <SortableTable data={data} config={config} />
    </div>
  );
}

export default TablePage;
