import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function Home() {

  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2> Welcome to the Control Panel </h2>
      <h3> You are logged in as {user?.username || 'ninguem logado'} </h3>
    </div>
  );
}