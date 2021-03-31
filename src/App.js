import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Auth/Login/Login";
import VideoScreen from "./components/VideoScreen/VideoScreen";
import SearchPage from "./components/SearchPage/SearchPage";
import VideosRecomendados from "./components/VideosRecomendados/VideosRecomendados";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";

import { VideoProvider } from "./VideoContext";

//19/03 .- 17:20 (start)
//30/03 .- 16:30 (continue)

function App() {
  return (
    <VideoProvider>
      <div className="app">
        <Router>
          <Route path="/" component={Header} />
          <Switch>
            <div className="app__page">
              <Route exact path="/" component={Sidebar} />
              <Route exact path="/" component={VideosRecomendados} />
              <Route exact path="/search/:searchterm" component={SearchPage} />
              <div className="app__page singleVideo__wrapper">
              <Route exact path="/login" component={Login} />
                <Route
                  exact
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
