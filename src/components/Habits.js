import React from "react"
import { useSelector } from "react-redux"



import Habit from "./habit"
export default function Habits(){
    let habitsState=useSelector((state)=>state["habits"])

    return(
       
        <div className='habits'>
      {habitsState.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </div>

        
       
    )
}