import React, { useState } from "react";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import NewUser from "./NewUser";
import LogInPage from "./LogInPage";
import ProtectedRoute from "./ProtectedRoute";

function Application() {
  const [database, setDatabase] = useState([
    {
      userId: "tom@xyz",
      password: "tom123",
    },

    {
      userId: "sunny@xyz",
      password: "sunny123",
    },

    {
      userId: "joy@xyz",
      password: "joy123",
    },
  ]);

  console.log(database);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage database={database} />} />
        <Route
          path="/newuser"
          element={<NewUser setDatabase={setDatabase} />}
        />
        <Route
          path="/loginpage"
          element={<ProtectedRoute Component={LogInPage} />}
        />
        {/* ////<LogInPage /> */}
      </Routes>
    </>
  );
}

export default Application;
