import { NavLink, Switch, Route } from 'react-router-dom';

import logo from './logo.png';
import profile from './profile.png';
import './Main.css';

function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <div className='link'><NavLink to='/'><img src={ logo } alt=""/></NavLink></div>
      </div>
      <div className="tabs">
          <NavLink exact className = 'link' activeClassName="current" to='/' style={{ textDecoration: 'none' }}>Home</NavLink>
          <NavLink exact className = 'link' activeClassName="current" to='/Poll' style={{ textDecoration: 'none' }} >Poll</NavLink>
      </div>

      <div className="login">
        <div className="login__inner">
          <Link href="#"><img src={ profile } alt=""/> Log in </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;