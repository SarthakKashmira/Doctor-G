import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login/index.js';
import Register from './Pages/Register/index.js';
import Home from './Pages/Home/index.js';
import ProtectedRoute from './Components/ProtectedRoute.js';
import Profile from './Pages/Profile/index.js';
import Spinner from './Components/spinner.js';
import { useSelector } from 'react-redux';
import DoctorForm from './DoctorForm/doctorForm.js';
import Admin from './Pages/Admin/index.js'
import BookAppointment from './Pages/BookAppointment'
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
      <Route path='/book-appointment/:id' element={<ProtectedRoute><BookAppointment/></ProtectedRoute>}/>
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path='/apply-doctor' element={<ProtectedRoute><DoctorForm/></ProtectedRoute>}/>
      <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
