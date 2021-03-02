import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import formatTableData from "./tableData";

const data = [
  {
    firstName: "Hello",
    lastName: "Earth",
  },
  {
    firstName: "react-table",
    lastName: "rocks",
  },
  {
    firstName: "whatever",
    lastName: "you want",
  },
];

const columns = [
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
    accessor: "email"
  },
  {
    Header: "Cell Number",
    accessor: "cell"
  }
];

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const getEmployeeData = async () => {
    let response = await axios.get("https://randomuser.me/api/?results=10");
    setEmployeeData(formatTableData(response.data.results));
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div>
      <Table columns={columns} data={employeeData} />
    </div>
  );
};

export default App;
