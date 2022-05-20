import React,{Component }from 'react';
import './App.css';
import Bar from './components/Bar.js';

class App extends Component{
  constructor() {
    super();
    this.state = {
      array: [],
      arraySteps: [],
      colorKey: [],
      colorSteps: [],
      currentSteps: 0,
      count: 5,
      delay: 100,
      algorithm: '',
      timeouts: [],
     };
    
  }
  

   componentDidMount()
   {
     this.generateRandomArray();
     console.log("here")
   }

   generateRandomNumber = (min,max) =>{
     return Math.floor(Math.random() * (max-min) + min);
   }

   generateRandomArray = () => {
     const count = this.state.count;
     const temp = [];

     for(let i=0;i<count; i++)
     {
       temp.push(this.generateRandomNumber(50,200))
     }

     this.setState({
       array : temp,
       arraySteps: [temp],
     },()=>{console.log("here")});
   };

  render(){
    let bars = this.state.array.map((value,index) => {
      return (
      <Bar key={index} 
        index = {index} 
        length = {value} 
        color = {0} />);
});

    return (
      <div className='app'>
      {/* {bars} */}
      
      {this.state.array.map((value,index) => {
     return(<Bar key={index} 
      index = {index} 
      length = {value} 
      color = {0} />);
})}
      </div>
    ); 
     
    
  }
}
export default App;


