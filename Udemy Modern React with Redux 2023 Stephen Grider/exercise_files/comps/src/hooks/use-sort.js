import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = label => {
    //RESET SORT CYCLE - WHEN IF SWITCHED TO ANOTHER LABEL
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return; //do not proceed w/ the below checks anymore
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop - NEVER MODIFY PROPS IN REACT APP
  // Find the correct sortValue function and use it for sorting

  let sortedData = data; // IMPORTANT! Make a copy of the 'data' prop - NEVER MODIFY PROPS IN REACT APP - because @ null state we want to show the unordered data. If we had modified data, we would never be able to show unordered version.

  if (sortOrder && sortBy) {
    const { sortValue } = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
}

export default useSort;
