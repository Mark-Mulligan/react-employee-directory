import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import formatTableData from "./tableData";
import "./App.css";

const columns = [
  {
    Header: "",
    Cell: (row) => {
      return (
        <div key={row.cell.value}>
          <img height={90} src={row.cell.value} />
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
    Header: "Phone Number",
    accessor: "cell",
  },
];

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const getEmployeeData = async () => {
    let response = await axios.get(
      "https://randomuser.me/api/?results=100&nat=us"
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
