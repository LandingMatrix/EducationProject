import logo from './logo.png';
import profile from './profile.png';
import './Main.css';
import client from './client.js'

function Question() {
  
  return (
    <div className="polling">
      <input type="text" placeholder="Propose a question..."/>
      <client.state.polls />
      {/* <div className="multi"><h1>Multiple Choice: </h1> <div className="connect"><h1>Yes</h1><input type="radio"/></div> <div className="connect"> <h1>No</h1><input type="radio"/></div></div> */}
    </div>
  );
}

export default Question;