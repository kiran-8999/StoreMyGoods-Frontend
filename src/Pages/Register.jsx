import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import MainNav from "./AdminNav";
const Register = () => {
  const navigate=useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: 0,
    address: ""
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
      const res = await axios.post(
        `http://localhost:8080/api/v1/register`,
        data
      );
      toast(res.data.msg,{})
      navigate("/login")
      console.log(res.data, "regitser");
    } catch (err) {
      console.log(err);
      toast.error(err.response.msg,{})
    }
  };
  return (
    <div className=" bg-light">
      <MainNav/>
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <div className="card border-danger mt-5 ">
            <img
              className="card-img-top"
              src="https://storemygoods.in/images/RedLogo.jpeg"
              alt="Card image cap"
              style={{ height: 200 }}
            />
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h5 className="card-title">
                  Name<b className="text-danger">*</b>
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    {" "}<input
                      className="form-control form-control-md"
                      type="text"
                      name="firstName"
                      value={data.firstName}
                      required
                      onChange={handleChange}
                      placeholder="First name"
                      aria-label=".form-control-lg example"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      className="form-control form-control-md"
                      type="text"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Last Name"
                      aria-label=".form-control-lg example"
                    />
                  </div>
                </div>
                <label
                  className="email mt-2"
                  type="email"
                  style={{ fontWeight: 700 }}
                >
                  Email<b className="text-danger">*</b>
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Email"
                  aria-label=".form-control-lg example"
                />
                <label
                  className="email mt-2"
                  type="password"
                  style={{ fontWeight: 700 }}
                >
                  Password<b className="text-danger">*</b>
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  // required
                  placeholder="Enter password"
                  aria-label=".form-control-lg example"
                />
                <label
                  className="contact mt-3"
                  type="tel"
                  style={{ fontWeight: 700 }}
                >
                  Contact Number<b className="text-danger">*</b>
                </label>
                <input
                  className="form-control form-control-md mt-3"
                  type="tel"
                  name="contactNumber"
                  value={data.contactNumber}
                  onChange={handleChange}
                  required
                  placeholder="contact Number"
                  aria-label=".form-control-lg example"
                />{" "}
                <label
                  className="address mt-2"
                  type="address"
                  style={{ fontWeight: 700 }}
                >
                  Address<b className="text-danger">*</b>
                </label>
                <input
                  className="form-control form-control-md mt-2"
                  type="address"
                  name="address"
                  value={data.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter address"
                  aria-label=".form-control-lg example"
                />
                {/* <label
                className="contact mt-3 mb-3"
                type="tel"
                style={{ fontWeight: 700 }}
              >
                Proffession
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Working Professional
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Student
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Business
                </label>
                
              </div>
              <input
                className="form-control form-control-md mt-3"
                type="tel"
                placeholder="Others"
                aria-label=".form-control-lg example"
              />
              <label
                className="email mt-2"
                type="email"
                style={{ fontWeight: 700 }}
              >
                Company Name(if Applicable)
              </label>
              <input
                className="form-control form-control-md mt-2"
                type="text"
                required
                placeholder="Comapny Name"
                aria-label=".form-control-lg example"
              />
              <label
                className="email mt-2"
                type="email"
                style={{ fontWeight: 700 }}
              >
                Tentative Duration of Storage
              </label>
              <input
                className="form-control form-control-md mt-2"
                type="text"
                required
                aria-label=".form-control-lg example"
              />
              <label
                className="email mt-2 mb-3"
                type="email"
                style={{ fontWeight: 700 }}
              >
                Reasons For Storage<b className="text-danger">*</b>
              </label>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Reasons For Storage</option>
                <option value="wFH">Working From Home</option>
                <option value="SFH">Studying From Home</option>
                <option value="renovation">Renovation</option>
                <option value="relocation">Relcoation</option>
                <option value="space">Space Optimisation</option>
                <option value="others">Others</option>
              </select>
              <input
                className="form-control form-control-md mt-2"
                type="text"
                required
                placeholder="Type here if selected others"
                aria-label=".form-control-lg example"
              />
              <label
                className="email mt-2"
                type="email"
                style={{ fontWeight: 700 }}
              >
                List of Tentative Goods (Ex- 1 bed, 2 mattresses)
              </label>
              <input
                className="form-control form-control-md mt-2"
                type="text"
                required
                aria-label=".form-control-lg example"
              /><label
              className="email mt-2 mb-3"
              type="email"
              style={{ fontWeight: 700 }}
            >
              Tentative Pick up date            </label>
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>pickUp date</option>
                <option value="1">Within 2-3 days</option>
                <option value="2">4-7 days</option>
                <option value="3">1-2 weeks</option>
                <option value="3">2-4 weeks</option>
                <option value="3">Next month</option>
              </select>
              <label
              className="email mt-2 mb-3"
              type="email"
              style={{ fontWeight: 700 }}
            >
           Where did you hear about us?<b className="text-danger">*</b>        </label>
              <select className="form-select" aria-label="Default select example">
                <option selected>Choose one option</option>
                <option value="1">Webiste</option>
                <option value="2">Instagram</option>
                <option value="3">Facebook</option>
                <option value="3">Google Search</option>
                <option value="3">Friend</option>
                <option value="3">Linked in</option>
                <option value="3">Email</option>
              </select> */}
                <p className="mt-4">
                  <b className="text-danger mt-4">*</b>Indicates required field
                </p>
                <button className="btn btn-danger text-light">
                  <b>Get a Quote</b>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
