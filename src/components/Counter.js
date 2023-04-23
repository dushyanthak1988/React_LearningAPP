import { Component } from "react";

class Counter extends  Component{

    constructor(){
        super();
         this.state = {
         Counter :0, 
        };

    }
    increment (){
        //  this.state.Counter = 1  this not working 

        this.setState({ 
            Counter :  this.state.Counter +1 ,
            
        });
    
    }
    decrement (){
        //  this.state.Counter = 1  this not working 

        this.setState({ 
            Counter :  this.state.Counter -1 ,
            
        });
    
    }
    render() {
        return (
            <div>
                <h3>  count value is : { this.state.Counter }  </h3> 
                <button onClick={ () => this.increment()} >  increment Click </ button>
                <button onClick={ () => this.decrement()} >  decrement Click </ button>

            </div>
        )
        
        
    }
}

export default Counter;