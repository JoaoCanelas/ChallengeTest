import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home, TeamIndex, PageNotFound, PageTodo} from "./components";

function App() {
  return (
   <div className="App">
    <Router>
      <Switch>
        <Route exact path="/ChallengeTest/" component={Home} />
        <Route exact path="/ChallengeTest/team/"  component={TeamIndex} />
        <Route exact path="/ChallengeTest/team/newEmployee/" component={TeamIndex} />
        <Route exact path="/ChallengeTest/pageNotFound/" component={PageNotFound} />
        <Route exact path="/ChallengeTest/pageTodo/" component={PageTodo} />
      </Switch>
     
    </Router>
   </div>
  );
}

export default App;
