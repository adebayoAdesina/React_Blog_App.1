// import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Singlepage from "./Components/Pages/SinglePost/SinglePost";
import Write from "./Components/Pages/Write/Write";
import Topbar from "./Components/Topbar/Topbar";

function App() {
  return (
    <>
      <Topbar/>
      {/* <Home/> */}
      {/* <Singlepage/> */}
      <Write/>
      {/* <Switch>
        <Route path={} exact component={Home}>
      </Switch> */}
    </>
  );
}

export default App;