import { useContext } from "react";
import AppContext from "../AppContext";

function Home() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h1>Home page 🏠</h1>
      <p>Hello {user.username}!</p>
    </div>
  )
}

export default Home;