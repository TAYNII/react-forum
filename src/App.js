import './App.css';
import {Switch, Route} from "react-router-dom"
import StartPage from './pages/StartPage';
import Post from './pages/Post';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" render={(props) => <StartPage {...props}/>}/>
          <Route path="/post/:id" render={(props) => <Post {...props}/>}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
