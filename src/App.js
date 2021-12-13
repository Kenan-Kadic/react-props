import './App.css';
import Posts from './components/posts/Posts';
import Navbar from './components/navbar/Navbar';

function App() {
  const title = "developed by Kenan";

  return (
    <div className="App">
    <h1>Code from App file</h1>
    <div className="home">
      <Navbar />
      <Posts info={title}/>    
    </div>
    </div>
  );
}

export default App;
