import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const getEmployeeData = async () => {
    let response = await axios.get('https://randomuser.me/api/?results=10');
    console.log(response.data.results);
    setEmployeeData(response.data.results);
  }

  useEffect(() => {
    getEmployeeData();
  }, []);

  const renderEmployeeData = () => {
    return employeeData.map((employee, index) => {
      return <div key={index}>{employee.name.first}</div>
    })
  }

  return (
    <div className="container">
      {employeeData.length > 0 ? renderEmployeeData() : <div>No employee Data</div> }

    </div>
  )
}

export default App;