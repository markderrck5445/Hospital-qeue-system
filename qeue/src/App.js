import react from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Appointment from './pages/Appointment';
import Qeue from './pages/Qeue';
import MyAppointment from './pages/MyAppointment';
import Dashboard from './pages/Dashboard';
import Footer from './componets/Footer';



function App() {
    return(
        <>
        <Router>
            <div className="App">
                <Navbar />
                <div>
                    <Routes>
                        <Route path='/queue' element={<Qeue />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/myappointment' element={<MyAppointment />} />
                        <Route path='/appointment' element={<Appointment />} />
                        <Route path='/Footer' element={<Footer />} />
                    </Routes>
                </div>
            </div>
        </Router>
        </>
    )
}
export default App;