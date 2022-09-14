import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const naviGation = useNavigate();

  const signOutFun = () => {
    localStorage.removeItem("token");
    naviGation("/");
  };

  return (
    <div>
      <h1 id="signOut">
        <RiLogoutCircleLine onClick={signOutFun} />
      </h1>

      <div id="infoDivUserPage">
        <h2 id="h1UserPage">Information About React</h2>
      </div>
      <div id="imgDivUserPage">
        <img
          src="https://swordstoday.ie/wp-content/uploads/2021/08/1_C4yGTDSLSz86TCakrza2HQ.jpeg"
          alt="react logo"
          id="image1"
        />
        <div id="smallimgDiv">
          {" "}
          <img
            src="https://cdn.thenewstack.io/media/2022/05/600b72f9-react-1024x680.png"
            alt="react logo"
            id="image2"
          />
          <img
            src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
            alt="react logo"
            id="image3"
          />
          <img
            src="https://mdevelopers.com/storage/pages/pages-module/311/November2021/technology-react-native.webp"
            alt="react logo"
            id="image4"
          />
          <img
            src="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"
            alt="react logo"
            id="image5"
          />
          <img
            src="https://evilmartians.com/static/a1d5b40b24d5c4c56de6cdf28638ce87/439f8/cover.avif"
            alt="react logo"
            id="image6"
          />
          <br />
          <br />
        </div>
        <div id="paraInfo">
          <h4>Declarative</h4>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
          Declarative views make your code more predictable and easier to debug.
          <h4>Component-Based</h4>
          Build encapsulated components that manage their own state, then
          compose them to make complex UIs. Since component logic is written in
          JavaScript instead of templates, you can easily pass rich data through
          your app and keep state out of the DOM.
          <h4>Learn Once, Write Anywhere</h4>
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React without rewriting existing code.
          React can also render on the server using Node and power mobile apps
          using React Native.
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
