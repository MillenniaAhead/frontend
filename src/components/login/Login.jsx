import React from "react";

import Image from "../../assets/Signup/image-1.png";
import Logo from "../../assets/Signup/logo.png";
import Line from "../../assets/Signup/Line -1.png";
import Fb from "../../assets/Signup/fb.png";
import Google from "../../assets/Signup/google.png";
import Apple from "../../assets/Signup/apple.png";
import Web from "../../assets/Signup/Web Help.png";
import Dot from "../../assets/Signup/Ellipse.png";

const Login = () => {
  return (
    <section className="vh-100 py-4">
      <div className="container d-flex">
        <img
          src={Image}
          style={{
            marginTop: "-27px",
            marginLeft: "-120px",
            width: "680px",
            height: "632px",
            objectFit: "cover",
            objectPosition: "left",
          }}
          alt="img"
        />

        <div
          style={{ marginTop: "-45px", paddingTop: "80px" }}
          className="col-sm-6 text-center"
        >
          <img
            style={{ marginLeft: "150px" }}
            width={50}
            src={Logo}
            alt="logo"
          />
          <h4
            style={{ color: ["#4E4E4E"], cursor: "default" }}
            className="py-2 fw-bold fs-4"
          >
            <span
              className="fs-4"
              style={{ color: ["#1BB70B"], marginLeft: "150px" }}
            >
              OUTLET
            </span>
            CONTROL
          </h4>
          <p
            style={{
              fontWeight: 500,
              fontSize: "14px",
              marginTop: "-12px",
              cursor: "default",
              marginLeft: "150px",
            }}
            className="px-3"
          >
            Create an account or log in to manage your Salon <br /> business.
          </p>
          <form>
            <div className="form-row">
              <div style={{ marginTop: "-8px" }} className="offset-1 col-lg-10">
                <input
                  style={{
                    marginLeft: "100px",
                    borderWidth: "1px",
                    height: "40px",
                    width: "84%",
                    borderRadius: "5px",
                    borderColor: ["#1E49E2"],
                  }}
                  type="email"
                  className="px-4"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="d-grid py-3 col-10 mx-auto">
                <button
                  style={{
                    width: "395px",
                    marginLeft: "100px",
                    backgroundColor: ["#4E4E4E"],
                    color: "white",
                  }}
                  className="btn"
                  type="button"
                >
                  Continue
                </button>
              </div>
            </div>
            <div style={{ marginTop: "-8px" }} className="form-row d-flex px-2">
              <img
                style={{
                  width: "170px",
                  height: "2px",
                  marginLeft: "140px",
                  marginTop: "10px",
                }}
                src={Line}
                alt="line"
              />
              <p
                style={{
                  fontSize: "14px",
                  color: "gray",
                  marginLeft: "15px",
                  cursor: "default",
                }}
              >
                OR
              </p>
              <img
                style={{
                  width: "170px",
                  height: "2px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
                src={Line}
                alt="line"
              />
            </div>
            <button
              style={{
                width: "400px",
                height: "44px",
                marginLeft: "145px",
                marginTop: "-8px",
              }}
              className="card px-3"
            >
              <div className="card-body d-flex">
                <img
                  style={{ width: "28px", height: "22px", marginTop: "-6px" }}
                  src={Fb}
                  alt="fb"
                />
                <p
                  className="h6"
                  style={{
                    fontSize: "16px",
                    paddingLeft: "80px",
                    marginTop: "-5px",
                  }}
                >
                  Continue with Facebook
                </p>
              </div>
            </button>
            <button
              style={{ width: "400px", height: "44px", marginLeft: "145px" }}
              className="card px-3 mt-3"
            >
              <div className="card-body d-flex">
                <img
                  style={{
                    marginTop: "-9px",
                    marginLeft: "-8px",
                    width: "40px",
                    height: "28px",
                  }}
                  src={Google}
                  alt="google"
                />
                <p
                  className="h6"
                  style={{
                    fontSize: "16px",
                    paddingLeft: "75px",
                    marginTop: "-5px",
                  }}
                >
                  Continue with Google
                </p>
              </div>
            </button>
            <button
              style={{ width: "400px", height: "44px", marginLeft: "145px" }}
              className="card px-3 mt-3"
            >
              <div className="card-body d-flex">
                <img
                  style={{
                    width: "18px",
                    height: "20px",
                    marginTop: "-8px",
                    marginLeft: "2px",
                  }}
                  src={Apple}
                  alt="apple"
                />
                <p
                  className="h6"
                  style={{
                    fontSize: "16px",
                    paddingLeft: "85px",
                    marginTop: "-5px",
                  }}
                >
                  Continue with Apple
                </p>
              </div>
            </button>
            <p
              style={{
                fontSize: "14px",
                marginTop: "8px",
                marginLeft: "150px",
                fontWeight: 500,
                cursor: "default",
              }}
            >
              Customer booking?
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "gray",
                marginTop: "-20px",
                cursor: "default",
                marginLeft: "150px",
              }}
            >
              If you are a customer wishing to book a service
            </p>
            <p
              style={{
                color: ["#1E49E2"],
                marginTop: "-20px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                marginLeft: "150px",
              }}
            >
              Sign up as a customer
            </p>
            <div className="d-flex px-4">
              <div style={{ marginLeft: "200px", fontSize: "10px" }}>
                <p>
                  GB{" "}
                  <span
                    style={{
                      marginLeft: "5px",
                      color: ["#1E49E2"],
                      fontWeight: 500,
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    English
                  </span>{" "}
                </p>
              </div>
              <div>
                <img style={{ marginLeft: "40px" }} src={Dot} alt="dot" />
              </div>
              <div style={{ marginLeft: "25px" }} className="d-flex">
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                    marginTop: "4px",
                  }}
                  src={Web}
                  alt="web"
                />
                <p
                  style={{
                    color: ["#1E49E2"],
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Support
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
