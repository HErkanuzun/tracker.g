import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ title, description, image }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Home = () => {
  const featuredContent = [
    {
      title: "Top Players This Week",
      description: "Check out the highest performing players and their strategies",
      image: "/featured/top-players.jpg"
    },
    {
      title: "Latest Meta Guide",
      description: "Learn about the current meta and best agent compositions",
      image: "/featured/meta-guide.jpg"
    },
    {
      title: "Community Highlights",
      description: "Amazing plays and moments from our community",
      image: "/featured/highlights.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Track Your <span className="text-red-500">Valorant</span> Journey
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Detailed stats, leaderboards, and community insights to improve your game
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your Riot ID..."
                  className="w-full px-6 py-4 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <FeaturedCard key={index} {...content} />
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-red-500">1M+</h3>
              <p className="text-gray-300">Players Tracked</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-red-500">50M+</h3>
              <p className="text-gray-300">Matches Analyzed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-red-500">100K+</h3>
              <p className="text-gray-300">Daily Users</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-red-500">24/7</h3>
              <p className="text-gray-300">Live Updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;