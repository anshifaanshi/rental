"use client";

import React, { useEffect, useState } from "react";

interface Bike {
  id: string;
  name: string;
  brand: string;
  pricePerHour: number;
  status: string;
  image: string;
}

const BikeDemo: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredBike, setHoveredBike] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/bikes")
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f8f3] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#2c5f5f] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#4a5f5f] text-sm tracking-[0.2em] uppercase">Loading bikes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f3]">
      {/* Header Section */}
      <div className="relative bg-[#2c5f5f] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-6"
              style={{ 
                fontFamily: 'serif',
                fontWeight: 200,
                letterSpacing: '-0.02em'
              }}
            >
              Available Bikes
            </h1>
            <p 
              className="text-sm tracking-[0.15em] uppercase font-light max-w-2xl mx-auto"
              style={{ 
                fontFamily: 'sans-serif',
                fontWeight: 300
              }}
            >
              Discover our premium collection of scooters—ready for your next adventure
            </p>
          </div>
        </div>
      </div>

      {/* Bikes Grid */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="group relative bg-white overflow-hidden transition-all duration-500 hover:shadow-xl"
              onMouseEnter={() => setHoveredBike(bike.id)}
              onMouseLeave={() => setHoveredBike(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-4 py-1 text-xs tracking-[0.15em] uppercase font-medium ${
                      bike.status === "Available"
                        ? "bg-[#2c5f5f] text-white"
                        : "bg-[#d3d7cd] text-[#4a5f5f]"
                    }`}
                  >
                    {bike.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Brand */}
                <p className="text-[#4a5f5f] text-xs tracking-[0.2em] uppercase mb-2">
                  {bike.brand}
                </p>

                {/* Name */}
                <h3 
                  className="text-[#2c5f5f] text-2xl font-extralight mb-4"
                  style={{ 
                    fontFamily: 'serif',
                    fontWeight: 200,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {bike.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-[#2c5f5f] text-3xl font-light">
                    ${bike.pricePerHour}
                  </span>
                  <span className="text-[#4a5f5f] text-sm tracking-wide">
                    / hour
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#d3d7cd] mb-6"></div>

                {/* Book Button */}
                <button
                  disabled={bike.status !== "Available"}
                  className={`w-full py-3 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                    bike.status === "Available"
                      ? "bg-[#2c5f5f] text-white hover:bg-[#234a4a]"
                      : "bg-[#d3d7cd] text-[#4a5f5f]/50 cursor-not-allowed"
                  }`}
                  style={{ 
                    fontFamily: 'sans-serif',
                    letterSpacing: '0.15em'
                  }}
                >
                  {bike.status === "Available" ? "Book Now" : "Not Available"}
                </button>
              </div>

              {/* Hover Effect Line */}
              <div 
                className={`absolute bottom-0 left-0 h-1 bg-[#2c5f5f] transition-all duration-500 ${
                  hoveredBike === bike.id ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {bikes.length === 0 && (
          <div className="text-center py-20">
            <p 
              className="text-[#4a5f5f] text-lg tracking-wide"
              style={{ 
                fontFamily: 'serif',
                fontWeight: 200
              }}
            >
              No bikes available at the moment
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BikeDemo;