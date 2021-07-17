import logo from './logo.svg';
import './App.css';
import Polls from '.Polls'

function App() {
  const companyName = 'Edisco';
  
  return (
    <div className="App">
      <div className="content">
        <h1>{ companyName }</h1>
        <Polls />
      </div>
    </div>
  );
}

export default App;
