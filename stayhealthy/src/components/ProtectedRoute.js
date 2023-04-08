import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="layout p-1">
      <div className="header bg-white p-2 flex justify-between items-center">
        <h1>
          <strong className="text-primary">STAY</strong>
          <strong className="text-secondary">{' '}HEALTHY</strong>
        </h1>
        {user && (
          <div className="flex gap-3">
            <div className="flex gap-1 items-center">
              <i className="ri-shield-user-line"></i>
              <h4 className="uppercase cursor-pointer underline"
              onClick={()=>navigate('/profile')}
              >
                {user.name}
              </h4>
            </div>
            <i className="ri-logout-box-r-line" onClick={()=>{
              localStorage.removeItem('user');
              navigate('/login')
            }}>
            </i>
          </div>
        )}
      </div>
      <div className="content my-1">{children}</div>
    </div>
  );
}
