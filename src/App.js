import './App.css';
import {Home, MovieDetails} from "./pages";
import {BaseLayout} from "./layouts";
import {Route, Switch, useHistory} from "react-router-dom";

function App() {
  const history = useHistory()
  return (
      <BaseLayout>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>

          <Route path='/movie/:id' exact>
            <MovieDetails/>
          </Route>

          <Route>
            <h2>PAGE NOT FOUND <button onClick={() => history.push('/')}>go home</button></h2>
          </Route>
        </Switch>
      </BaseLayout>
  );
}


export default App;
