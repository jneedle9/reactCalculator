
import './OverallRender.css';
import React, {useState, useEffect, useContext} from "react"
import {SetNumContext}  from './context/setNum'
import { DisplayNumber } from './DisplayNumber';


// We currently have to press C twice to get the second operation to work

function OverallRender() {
  const {number, savedNum, setNum, resetC, toggleOperation} = useContext(SetNumContext) // 

return(
  <div>
    <h1>Calculadora</h1>
      <DisplayNumber/>
      <div className = "grid-container">
          <button className = "column1" name = "7" onClick = {setNum} id = "row1">7</button>
          <button className = "column1" name = "4" onClick = {setNum} id = "row2">4</button>
          <button className = "column1" name = "1" onClick = {setNum} id = "row3">1</button>
          <button className = "column1" name = "0" onClick = {setNum} id = "row4">0</button>


          <button className = "column2" name = "8" onClick = {setNum} id = "row1">8</button>
          <button className = "column2" name = "5" onClick = {setNum} id = "row2">5</button>
          <button className = "column2" name = "2" onClick = {setNum} id = "row3">2</button>
          <button className = "column2" name = "." onClick = {setNum} id = "row4">.</button>


          <button className = "column3" name = "9" onClick = {setNum} id = "row1">9</button> 
          <button className = "column3" name = "6" onClick = {setNum} id = "row2">6</button>
          <button className = "column3" name = "3" onClick = {setNum} id = "row3">3</button>
          <button className = "column3" name = "=" onClick = {toggleOperation} id = "row4">=</button>

            <div className = "operations-grid">
              <button className = "column4" name = "C" onClick = {resetC}    id = "operation">C</button>
              <button className = "column4" name = "÷" onClick = {toggleOperation} id = "operation">÷</button>
              <button className = "column4" name = "+" onClick = {toggleOperation} id = "operation">+</button>
              <button className = "column4" name = "X" onClick = {toggleOperation} id = "operation">X</button>
              <button className = "column4" name = "-" onClick = {toggleOperation} id = "operation">-</button>
              <button className = "column4" name = ","  id = "operation">,</button>          
            </div>  
          
      </div>
      
                
          <p>{number}</p>
          <h2>Saved Number</h2>
          <p>{savedNum}</p>
          
      </div>
        
        )      
}


export default OverallRender;



// Next task is to make it so that we can perform multiple operations with the saved number not resetting
// Could we make = just update the state being displayed
// Have a function that's addition, it changes state in so and so way, 