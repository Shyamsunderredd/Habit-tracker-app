import { useNavigate } from "react-router-dom"
import "../styles/navbar.css"
export default function Notfound(){
    const navigate=useNavigate();
    const handleBack=()=>{
        navigate('/');
    }
    return(
        <div className="not-found page">
        <h3>Page not found.</h3>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="not found"
        />
  
        <button onClick={handleBack}>Back to Home</button>
      </div>
    )
}