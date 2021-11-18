import 'antd/dist/antd.css';
import Home from './Screens/Home';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import './Style/App.scss';



function App() {
  return (
   
      
       <div>
         <Router>
        <Home />
        
      </Router>
      
       </div>
        
      
    
  );
}

export default App;
