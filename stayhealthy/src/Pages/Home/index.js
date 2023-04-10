import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <input type="text" placeholder="Search Doctors" className="w-400" />
        </div>
        <div className="flex justify-end">
          <button className="outlined-btn my-1" onClick={()=>{
            navigate('/apply-doctor')
          }}>Apply Doctor</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
