import logo from './logo.svg';
import './Main.css';
import NavBar from './NavBar';
import Polls from './Polls'

function App() {
  const companyName = 'Edisco';
  
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <h1>{ companyName }</h1>
        <Polls />
      </div>
    </div>
  );
}

export default App;
