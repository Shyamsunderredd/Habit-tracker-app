import React, { useEffect, useState } from "react"

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/reducer";
import "react-toastify/dist/ReactToastify.css";
export default function Navbar ({name}){
    const dispatch=useDispatch();
    const [hour,sethour]=useState(0);
    const [toggle,settoggle]=useState(false);
    useEffect(()=>{
        const date=new Date();
        sethour(date.getHours());
        
    },[]);
    const handleToggle=()=>{
        settoggle((toggle)=>!toggle)
    }
    const handleSave=()=>{
        const habitName=document.getElementById("habitName").value;
        dispatch(addHabit(habitName));
        toast.success("Habit added Suceesfully");
        document.getElementById("habitName").value="";


    }
    
   
    return (
        <>
        <div className="navbar">
          <h3>
            Habit Tracker~Vivek
          </h3>
          <div className="right-nav">
            <button className="detail">{name}</button>
            <button
              className="addhabit-btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
             onClick={handleToggle}>
             Add Habits
            </button>
          </div>
        </div>
  
        {/* modal for add habit form */}
        {toggle? 
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add New Habit
                </h5>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                   HABIT NAME
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="habitName"
                    placeholder="Enter habit name"
                    autoComplete="off"
                    
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
               onClick={handleToggle} >
                  Cancel Habit 
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Save Habit
                </button>
              </div>
            </div>
          </div>
        </div>: null}
      </>
      );
}