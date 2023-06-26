import "./style.scss";
import InputField from "./common/Input";

function LoginForm() {
  function onLogin() {
    console.log(`Username: `);
    console.log(`Password: `);
  }

  return (
    <div className="container">
      <InputField label="Username" />
      <InputField type="password" label="Password" />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
