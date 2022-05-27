import { useContext } from "react";
import { userContext } from "./UserContext";

const Porfile = () => {
  const { user } = useContext(userContext);
  if (!user) {
    <h2>pls login</h2>;
  }
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default Porfile;
