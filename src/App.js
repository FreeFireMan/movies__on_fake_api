import './App.css';
import {useEffect} from 'react'
import { moviesService } from "./services";
import {Home} from "./pages";
import {BaseLayout} from "./layouts";




function App() {
  useEffect(() => {
    moviesService.getMovies().then(console.log)
  }, [])

  return (
      <BaseLayout>
        <Home/>
      </BaseLayout>
  );
}


export default App;
