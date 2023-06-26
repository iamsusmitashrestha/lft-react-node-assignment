import React, { useState } from "react";
import "./login.style.scss";
import { Link } from "react-router-dom";
import InputField from "../../components/common/Input";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/user";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userData = { email, password }; //
    const data = await login(userData);
    await localStorage.setItem("token", data);
    navigate("/getProduct", { replace: true });
  };

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
        <button type="submit">Login</button>
      </form>

      <Link to="/">Goto SignUp</Link>
    </div>
  );
}

export default Login;
