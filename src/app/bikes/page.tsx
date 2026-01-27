"use client";

import { useEffect, useState } from "react";

interface Bike {
  id: string;
  name: string;
  brand: string;
  pricePerHour: number;
  status: string;
  image: string;
}

export default function BikeList() {
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bikes");
        const data = await res.json();
        setBikes(data);
      } catch (error) {
        console.log("Failed to fetch bikes", error);
      }
    };
    fetchBikes();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {bikes.map((bike) => (
        <div key={bike.id} className="border p-4 rounded shadow">
          <img src={bike.image} alt={bike.name} className="w-full h-48 object-cover rounded" />
          <h2 className="font-bold text-lg mt-2">{bike.name}</h2>
          <p>Brand: {bike.brand}</p>
          <p>Price per hour: ${bike.pricePerHour}</p>
          <p>Status: {bike.status}</p>
        </div>
      ))}
    </div>
  );
}
