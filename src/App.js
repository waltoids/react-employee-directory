import React, { useState, useEffect } from 'react';
import TableData from './components/TableData'
import SearchObject from './utils/SearchObject';
import {data as employees} from './utils/employees.json';
import Main from './components/Main';
import Jumbotron from './components/Jumbotron'
import SearchBar from './components/SearchBar'

export default function App() {
  const [data, setData] = useState([])

  const [query, setQuery] = useState('')

  const onChangeSearch = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    setData(SearchObject(employees, query))
  },[query]);

  const [sortConfig, setSortConfig] = React.useState({ direction: 'descending', key: 'id' });

  const sortedItems = React.useMemo(() => {
    const sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setData(sortedItems);
  };

  const getDirection = (name) => {
    if (sortConfig) {
      return sortConfig.key === name ? sortConfig.direction : undefined;
    }
    return null;
  };

  return(
    <div className="App">
    <Jumbotron title="Employee Directory" />
      
      <Main>
        <div className="mb-4 d-flex justify-content-around">
          <SearchBar onChange={onChangeSearch} />
        </div>
        <TableData getDirection={getDirection} requestSort={requestSort} data={data} />
      </Main>
      
  </div>
  );
}

