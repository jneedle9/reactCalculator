import react, { useContext } from "react";
import React, {useState, Component, createContext} from "react"
import { Children } from "react/cjs/react.production.min";

export const SetNumContext = createContext()

class SetNumContextProvider extends Component {
  state = {
      number: 0,
      savedNum: 0,
      fullReset: false,
      currentOperation: '',
      consecOp: false,
      anotherNum: false
  }
  setNum = (event) => {
      const {name} = event.target
      this.setState({fullReset: false})
      
      //// Work here to fix the bug with =
      // 5 + 5 = 10 -> x -> 10 x -> 3, saved num (10) gets erased
      if (this.state.number === 0 && this.state.consecOp === false){
        this.setState({number: name, anotherNum: true});
      }
      else if (this.state.anotherNum && this.state.consecOp === false){
        this.setState({number: this.state.number + name})
      }
      else if (this.state.consecOp && this.state.anotherNum === false){
        this.setState({savedNum: this.state.number, number: name, anotherNum: true})
      }
      else if (this.state.anotherNum){
        this.setState({ number: this.state.number + name})
      }
     }

    resetC = () =>{
      this.setState({number: 0, fullReset: true, anotherNum: false})
      if (this.state.fullReset){
        this.setState({savedNum: 0, currentOperation: 0, consecOp: false})
      }  
    }
    toggleOperation = (event) =>{
      const {name} = event.target
      this.setState({anotherNum: false})
      if ( this.state.currentOperation === '' || this.state.currentOperation === 0){
        this.setState({savedNum: this.state.number, number: 0, currentOperation: name})}
      else if (this.state.currentOperation === "="){
        this.setState({savedNum: this.state.number, number: 0, currentOperation: name, consecOp: false})
      }                 
      else{
        return(  
          this.state.currentOperation === "÷" ?
            this.setState({number: parseInt(this.state.savedNum) / parseInt(this.state.number), currentOperation: name, savedNum: 0, consecOp: true}):
          this.state.currentOperation === "+" ?
            this.setState({number: parseInt(this.state.number) + parseInt(this.state.savedNum), currentOperation: name, savedNum: 0, consecOp: true}):
          this.state.currentOperation === "X" ?
            this.setState({number: parseInt(this.state.savedNum) * parseInt(this.state.number), currentOperation: name, savedNum: 0, consecOp: true}):                   
          this.state.currentOperation === "-" ?
            this.setState({number: parseInt(this.state.savedNum) - parseInt(this.state.number), currentOperation: name, savedNum: 0, consecOp: true}):
          null)
      }
        }
    // handleOperation = (event) =>{
    //   const {name} = event.target
    //   this.setState({number: this.state.savedNum, currentOperation: name})
    // } 
  render(){
    return(
        <SetNumContext.Provider value = {{...this.state, setNum: this.setNum, newNum: this.newNum, addition: this.addition, resetC: this.resetC, toggleOperation: this.toggleOperation, handleOperation: this.handleOperation}}>
            {this.props.children}
        </SetNumContext.Provider>
      );            
  } 
}



export default SetNumContextProvider
