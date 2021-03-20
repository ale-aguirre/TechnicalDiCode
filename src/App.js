import "./App.css";
import Header from "./components/Header/Header";  
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import VideosRecomendados from "./components/VideosRecomendados/VideosRecomendados";
// import Login from './components/Login'

//19/03 .- 17:20 (start)

function App() {
  return (
    <div className="app">
      {/* Header / Navbar */}
      <Header />
      <div className="app__page">
        {/* Sidebar */}
        <Sidebar />
        <VideosRecomendados/>
      </div>
      {/* Dashboard */}
      <Dashboard />
    </div>
  );
}

export default App;
