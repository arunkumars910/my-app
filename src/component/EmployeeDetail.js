import React from 'react'

function EmployeeDetail({empdetail}) {
    console.log("Employee Detail ", empdetail)
    return (
        <div>
            <h1>Child component</h1>
            <h1>{empdetail.id} {empdetail.employeeName}  {empdetail.age}  {empdetail.skill}</h1>
        </div>
    )
}

export default EmployeeDetail
