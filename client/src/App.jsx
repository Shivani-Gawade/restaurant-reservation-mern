import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ReservationForm from './pages/ReservationForm';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow-md py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">Lumière</Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-primary-500 font-medium transition duration-150">Home</Link>
              <Link to="/book" className="text-gray-700 hover:text-primary-500 font-medium transition duration-150">Book a Table</Link>
              <Link to="/admin" className="text-gray-700 hover:text-primary-500 font-medium transition duration-150">Admin</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<ReservationForm />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2026 Lumière Restaurant. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
