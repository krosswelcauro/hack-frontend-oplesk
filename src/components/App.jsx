import '../../src/App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Inicio } from './Inicio';
import { UserList } from './UserList';
import { User } from './User';

export function App() {
  return (
    <>
      <Router>
        <nav>
          <img src="./icon_menu.svg" alt="menu" className="menu" />
          <div className="navbar-left">
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/users">Usuarios</Link>
              </li>
              <li>
                <Link to="/register-user">Registrar Usuario</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul>
              <li className="navbar-username">Krosswel Cauro</li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" index element={<Inicio />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/register-user" element={<User />}></Route>
          <Route path="/update-user/:userId" element={<User />}></Route>
        </Routes>
      </Router>
    </>
  );
}
