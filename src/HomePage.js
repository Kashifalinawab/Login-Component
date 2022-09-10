import React, { useEffect, useState } from "react";

import "./Login.css";

import { useNavigate } from "react-router-dom";

function HomePage({ database }) {
  const navigetPage = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("token");
    if (login) {
      navigetPage("/loginpage");
    }
  });

  const [userId, setemailId] = useState();
  const [password, setpassword] = useState();

  // console.log(emailId);
  // console.log(password);

  const loginFun = () => {
    const data = { userId, password };
    database.map((info) => {
      if (info.userId === userId && info.password === password) {
        localStorage.setItem("token", JSON.stringify(data));
        return navigetPage("/loginpage");
      } else {
        return console.log("Not A User Please Click to Register button");
      }
    });
  };

  const signInPage = () => {
    navigetPage("/newuser");
  };

  return (
    <div id="mainDiv">
      <h1 id="h1main">Welcome TO User Guide Section </h1>

      <div id="btnDiv">
        <span id="mainSpan1"> User Id:</span>
        <input
          type="text"
          placeholder="Enter User emailId"
          onChange={(e) => {
            setemailId(e.target.value);
          }}
          id="mainPageIn1"
        ></input>
        <br />
        <br />
        <span id="mainSpan2">User Password:</span>
        <input
          type="text"
          placeholder="Enter User Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          id="mainPageIn2"
        ></input>
        <br />
        <br />
        <button onClick={loginFun} id="mainbtn1">
          Login You
        </button>
        <button onClick={signInPage} id="mainbtn2">
          Register You
        </button>
      </div>
    </div>
  );
}
export default HomePage;
