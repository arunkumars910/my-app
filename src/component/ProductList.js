import React from 'react'
import EmployeeDetail from './EmployeeDetail'


//Destructuring props. It will improve the readability of the code. This is one of the ES6 feature
function ProductList(props) {

    const empList=[

        //employee 0
        {
            id: 1,
            employeeName: "Sam",
            age: 40,
            skill: "React"
        },

        //employee1
        {
            id: 2,
            employeeName: "Rob",
            age: 28,
            skill: "Java"
        },

        //employee 2
        {
            id: 3,
            employeeName: "Jhon",
            age: 35,
            skill: "Angular"
        }
    ]

   const productList=['Fridge', 'WashingMachine','Tiles with250MM','Table','Furniture']
   const {id,productName,price,quantity} = props

   //const productJsx=productList.map(prodName => <h1>{prodName}</h1>)

   const employeeList = empList.map(employee =>(
       <EmployeeDetail key={employee.id} empdetail={employee}/>
   ))

   //0 -> prodName = Fridge
   //1 -> prodName = WashingMachine
   //2 -> prodName = Tiles
   //3 -> prodName =Table
   //4 -> prodName = Furniture
    return (
        <div>
            <h1>Product Details</h1>
            <h1>{id} {productName} {quantity} {price}</h1>
            {employeeList}
        </div>
    )
}

export default ProductList
