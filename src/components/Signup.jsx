import { useState } from "react";
import UserForm from "./UserForm";
//it lesz a fetch ?
//proxit be állítjuk
const signup = (email, password) => {
  let status = true;
  return fetch("/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      //itt valamii hibakezelések vannak,??
      if (!res.ok) {
        //ha nem volt sikeres a http lekérdezés
        status = false;
      }
      return res;
    })
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      //ha sikeres volt a lekérdezés
      if (status) {
        return info;
      }
      throw info;
    });
};

const Signup = (props) => {
  //itt??
  const [error, setError] = useState(null); //error state a hiba kezeléshezs
  const [loading, setLoading] = useState(false);

  const handleSignup = (email, password) => {
    // ez magaa bejelentkezés
    setError(null);
    setLoading(true); //itt kezdödik
    signup(email, password)
      .then(() => {
        props.onSuccess();
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
      <h2>Regisztration</h2>
      {error ? <p>{error?.message ?? "unknown errror"}</p> : null}
      <UserForm onSubmit={handleSignup} loading={loading} />
    </div>
  );
};

export default Signup;
