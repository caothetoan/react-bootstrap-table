import React from 'react';
import './react-bootstrap-table.min.css';

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

const cellEditProp = {
  mode: 'click'
};
const ClickToSelectTable = (props) => (
	<BootstrapTable data={ props.data } cellEdit={ cellEditProp }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
  
);

export default ClickToSelectTable;