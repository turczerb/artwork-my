import { useContext } from "react";
import { userContext } from "./UserContext";
//csak bejelentkezettek láthatnak majd bizonyos komponenseket
//na ez komponenst kap csinál
const loginGuard = (Component) => {
  return (props) => {
    const { user } = useContext(userContext);
    if (user) {
      return <Component {...props} user={user} />;
    }
    return null;
  };
};

export default loginGuard;
