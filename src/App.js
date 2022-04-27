
import Footer from './components/Footer';
import Searchpage from './components/Searchpage';
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
         <Header />
           <Routes>
             <Route path="/" element={<Home />} />
              <Route path="/search" element={<Searchpage />}/>
           </Routes>
           <Footer /> 
      </Router>
        
    </div>
    
  );
}

export default App;
