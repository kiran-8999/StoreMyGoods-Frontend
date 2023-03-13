import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/login`, data);
      if(res.data.msg === "Admin login successfully")
      navigate("/adminHome");
      else{
        navigate("/boxStorage")
      }
      console.log(res, "user Login");
      toast(res.data.msg, {
        position: "top-center"
      });
      localStorage.setItem("email", JSON.stringify(data.email));
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.msg, {});
    }
  };
  return (
    <div >
      <Navbar/>
      <div className="row mt-5">
        <div className="col-sm-2 mt-5" />
       
        <div className="col-sm-2" />
        <div className="col-sm-3">
          <div className="card border-dark mt-5 ">
            <h4 className="card-header text-dark">User Login</h4>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-dark"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="form-control text-danger"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-dark"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="form-control text-dark"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
              
              <button type="submit" className="btn btn-dark mt-3" onClick={() => navigate(`/register`)}>
                  Register
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
