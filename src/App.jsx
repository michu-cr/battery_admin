import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Mylogin';
import Adminall from './pages/adminall';
import Navbar from './Components/Navbar';
import Batteryadding from './pages/Batteryadding';
import Brand from './pages/Brandadd';
import Order from './pages/Orederlist';
import Vehicle from './pages/Vehicleadding';
import Edit from './pages/battery edi and del';
import EditBattery from './pages/battery edit';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminall" element={<Adminall />} />
        <Route path="/batteryadding" element={<Batteryadding />} />
        <Route path="/brandadd" element={<Brand />} />
        <Route path="/orderlist" element={<Order />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/batedit/:id" element={<EditBattery />} />
      </Routes>
    </div>
  );
};
export default App;
