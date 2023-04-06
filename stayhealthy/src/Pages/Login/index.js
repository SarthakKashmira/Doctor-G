import React from 'react';
import {Form,message} from 'antd';
import {Link,useNavigate} from 'react-router-dom';
import './index.css';
import {LoginUser} from '../../apicalls/users.js';

function Login() {
 const navigate=useNavigate();
  const onFinsh= async (values)=>{
    try { const response=await LoginUser(values);
     if(response.success)
     {
       message.success(response.message);
       localStorage.setItem("user",JSON.stringify(
        {...response.data,
          password:" ",

        }));
        navigate("/");
     }else{
       throw new Error(response.message);
     }
     
    } catch (error) {
     message.error(error.message);
    }
       
   };
  return (
  
    
    <div className='flex justify-center items-center h-screen'>
    <Form layout='vertical' className='w-400 bg-white p-2' onFinish={onFinsh}>
        <h2 className='uppercase text-center my-1'>
            <strong>Login</strong>
        </h2>
        <hr/>
        <Form.Item label='Email' name="email">
         <input type='email'/>
        </Form.Item>
        <Form.Item label='Password' name="password">
         <input type='password'/>
        </Form.Item>
        <button className="contained-btn my-1" type="submit">Login</button>
        <Link className='underline' to='/register'>
        <p className='color'>Don't have an account!!<strong>Sign Up</strong></p>
        </Link>

    </Form>
    </div>
  )
}

export default Login;