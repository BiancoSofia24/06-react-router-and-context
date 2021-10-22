import { useContext } from "react";
import AppContext from "../AppContext";

function MyAccount() {
  const { setUser } = useContext(AppContext);

  return (
    <div>
      <h1>My account page 🐱 </h1>      
      <button onClick={() => setUser({ username: 'Franz' })}>Change user</button>
    </div>
  )
}

export default MyAccount;