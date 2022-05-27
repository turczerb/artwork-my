// ez itt maga a login kinézete?
import { useState } from "react";

const UserForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      //ha megadtáák az emailt és jelszót
      return props.onSubmit(email, password); //?
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          disabled={props.loading}
        ></input>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          disabled={props.loading}
        ></input>
        <button type="submit" disabled={props.loading} className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserForm;
