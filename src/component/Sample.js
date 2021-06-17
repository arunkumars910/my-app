import React from "react";
import EmployeeDetail from "./EmployeeDetail";

function Sample() {
  const empList = [
    {
      id: 1,
      employeeName: "Sam",
      age: 40,
      skill: "React",
    },
    {
      id: 2,
      employeeName: "Rob",
      age: 28,
      skill: "Java",
    },
    {
      id: 3,
      employeeName: "Jhon",
      age: 35,
      skill: "Angular",
    },
  ];

  var employee = "";
  const employeeList = empList.map((employee) => (
    <EmployeeDetail key={employee.id} empdetail={employee} />
  ));

  return <div>
      {employeeList}
  </div>;
}

export default Sample;
