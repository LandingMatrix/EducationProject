import { NavLink, Switch, Route } from 'react-router-dom';

import './Main.css';
import Polls from './pollCmp/Polls';
import Question from './Question';

const Home = () => {
  console.log("This is the home");
  return (
    <div>
      <h1 className="welcome">Welcome to Edia</h1>
    </div>
  );
}

const Poll = () => {
  console.log("This is the poll");
  return (
    <div>
      
      <Question />
      <div className='number'>
        <h1 className="text">Send your name to play the game!</h1>
        <h1 className="text">0480 093 159</h1>
      </div>
      <Polls />
    </div>
  );
}

const Main = () => {
  console.log("This is the main component");
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Poll' component={Poll}></Route>
    </Switch>
  );
}

export default Main;