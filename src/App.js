import "./App.css";
import LoginForm from "./Components/LoginForm";
import React, { useState } from "react";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Email or Password is incorrect!");
    }
  };
  const Logout = (details) => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome <b>{user.name}</b>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;