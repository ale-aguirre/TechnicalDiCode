import "./App.css";
// eslint-disable-next-line
import Header from "./components/Header/Header";
import Home from "./components/Sidebar/Drawer2";
import Login from "./components/Auth/Login/Login";
import VideoScreen from "./components/VideoScreen/VideoScreen";
import SearchPage from "./components/SearchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import { VideoProvider } from "./VideoContext";
import Land from "./components/Land/Land";
import Profile from "./components/Auth/Login/Profile";

//19/03 .- 17:20 (start)
//30/03 .- 16:30 (continue)

function App() {
  return (
    <VideoProvider>
      <div className="app">
        <Router>
          <Route exact path="/" component={Land} />
          <Route exact path="/home" component={Home} />
          <Switch>
            <div className="app__page">
              <Route exact path="/search/:searchterm" component={SearchPage} />
              <div className="app__page singleVideo__wrapper">
                <Route exact path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
                <Route
                  path="/video/:channelId/:videoId"
                  component={VideoScreen}
                />
                <Route exact path="/under" component={UnderConstruction} />
              </div>
            </div>
          </Switch>
        </Router>
      </div>
    </VideoProvider>
  );
}

export default App;
