import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password:</label>
          <input
            type="text"
            name="pass"
            id="pass"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            required
          />
        </div>
        <input type="submit" value="login" />
      </div>
    </form>
  );
}

export default LoginForm;