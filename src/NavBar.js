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
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
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