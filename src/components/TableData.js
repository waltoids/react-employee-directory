import React from 'react';
import TableHeader from './TableHeader';

function TableData(props) {
  const { getDirection, requestSort, data } = props;
  return (
    <div className="table-responsive">
      <table className="table table-borderless">
        <thead>
          <tr>
            <TableHeader>Employee</TableHeader>
            <TableHeader direction={getDirection('id')} onClick={() => requestSort('id')}>#</TableHeader>
            <TableHeader direction={getDirection('first_name')} onClick={() => requestSort('first_name')}>First</TableHeader>
            <TableHeader direction={getDirection('last_name')} onClick={() => requestSort('last_name')}>Last</TableHeader>
            <TableHeader direction={getDirection('date_of_birth')} onClick={() => requestSort('DOB')}>Date of Birth</TableHeader>
          </tr>
        </thead>
        <tbody>
          { data.map((employee) => (
            <tr key={employee.id}>
              <td><img className="img-thumbnail" src={employee.picture} alt={`${employee.first_name} ${employee.last_name}`} /></td>
              <td>{ employee.id }</td>
              <td>{ employee.first_name }</td>
              <td>{ employee.last_name }</td>
              <td >{new Date(employee.DOB).toDateString()}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default TableData;