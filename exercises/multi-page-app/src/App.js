import { Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import NavMenu from './components/NavMenu';
import AppContext from './AppContext';

function App() {
  const [user, setUser] = useState({
    username: 'Sofi'
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <div>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/my-account" component={MyAccount} />
          <Redirect to="/" />
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
