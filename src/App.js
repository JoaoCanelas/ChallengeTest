import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home, TeamIndex, PageNotFound, PageTodo} from "./components";

function App() {
  return (
   <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team"  component={TeamIndex} />
        <Route exact path="/team/newEmployee" component={TeamIndex} />
        <Route exact path="/pageNotFound" component={PageNotFound} />
        <Route exact path="/pageTodo" component={PageTodo} />
      </Switch>
     
    </Router>
   </div>
  );
}

export default App;
