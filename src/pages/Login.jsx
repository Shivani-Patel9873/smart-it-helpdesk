import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", role);

      if (role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } else {
      alert("Please enter Email and Password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-bg"></div>

      <div className="login-card">

        <div className="login-logo">
          🤖
        </div>

        <h2>Smart IT</h2>

        <p>Secure Enterprise Login</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="📧 Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="🔒 Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>User</option>
            <option>Admin</option>
          </select>

          <button type="submit">
            Secure Login →
          </button>

        </form>

        <small>
          🛡 Protected Enterprise Portal
        </small>

      </div>

    </div>
  );
}

export default Login;