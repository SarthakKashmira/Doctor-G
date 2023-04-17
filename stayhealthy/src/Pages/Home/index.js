import { Col, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllDoctors,GetallDoctors } from "../../apicalls/doctors";
import { showLoader } from "../../redux/loaderReducer";

function Home() {
  const [doctors = [], setDoctors] = React.useState([]);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const getData = async () => {
    try {
      dispatch(showLoader(true));
      const response = await GetallDoctors();
      if (response.success) {
        setDoctors(response.data);
      } else {
        message.error(response.message);
      }

      dispatch(showLoader(false));
    } catch (error) {
      message.error(error.message);
      dispatch(showLoader(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  return (
   user && <div>
      <div className="flex justify-between">
        <div>
          <input placeholder="Search doctors" className="w-400" />
        </div>
        {user?.role !== "doctor" && (
          <button
            className="outlined-btn"
            onClick={() => navigate("/apply-doctor")}
          >
            Apply doctor
          </button>
        )}
      </div>

      <Row gutter={[16, 16]} className="my-1">
        {doctors.map((doctor) => {
          return (
            <Col span={8}>
              <div
                className="bg-white p-1 flex flex-col gap-1 cursor-pointer"
                onClick={() => navigate(`/book-appointment/${doctor.id}`)}
              >
                <div className="flex justify-between w-full">
                  <h2 className="uppercase">
                    {doctor.firstname} {doctor.lastname}
                  </h2>
                </div>
                <hr />
                <div className="flex justify-between w-full">
                  <h4>
                    <b>Speciality : </b>
                  </h4>
                  <h4>{doctor.speciality}</h4>
                </div>
                <div className="flex justify-between w-full">
                  <h4>
                    <b>Experience : </b>
                  </h4>
                  <h4>
                    {doctor.experience}Years
                  </h4>
                </div>
                <div className="flex justify-between w-full">
                  <h4>
                    <b>Email : </b>
                  </h4>
                  <h4>{doctor.email}</h4>
                </div>
                <div className="flex justify-between w-full">
                  <h4>
                    <b>Phone : </b>
                  </h4>
                  <h4>{doctor.phone}</h4>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Home;
