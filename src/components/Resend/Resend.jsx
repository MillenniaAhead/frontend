import React from "react";

import Image from "../../assets/Signup/image-1.png";
import Logo from "../../assets/Signup/logo.png";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Resend = () => {
  return (
    <section className="vh-100 py-4">
      <div className="container d-flex">
        <img
          src={Image}
          style={{
            marginTop: "-27px",
            marginLeft: "-120px",
            width: "700px",
            height: "700px",
            objectFit: "cover",
            objectPosition: "left",
          }}
          alt="img"
        />

        <div
          style={{ marginTop: "20px", paddingTop: "-30px" }}
          className="col-sm-6 text-center"
        >
          <a
            href="/otp"
            style={{ color: "black", marginRight: "476px", marginTop: "50px" }}
          >
            <HiOutlineArrowLeft style={{ width: "30px", height: "40px" }} />
          </a>

          <img
            style={{ marginLeft: "100px" }}
            width={80}
            src={Logo}
            alt="logo"
          />
          <h4
            style={{ color: ["#4E4E4E"], cursor: "default" }}
            className="py-4 fw-bold fs-3"
          >
            <span
              className="fs-3"
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
              marginTop: "10px",
              cursor: "default",
              marginLeft: "120px",
            }}
            className="px-3"
          >
            Enter the 4-digit code
          </p>
          <h6
            style={{
              fontSize: "17px",
              cursor: "default",
              marginLeft: "100px",
              marginTop: "-10px",
            }}
          >
            The 4-digit code has been sent to +91 8019403208.
          </h6>

          <div className="d-flex justify-content-center align-items-center container">
            <div
              style={{ padding: "20px", marginLeft: "100px", fontSize: "24px" }}
              className="d-flex flex-row mt-3"
            >
              <input
                style={{
                  marginRight: "12px",
                  width: "60px",
                  height: "70px",
                  textAlign: "center",
                }}
                type="text"
                className="border border-primary rounded"
              />
              <input
                style={{
                  marginRight: "12px",
                  width: "60px",
                  height: "70px",
                  textAlign: "center",
                }}
                type="text"
                className="border rounded"
              />
              <input
                style={{
                  marginRight: "12px",
                  width: "60px",
                  height: "70px",
                  textAlign: "center",
                }}
                type="text"
                className="border rounded"
              />
              <input
                style={{
                  marginRight: "12px",
                  width: "60px",
                  height: "70px",
                  textAlign: "center",
                }}
                type="text"
                className="border rounded"
              />
            </div>
          </div>
          <p
            style={{
              fontSize: "18px",
              marginLeft: "160px",
              marginTop: "15px",
              fontWeight: 500,
              color: ["#1E49E2"],
              cursor: "default",
            }}
          >
            Resend 4-digit code
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resend;