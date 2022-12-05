import React, { useState } from "react";
import axios from "axios";

import Image from "../../assets/Signup/image-1.png";
import Logo from "../../assets/Signup/logo.png";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("India");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleApi = () => {
    console.log({ firstName, lastName, password, number, country });
    axios
      .post("https://reqres.in/api/register", {
        firstName: firstName,
        lastName: lastName,
        password: password,
        number: number,
        country: country,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="vh-100 py-4">
      <div className="container d-flex">
        <img
          src={Image}
          style={{
            marginTop: "-27px",
            marginLeft: "-120px",
            width: "700px",
            height: "720px",
            objectFit: "cover",
            objectPosition: "left",
          }}
          alt="img"
        />

        <div
          style={{ marginTop: "10px", paddingTop: "-30px" }}
          className="col-sm-6 text-center"
        >
          <img
            style={{ marginLeft: "150px" }}
            width={60}
            src={Logo}
            alt="logo"
          />
          <h4
            style={{ color: ["#4E4E4E"], cursor: "default" }}
            className="py-2 fw-bold fs-5"
          >
            <span
              className="fs-5"
              style={{ color: ["#1BB70B"], marginLeft: "150px" }}
            >
              OUTLET
            </span>
            CONTROL
          </h4>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "-10px",
              cursor: "default",
              marginLeft: "150px",
            }}
            className="px-3"
          >
            Create a business account
          </p>
          <p
            style={{
              marginLeft: "150px",
              marginTop: "-10px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            You’re almost there! Create your new account for
          </p>
          <p
            style={{
              marginLeft: "115px",
              marginTop: "-20px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              dorasanammagumparlapati@gmail.com
            </span>{" "}
            by completing these details{" "}
          </p>
          <form>
            <div className="form-row">
              <div className="offset-1 col-lg-10">
                <p
                  style={{
                    cursor: "default",
                    fontSize: "14px",
                    marginLeft: "-260px",
                    fontWeight: 600,
                  }}
                >
                  First Name
                </p>
                <input
                  value={firstName}
                  onChange={handleFirstName}
                  style={{
                    marginTop: "-15px",
                    fontSize: "14px",
                    marginLeft: "65px",
                    borderWidth: "1px",
                    height: "30px",
                    width: "97%",
                    borderRadius: "6px",
                  }}
                  type="email"
                  className="card px-3"
                  placeholder="Enter your first name"
                />
                <p
                  style={{
                    cursor: "default",
                    fontSize: "14px",
                    marginTop: "15px",
                    marginLeft: "-260px",
                    fontWeight: 600,
                  }}
                >
                  Last Name
                </p>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  style={{
                    marginTop: "-15px",
                    marginLeft: "65px",
                    borderWidth: "1px",
                    fontSize: "14px",
                    height: "30px",
                    width: "97%",
                    borderRadius: "6px",
                  }}
                  type="email"
                  className="card px-3"
                  placeholder="Enter your last name"
                />
                <p
                  style={{
                    cursor: "default",
                    fontSize: "14px",
                    marginTop: "15px",
                    marginLeft: "-270px",
                    fontWeight: 600,
                  }}
                >
                  Password
                </p>
                <div>
                  <input
                    value={password}
                    onChange={handlePassword}
                    style={{
                      marginTop: "-15px",
                      fontSize: "14px",
                      marginLeft: "65px",
                      borderWidth: "1px",
                      height: "30px",
                      width: "97%",
                      borderRadius: "6px",
                    }}
                    type="password"
                    className="card px-3"
                    placeholder="Enter a password"
                  />
                </div>
              </div>
              <div className="form-group">
                <p
                  style={{
                    cursor: "default",
                    fontSize: "16px",
                    marginTop: "15px",
                    marginLeft: "-220px",
                    fontWeight: 600,
                  }}
                >
                  Mobile number
                </p>
                <div
                  style={{
                    marginLeft: "115px",
                    borderColor: "lightgray",
                    marginTop: "-12px",
                  }}
                >
                  <input
                    value={number}
                    onChange={handleNumber}
                    style={{
                      display: "inline",
                      marginLeft: "-4px",
                      width: "450px",
                      height: "40px",
                    }}
                    type="number"
                    className="form-control rounded-end"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <p
                  style={{
                    cursor: "default",
                    fontSize: "16px",
                    marginTop: "10px",
                    marginLeft: "-280px",
                    fontWeight: 600,
                  }}
                >
                  Country
                </p>
                <div>
                  <input
                    value={country}
                    onChange={handleCountry}
                    style={{
                      marginTop: "-15px",
                      marginLeft: "110px",
                      borderWidth: "1px",
                      height: "40px",
                      width: "81%",
                      backgroundColor: ["#f2f2f7"],
                      borderRadius: "6px",
                    }}
                    type="email"
                    className="card px-3"
                    placeholder="India"
                  />
                </div>
                <div className="form-check d-flex">
                  <input
                    style={{
                      cursor: "pointer",
                      marginLeft: "90px",
                      marginTop: "20px",
                      width: "16px",
                      height: "18px",
                    }}
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                  />
                  <p
                    style={{
                      fontSize: "15px",
                      cursor: "pointer",
                      marginTop: "16px",
                      marginLeft: "14px",
                      fontWeight: 500,
                    }}
                  >
                    I agree to the{" "}
                    <span style={{ color: ["#1A85E7"], fontWeight: 500 }}>
                      Privacy Policy , Privacy Policy
                    </span>{" "}
                    and <br />{" "}
                    <span
                      style={{
                        marginRight: "210px",
                        color: ["#1A85E7"],
                        fontWeight: 500,
                      }}
                    >
                      Terms of Business .
                    </span>
                  </p>
                </div>
                <button
                  onClick={handleApi}
                  style={{
                    marginBottom: "20px",
                    width: "445px",
                    marginLeft: "110px",
                    backgroundColor: ["#4E4E4E"],
                    color: "white",
                  }}
                  className="btn"
                  type="button"
                >
                  Create account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
