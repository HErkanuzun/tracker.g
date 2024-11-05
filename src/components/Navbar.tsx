import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 w-full bg-valorant-dark border-b border-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <span className="font-bold text-xl text-valorant-red">VTracker.gg</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/stats" className="text-gray-300 hover:text-valorant-red transition-colors duration-200">
              Stats
            </Link>
            <Link to="/leaderboards" className="text-gray-300 hover:text-valorant-red transition-colors duration-200">
              Leaderboards
            </Link>
            <Link to="/players" className="text-gray-300 hover:text-valorant-red transition-colors duration-200">
              Player Search
            </Link>
            <Link to="/community" className="text-gray-300 hover:text-valorant-red transition-colors duration-200">
              Community
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search players..."
                className="w-64 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-valorant-red transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;