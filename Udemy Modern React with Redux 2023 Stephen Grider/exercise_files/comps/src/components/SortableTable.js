import { useState } from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = label => {
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

  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      //selectively add special header labels in lieu of regular column labels for ones that are allowed to bear sortValue
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  //CHECK AGAINST THE CLICKED SORTBY ITEM MATCHES LABEL
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  //CHECK AGAINST SORT CONDITIONS TO SUPPLY DIFFERENT ICON CONFIGURATIONS
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
