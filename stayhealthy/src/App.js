import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login/index.js';
import Register from './Pages/Register/index.js';
import Home from './Pages/Home/index.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import Profile from './Pages/Profile/index.js';
import Spinner from './components/spinner.js';
import { useSelector } from 'react-redux';
import DoctorForm from './DoctorForm/doctorForm.js';
function App() {
  const {loading}=useSelector(state=>state.loader)
  return (
    <div >
     {loading&&<Spinner/>}
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path='/apply-doctor' element={<ProtectedRoute><DoctorForm/></ProtectedRoute>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
