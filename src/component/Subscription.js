import React, { Component } from 'react'

class Subscrption extends Component{
 
    constructor(){
        super();
        this.state={
            message: '',
            productStatus: '',
            customerName: '',
            customerId: ''
        }
    }

    subscribeToAccessProductInfo(){
        //we are going changing the current state
        this.setState({
            message: 'You have subscribed successfully',
            productStatus: 'active',
            customerName: 'Ravi',
            customerId: '001'
        })
    }


    
    render(){
        return(
            <div>
                <h1>Subscrption message : {this.state.message}</h1>
                <h1>Status : {this.state.productStatus}</h1>
                <h1>customerName : {this.state.customerName}</h1>
                <h1>customerId: {this.state.customerId}</h1>

                <button onClick={()=>this.subscribeToAccessProductInfo()}>subscribe</button>
               
            </div>
        )
    }
}

export default Subscrption;