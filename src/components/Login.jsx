import { useState, useContext } from "react";
import UserForm from "./UserForm";
import { userContext } from "./UserContext";
//it lesz a fetch ?
//proxit be állítjuk
const apiLogin = (email, password) => {
  let status = true;
  return fetch("/signin", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    //itt valamii hibakezelések vannak,??
    if (res.ok) {
      //ha nem volt sikeres a http lekérdezés
      return res.json();
    }
    throw new Error("wrong credential");
  });
};

const Login = (props) => {
  //itt??
  const [error, setError] = useState(null); //error state a hiba kezeléshezs
  const [loading, setLoading] = useState(false);
  const { login } = useContext(userContext); //igy olvaassukki a dobozvol az értéket az aktuálisat.

  const handleLogin = (email, password) => {
    // ez magaa bejelentkezés
    setError(null);
    setLoading(true); //itt kezdödik
    apiLogin(email, password)
      .then((user) => {
        props.onSuccess();
        login(user);
      })
      .catch((err) => {
        //hiba állapotot állítunk be0 ha hiba van ez fut le
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    //ha nincs error messaga akkor az unknown error jelenik meg
    <div>
      <h2>LogIn</h2>
      {error ? <p>{error?.message ?? "unknown errror"}</p> : null}
      <UserForm onSubmit={handleLogin} loading={loading} />
    </div>
  );
};

export default Login;
