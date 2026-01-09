import React from "react";

function loginPage() {
  return (
    <form className="d-flex bg-light border border-1 border-secondary">
      <h2>Login Page</h2>
      <div>
        <label htmlFor="email">Enter Email or Username</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Enter Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <span>Don't have an account? <span className="text-danger">Sign up</span></span>
    </form>
  );
}

export default loginPage;
