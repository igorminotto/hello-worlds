import React from "react";
import { useAuth } from "../hooks/authHooks";

function AuthBar() {
  const { isLogged, login, logout } = useAuth();

  return (
    <div>
      <h2>Logged? {isLogged ? "Yes" : "No"}</h2>

      {isLogged ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
    </div>
  );
}

export default AuthBar;
