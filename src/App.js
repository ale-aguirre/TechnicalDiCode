import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Auth/Login/Login";
import VideoScreen from "./components/VideoScreen/VideoScreen";
import VideosRecomendados from "./components/VideosRecomendados/VideosRecomendados";
import { BrowserRouter, Route } from "react-router-dom";
import UnderConstruction from './components/UnderConstruction/UnderConstruction'

//19/03 .- 17:20 (start)

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={Header} />
        <div className="app__page">
          <Route exact path="/" component={Sidebar} />
          <Route exact path="/" component={VideosRecomendados} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/video/:videoId" component={VideoScreen} />
          <Route exact path="/under" component={UnderConstruction} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
