import logo from './logo.png';
import profile from './profile.png';
import './Main.css';

function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <link to="/Question"><img src={ logo } alt=""/></link>
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
          <Link href="#"><img src={ profile } alt=""/> Log in </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;