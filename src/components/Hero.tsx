import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Shield, Star, Clock } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Red Sports Car"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tighter">
            FAST. RELIABLE. <br />
            <span className="text-brand-orange">PREMIUM CARE.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
            Experience the ultimate in automotive maintenance, detailing, and customization. 
            Professional service delivered with speed and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookClick}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              BOOK NOW
            </button>
            <a
              href="#services"
              className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-10 py-5 rounded-md font-bold text-lg transition-all flex items-center justify-center"
            >
              VIEW SERVICES
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">Certified Technicians</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">5-Star Rated Service</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">10+ Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
