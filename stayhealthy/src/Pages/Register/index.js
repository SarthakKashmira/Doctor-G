import React, { useEffect } from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { CreateUser } from "../../apicalls/users.js";
import { showLoader } from "../../redux/loaderReducer";
import { useDispatch } from "react-redux";

function Register() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const onFinsh = async (values) => {
    try {
      dispatch(showLoader(true))
      const response = await CreateUser(values);
      dispatch(showLoader(false))
      if (response.success) {
        message.success(response.message);
        navigate('/login')
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(showLoader(false))
      message.error(error.message);
    }
  };
  useEffect(() => {
    const user=JSON.parse(localStorage.getItem('user'))
    if(user)navigate('/')
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <Form layout="vertical" className="w-400 bg-white p-2" onFinish={onFinsh}>
        <h2 className="uppercase text-center my-1">
          <strong>Register</strong>
        </h2>
        <hr />
        <Form.Item label="Name" name="name">
          <input type="text" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <input type="password" />
        </Form.Item>
        <button className="contained-btn my-1 w-full" type="submit">
          Register
        </button>
        <Link className="underline" to="/login">
          <p className="color">
            Already have an account!!<strong>Sign In</strong>
          </p>
        </Link>
      </Form>
    </div>
  );
}

export default Register;
