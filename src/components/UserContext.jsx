//ez a context itt van olyan cucli amit bárhonnan el lehet érni bárhol meghívható ez a cucc
import { createContext, useCallback, useEffect, useState } from "react";

export const userContext = createContext({});

//komponens eljuttatja az infót bárhova ilyen komponenst kell kéeszítenünk:children kell ehhez
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //ez a functi 1x jön létre mindig fixen ugyan az fusson le!! u:akit be akarunk jelentkeztetni
  const login = useCallback((u) => {
    setUser(u); //igy jel be a fekhasználó
  }, []);

  //hatás ami lefut: amint usercontext betöltödik :profile endpoint 200:be vagyunkjel
  useEffect(() => {
    fetch("/profile")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res.status;
      })
      .then((user) => {
        setUser(user);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <userContext.Provider value={{ user, login }}>
      {loading ? null : children}
    </userContext.Provider>
  );
};
//value-val terheszuk  van login amit meg lehet hivni meg h van v nincs user.
//provide:összes gyermek objektum/komponensenek biztosítja az usert éslogint. könnyü kiszedni useContext hookkal

export default UserContext;
