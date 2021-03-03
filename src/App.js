import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import formatTableData from "./tableData";
import "./App.css";

const columns = [
  {
    Header: "Picture",
    Cell: (row) => {
      console.log(row.cell.value);
      return (
        <div>
          <img height={50} src={row.cell.value} />
        </div>
      );
    },
    accessor: "picture",
    disableSortBy: true,
    disableGlobalFilter: true,
  },
  {
    Header: "First Name",
    accessor: "firstName", // accessor is the "key" in the data
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Cell Number",
    accessor: "cell",
  },
];

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const getEmployeeData = async () => {
    let response = await axios.get(
      "https://randomuser.me/api/?results=10&nat=us"
    );
    console.log(response.data.results);
    setEmployeeData(formatTableData(response.data.results));
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="title">Employee Directory</h1>
      <div className="table-wrapper">
        <Table columns={columns} data={employeeData} />
      </div>
    </div>
  );
};

export default App;
