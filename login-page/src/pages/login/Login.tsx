import React, { useState } from "react";
import "./login.style.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { doLogin } from "../../redux/slices/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userData = { email, password };
    dispatch(doLogin(userData));

    navigate("/getProduct", { replace: true });
  };

  const loading = useAppSelector((state) => state.userData.loading);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>

      <Link to="/">Goto SignUp</Link>
    </div>
  );
}

export default Login;
