import React, { useState } from "react";
import EmployeeListItem from "./Employee";
import data from "../data.js";

function EmployeeList() {
  const [employee, setEmployee] = useState(data);
  return (
    <div className="employee-list">
      {employee.map((person) => {
        const { image, name, title } = person;
        console.log(person);
        return <EmployeeListItem name={name} title={title} image={image} />;
      })}
    </div>
  );
}

export default EmployeeList;
