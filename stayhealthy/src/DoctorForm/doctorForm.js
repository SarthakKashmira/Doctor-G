import React, { useEffect, useState } from "react";
import { Col, Form, Row, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoader } from "../redux/loaderReducer";
import { AddDoctor, CheckDoctorAlreadyApplied } from "../apicalls/doctors";

export default function DoctorForm() {
  const [days, setDays] = useState([]);
  const [AlreadyApplied, setAlreadyApplied] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoader(true));
      const payload = {
        ...values,
        days,
        userId: JSON.parse(localStorage.getItem("user")).id,
        status: "pending",
        role: "doctor"
      };
      const response = await AddDoctor(payload);
      if (response.success) {
        message.success(response.message);
        navigate("/profile");
      } else {
        message.error(response.message);
      }
      dispatch(showLoader(false));
    } catch (error) {
      dispatch(showLoader(false));
      message.error(error.message);
    }
  };
  const checkIfAlreadyApplied = async () => {
    try {
      dispatch(showLoader(true));
      const response = await CheckDoctorAlreadyApplied(
        JSON.parse(localStorage.getItem('user')).id
      );
      if (response.success) setAlreadyApplied(true);
      dispatch(showLoader(false));
    } catch (error) {
      dispatch(showLoader(false));
      message.error(error.message);
    }
  };
  useEffect(() => {
    checkIfAlreadyApplied();
  }, []);
  return (
    <div className="bg-white p-2">
      {!AlreadyApplied && (
        <>
          <h3 className="uppercase">Apply for a doctor Account</h3>
          <hr />
          {/* personal info */}
          <Form layout="vertical" className="my-1" onFinish={onFinish}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <h4 className="uppercase">
                  <b>Personal Information</b>
                </h4>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="FirstName"
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                  ]}
                >
                  <input type="text" className="w-full" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="LastName"
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: "Required",
                    },
                  ]}
                >
                  <input type="text" className="w-full" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Required",
                    },
                  ]}
                >
                  <input type="text" className="w-full" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="phone"
                  name="phone"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <input type="text" className="w-full" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="website"
                  name="website"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <input type="url" className="w-full" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="address"
                  name="address"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <textarea type="text" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <hr />
              </Col>
              {/* professional info */}
              <Col span={24}>
                <h4 className="uppercase">
                  <b>Professional Information</b>
                </h4>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="speciality"
                  name="speciality"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <select>
                    <option value="dermatologist">Dermatologist</option>
                    <option value="cardiologist">Cardiologist</option>
                    <option value="gynecologist">Gynacologist</option>
                    <option value="endocrinologist">Endocrinologist</option>
                    <option value="orthopedic">Orthopedic</option>
                    <option value="neurologist">Neurologist</option>
                    <option value="pediatrician">Pediatrician</option>
                    <option value="psychiatrist">Psychiatrist</option>
                    <option value="urologist">Urologist</option>
                    <option value="surgeon">Surgeon</option>
                  </select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Experience"
                  name="experience"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <input type="text" className="w-full" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Qualification"
                  name="qualification"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <select>
                    <option value="MBBS">MBBS</option>
                    <option value="MD">MD</option>
                    <option value="MS">MS</option>
                    <option value="MDS">MDS</option>
                  </select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <hr />
              </Col>
              {/* work hours */}
              <Col span={24}>
                <h4 className="uppercase">
                  <b>Work Hours</b>
                </h4>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="startTime"
                  name="startTime"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <input type="time" className="w-full" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="endTime"
                  name="endTime"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <input type="time" className="w-full" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Fee"
                  name="fee"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <input type="number" className="w-full" />
                </Form.Item>
              </Col>
              <Col span={24} className="flex gap-2">
                {[
                  "Monday",
                  "Tuesday",
                  "Friday",
                  "Thursday",
                  "Saturday",
                  "Sunday",
                ].map((day, i) => (
                  <div className="flex items-center" key={i}>
                    <input
                      type="checkbox"
                      value={day}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setDays([...days, e.target.value]);
                        } else {
                          setDays(days.filter((day) => day !== e.target.value));
                        }
                      }}
                    />
                    <label>{day}</label>
                  </div>
                ))}
              </Col>
            </Row>
            <div className="flex justify-end gap-2">
              <button className="outlined-btn" type="button">
                CANCEL
              </button>
              <button className="contained-btn" type="submit">
                SAVE
              </button>
            </div>
          </Form>
        </>
      )}
      {AlreadyApplied &&(
        <div className="flex flex-col item-center gap-2">
          <h3 className="text-secondary">
            You have already applied for this Doctor account please wait for admin for approval
          </h3>
        </div>
      )}
    </div>
  );
}
