import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { deleteHabit } from "../redux/reducer";
import "react-toastify/dist/ReactToastify.css";

export default function Habit({habit}){
    const today=new Date();
    const todayDay=today.getDay();
    let countDone=0;
    //loop for getting habit done count
    for (let i = 0; i < habit.weekLog.length; i++) {
      if(habit.weekLog[i].isDone===true){
        countDone++;
      }
    }
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const setId=()=>{
        localStorage.setItem("id",habit.id)
        navigate("/week-view");

    }
    const handleDelete=()=>{
        dispatch(deleteHabit(habit.id));
        toast.success("Habit deleted Successfully");
        

    }
    return (<>
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{textTransform:"capitalize"}}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay+1} days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
    </>
    )
}