import React, { useContext } from "react"
import App from "./OverallRender"
import { SetNumContext } from "./context/setNum"
import { render } from "@testing-library/react"
import './DisplayNumber.css'


const ShowOp = ()=>{
    const {currentOperation} = useContext(SetNumContext)
    if (currentOperation !== 0 || currentOperation !== "="){
        return (<span class = 'operation'>{currentOperation}</span>)}
    else{
        return null
    }
}

const SavedNum = () => {
    const {savedNum} = useContext(SetNumContext)
    if (savedNum !== 0){
        return (<span class = 'savedNum'>{savedNum}</span>)}
    else{
        return null
        }
}

export const DisplayNumber= () =>{
    const {number} = useContext(SetNumContext)
    render()
    return(
    <div class = 'result-box'>
        <SavedNum/>
        <ShowOp/>
        <span class = 'result'>{number}</span>
    </div>
    )
}


