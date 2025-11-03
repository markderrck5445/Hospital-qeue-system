import react from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Appointment from './pages/Appointment';
import Qeue from './pages/Qeue';
import MyAppointment from './pages/MyAppointment';
import Login from './pages/login';
import index from './pages/Home';
import Register from './pages/register';    
import Dashboard from './pages/Dashboard';
import Footer from './componets/Footer';
import Home from './pages/Home';



function App() {
    return(
        <>
        <Router>
            <div className="App">
                <Navbar />
                <div>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/queue' element={<Qeue />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/myappointment' element={<MyAppointment />} />
                        <Route path='/appointment' element={<Appointment />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/Footer' element={<Footer />} />
                    </Routes>
                </div>
            </div>
        </Router>
        </>
    )
}
export default App;