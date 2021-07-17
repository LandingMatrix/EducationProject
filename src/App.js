import logo from './logo.svg';
import './Main.css';
import NavBar from './NavBar';
import Polls from './pollCmp/Polls';
import Question from './Question';

function App() {
  const companyName = 'Edia';
  
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <Question />
        <Polls />
      </div>
    </div>
  );
}

export default App;
