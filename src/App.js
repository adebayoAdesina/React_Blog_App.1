import { Route, Switch, Link } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Setting from "./Components/Pages/Settings/Setting";
import Singlepage from "./Components/Pages/SinglePost/SinglePost";
import Write from "./Components/Pages/Write/Write";
import Topbar from "./Components/Topbar/Topbar";

function App() {
  const user = false; 
  return (
    <>
      <Topbar/>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/write" exact component={user ? Write : Register} />
        <Route path="/login" exact component={user ? Home : Login} />
        <Route path="/setting" exact component={user ? Setting : Register} />
        <Route path="/register" exact component={user ? Home : Register} />
        <Route path="/post/:postId" exact component={Singlepage} />
      </Switch>
    </>
  );
}

export default App;
