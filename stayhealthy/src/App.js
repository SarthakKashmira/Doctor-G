import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login/index.js';
import Register from './Pages/Register/index.js';
import Home from './Pages/Home/index.js';
function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
