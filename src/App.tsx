import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Mail, Clock, ShieldCheck, Award, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import BookingWizard from './components/BookingWizard';
import CarCareAI from './components/CarCareAI';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { SERVICES, TESTIMONIALS } from './constants';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleBookClick = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange selection:text-white">
      <Navbar onBookClick={() => handleBookClick()} />
      
      <main>
        {/* Hero Section */}
        <Hero onBookClick={() => handleBookClick()} />

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-brand-orange font-extrabold text-xs uppercase tracking-[0.3em] mb-4 block"
              >
                Our Expertise
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tighter mb-6"
              >
                PREMIUM AUTOMOTIVE SERVICES
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 max-w-2xl mx-auto"
              >
                From meticulous detailing to expert mechanical repairs, we provide a comprehensive range of services to keep your vehicle in peak condition.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ServiceCard service={service} onBook={handleBookClick} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1000"
                    alt="Our Workshop"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-brand-orange p-8 rounded-2xl shadow-2xl hidden md:block">
                  <div className="text-white text-4xl font-extrabold mb-1">10+</div>
                  <div className="text-white/80 text-xs font-bold uppercase tracking-widest">Years of Excellence</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <span className="text-brand-orange font-extrabold text-xs uppercase tracking-[0.3em] mb-4 block">About Fast Track</span>
                  <h2 className="text-4xl font-extrabold text-brand-navy tracking-tighter mb-6">ENGINEERED FOR EXCELLENCE</h2>
                  <p className="text-gray-500 leading-relaxed">
                    Fast Track Car Care was founded on a simple principle: providing high-end automotive services with the speed and efficiency of a pit crew. Our state-of-the-art facility and certified technicians ensure your vehicle receives the best care possible.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy mb-1">Guaranteed Quality</h4>
                      <p className="text-xs text-gray-500">We stand behind every service with a comprehensive warranty.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy mb-1">Certified Pros</h4>
                      <p className="text-xs text-gray-500">Our team consists of industry-certified automotive experts.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy mb-1">Customer First</h4>
                      <p className="text-xs text-gray-500">Your satisfaction is our primary metric for success.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy mb-1">Fast Turnaround</h4>
                      <p className="text-xs text-gray-500">We respect your time with efficient, streamlined processes.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-brand-navy relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#2563A8_0%,transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-brand-orange font-extrabold text-xs uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">WHAT OUR CLIENTS SAY</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-8 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 space-y-10">
                <div>
                  <h2 className="text-4xl font-extrabold text-brand-navy tracking-tighter mb-4">GET IN TOUCH</h2>
                  <p className="text-gray-500">Have questions about our services or need a custom quote? We're here to help.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Visit Our Facility</h4>
                      <p className="text-sm text-gray-500">1355/F, Rd Number 45, Nandagiri Hills, Jubilee Hills, Hyderabad, Telangana 500033</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Call Us Directly</h4>
                      <p className="text-sm text-gray-500">+91 73525 25252</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Email Support</h4>
                      <p className="text-sm text-gray-500">service@fasttrackcare.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4">Operating Hours</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Mon - Fri:</span>
                      <span className="font-bold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Saturday:</span>
                      <span className="font-bold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sunday:</span>
                      <span className="font-bold text-status-error uppercase tracking-widest text-[10px] mt-1">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 relative min-h-[400px]">
                {/* Mock Map Background */}
                <img
                  src="https://picsum.photos/seed/map/1000/1000?grayscale"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-2xl border border-brand-orange/20 flex flex-col items-center text-center max-w-xs">
                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mb-4 shadow-lg animate-bounce">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-brand-navy mb-2">FAST TRACK HQ</h4>
                    <p className="text-xs text-gray-500 mb-4">Jubilee Hills, Hyderabad, Telangana 500033</p>
                    <button className="bg-brand-navy text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-brand-blue transition-colors">
                      GET DIRECTIONS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Overlays & Widgets */}
      <BookingWizard
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceId}
      />
      
      <CarCareAI />
      <WhatsAppButton />
    </div>
  );
}
