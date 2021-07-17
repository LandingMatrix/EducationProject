import logo from './logo.png';
import profile from './profile.png';
import './Main.css';

function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <a href="#"><img src={ logo } alt=""/></a>
      </div>
      <div className="links">
        <ul>
          <li to="">Home</li>
          <li href="#">Contact</li>
          <li href="#">About</li>
        </ul>
      </div>
      <div className="login">
        <div className="login__inner">
          <a href="#"><img src={ profile } alt=""/> Log in </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;