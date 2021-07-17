import logo from './logo.png';
import profile from './profile.png';
import './Main.css';

function Question() {
  return (
    <div className="polling">
      <div className="question"><h1>Question: </h1> <input type="text"/></div>
      <div className="multi"><h1>Multiple Choice: </h1> <div className="connect"><h1>Yes</h1><input type="radio"/></div> <div className="connect"> <h1>No</h1><input type="radio"/></div></div>
    </div>
  );
}

export default Question;