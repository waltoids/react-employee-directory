import React, { useState, useEffect } from 'react';
import DataTable from './components/TableData'
import SearchObject from './utils/SearchObject'
import DataContext from './utils/DataContext';
import employees from './utils/employees.json'

export default function App() {
  const [data, setData] = useState([])

   const [query, setQuery] = useState('')
   const onChangeSearch = (e) => {
     setQuery(event.target.value)
   }

  useEffect(() => {
    setData(SearchObject(employees, query))
  },[query]);

search
onclick(button) sort the table by name ascending or decending 

  return(
    <DataContext.Provider
      value={{data}}>
      <div>
        <div>Filter</div>
        <div> <DataTable data={data.users}/> </div>
      </div>
    </DataContext.Provider>
  );
}

