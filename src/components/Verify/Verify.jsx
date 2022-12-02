import React from "react";

import Image from "../../assets/Signup/image-1.png";
import Logo from "../../assets/Signup/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Verify = () => {
  return (
    <section className="vh-100 py-4">
      <div className="container d-flex">
        <img
          src={Image}
          style={{
            marginTop: "-27px",
            marginLeft: "-120px",
            width: "660px",
            height: "635px",
            objectFit: "cover",
            objectPosition: "left",
          }}
          alt="img"
        />

        <div
          style={{ marginTop: "80px", paddingTop: "-30px" }}
          className="col-sm-6 text-center"
        >
          <img
            style={{ marginLeft: "100px" }}
            width={60}
            src={Logo}
            alt="logo"
          />
          <h4
            style={{ color: ["#4E4E4E"], cursor: "default" }}
            className="py-3 fw-bold fs-4"
          >
            <span
              className="fs-4"
              style={{ color: ["#1BB70B"], marginLeft: "120px" }}
            >
              OUTLET
            </span>
            CONTROL
          </h4>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              marginTop: "15px",
              cursor: "default",
              marginLeft: "120px",
            }}
            className="px-3"
          >
            Verify your mobile number
          </p>
          <h6
            style={{
              fontSize: "15px",
              cursor: "default",
              marginLeft: "100px",
              marginTop: "-10px",
            }}
          >
            To protect your account, we’ll send a text message with a <br />{" "}
            4-digit code to the mobile number below.
          </h6>
          <div className="form-group">
            <p
              style={{
                cursor: "default",
                fontSize: "16px",
                marginTop: "20px",
                marginLeft: "-230px",
                fontWeight: 600,
              }}
            >
              Mobile number
            </p>
            <div style={{ marginTop: "-10px" }}>
              <span
                style={{
                  marginLeft: "100px",
                  fontWeight: 500,
                  cursor: "default",
                }}
                className="px-2 border rounded py-2"
              >
                +91
                <MdKeyboardArrowDown
                  style={{ marginLeft: "5px", fontSize: "25px" }}
                />
              </span>
              <input
                style={{
                  display: "inline-block",
                  marginLeft: "-4px",
                  width: "380px",
                  height: "40px",
                }}
                type="number"
                className="form-control rounded-end"
                placeholder="Enter your mobile number"
              />
              <button
                style={{
                  marginBottom: "20px",
                  width: "450px",
                  marginTop: "25px",
                  marginLeft: "110px",
                  backgroundColor: ["#4E4E4E"],
                  color: "white",
                }}
                className="btn"
                type="button"
              >
                Send code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verify;
