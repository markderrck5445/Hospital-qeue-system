import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Qeue from './pages/Qeue';
import Login from './pages/login';
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
                        <Route path='/' element={<Home />} />
                        <Route path='/queue' element={<Qeue />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                       
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
        </>
    )
}
export default App;