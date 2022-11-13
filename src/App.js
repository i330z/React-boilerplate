import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/blog/:id" element={<BlogDetails />}></Route>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
