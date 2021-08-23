import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        console.log("constructor()")
        super(props)
    
        this.state = {
             count: 0,
        }
    }
    componentDidMount(){ console.log("componentDidMount()")
   // setTimeout(() => {
       // this.setState({ count: this.state.count+10  });
        
   // }, 5000);
   //setInterval(() => {
      // this.setState({ count: this.state.count+10  });  
   //}, 1000);
// }   
// componentDidUpdate(){
    // console.log("componentDidUpdate()")
}
componentWillUnmount(){
    console.log("componentWillUnmount()")
}
        incriment=() => {
            this.setState({ count:this.state.count+1  });
            
        }
        decriment=() => {
            if(this.state.count>0) {this.setState({ count:this.state.count-1  });


            }
        }
    
    render() {
        console.log("render()")
        return (
            <div>
                <button onClick={this.incriment}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decriment}>-</button>
            </div>
        )
    }
}

export default Counter
