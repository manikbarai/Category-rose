import React, { useEffect, useState } from 'react';
import HeroSlider from './HeroSlider/HeroSlider';
import ServiceCard from '../components/card/ServiceCard';
import ExtraSection from '../components/ExtraSection/ExtraSection';

const Homepage = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);
    return (
        <div>
            <div className='container flex items-center justify-between mx-auto'>
            <HeroSlider/>
        </div>
            <section className="py-16 px-4">
      <div className="max-w-[1550px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xl font-bold uppercase tracking-widest text-red-500 mb-2">
            Winter Pet Care
          </p>

          <h2 className="text-3xl md:text-6xl font-bold text-slate-900">
            Premium Care for <span className='text-red-700'>Your Pets</span>
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-slate-500">
            Discover trusted winter care services designed to keep your
            furry friends warm, healthy, and happy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.serviceId}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
    <ExtraSection/>
        </div>
    );
};

export default Homepage;