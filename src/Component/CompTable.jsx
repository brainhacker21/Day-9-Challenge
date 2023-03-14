import React from 'react';

const CompTable = (props) => {
  const { data, handleEdit, handleDelete } = props;

  return (
    <div className="table-container">
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
			<th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

      </table>
    </div>
  );
};

export default CompTable;