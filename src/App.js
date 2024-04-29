import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addmission from './Components/Addmission';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addmission/>} />
        
        
          
      </Routes>
      
      
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
