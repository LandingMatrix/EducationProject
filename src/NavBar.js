import logo from './logo.svg';
// import './App.css';

function NavBar() {
  const companyName = 'Edisco';

  return (
    <div className="nav">
      <div className="logo">
        <h1>{ companyName }</h1>
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
      <div className="login">
        <a href="#">Login</a>
      </div>
    </div>
  );
}

export default NavBar;