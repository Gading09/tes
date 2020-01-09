import React from "react";
import { Redirect } from "react-router-dom";
import Header from "./header";

const Profile = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const first_name = localStorage.getItem("first_name");
  const last_name = localStorage.getItem("last_name");
  const email = localStorage.getItem("email");
  const full_name = localStorage.getItem("full_name");
  console.warn("is_login", is_login);
  console.warn("first_name", first_name);
  console.warn("last_name", last_name);
  console.warn("email", email);
  console.warn("full_name", full_name);
  if (is_login === null) {
    return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      <React.Fragment>
        <Header {...props} />
        <section className="content signin">
          <h1
            style={{
              textalign: "center"
            }}
          >
            Profile
          </h1>
          <p>
            <label>First Name:</label> {first_name}
          </p>
          <p>
            <label>Last Name:</label> {last_name}
          </p>
          <p>
            <label>Full Name:</label> {full_name}
          </p>
          <p>
            <label>Email:</label> {email}
          </p>
        </section>
      </React.Fragment>
    );
  }
};

export default Profile;
