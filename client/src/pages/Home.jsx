import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
          Experience Culinary Excellence
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-md">
          Indulge in flavors crafted with passion. Reserve your table today and let us serve you an unforgettable evening.
        </p>
        <Link 
          to="/book" 
          className="inline-block bg-primary-600 outline-none text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-primary-500 shadow-xl transform transition hover:-translate-y-1 hover:scale-105"
        >
          Book Your Table
        </Link>
      </div>
    </div>
  );
}

export default Home;
