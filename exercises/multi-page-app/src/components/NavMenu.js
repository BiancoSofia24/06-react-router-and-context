import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';

function NavMenu() {
  const { user } = useContext(AppContext);

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/my-account">My account</Link></li>
      <li>Hello {user.username}!</li>
    </ul>
  );
}

export default NavMenu;