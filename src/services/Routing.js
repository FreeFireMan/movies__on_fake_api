import {Route, Switch, useHistory} from "react-router-dom";
import {Home, MovieDetails} from "../pages";


export const Routing = () => {
  const history = useHistory()
    return (
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
    );
}
