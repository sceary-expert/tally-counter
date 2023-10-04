import React from "react";
import TallyCounter from "./TallyCounter";
import './Home.css'
function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="home-wrapper">
            
            <TallyCounter/>
            <button className="log-out-button" onClick={logout}>Logout</button>
        </div>
    );
}
export default Home;