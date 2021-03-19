import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
// import Login from './components/Login'


//19/03 .- 17:20 (start)

function App() {
  return (
    <div className="app">
     <h1>Youtube</h1>
     {/* Header / Navbar */}
     <Header/>
     {/* Sidebar */}
     <Sidebar/>
     {/* Dashboard */}
     <Dashboard/>
    </div>
  );
}

export default App;
