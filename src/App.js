import logo from './logo.svg';
import './Main.css';

import Main from './Content';
import NavBar from './NavBar';
import Polls from './pollCmp/Polls';
import Client from './client';

function App() {
  const companyName = 'Edia';
  
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <Main />
        <Client />
      </div>
    </div>
  );
}

export default App;
