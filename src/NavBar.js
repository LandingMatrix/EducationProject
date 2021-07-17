import logo from './logo.png';
import profile from './profile.png';
import './Main.css';

function NavBar() {
  const companyName = 'Edisco';

  return (
    <div className="nav">
      <div className="logo">
        <a href="#"><img src={ logo } alt=""/></a>
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
      <div className="login">
        <div className="login__inner">
          <a href="#"><img src={ profile } alt=""/> Login</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;