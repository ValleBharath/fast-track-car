import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowLeft, ArrowRight, Calendar, Clock, Car, User, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../constants';
import { Booking } from '../types';

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function BookingWizard({ isOpen, onClose, initialServiceId }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<Partial<Booking>>({
    serviceId: initialServiceId || '',
    date: '',
    time: '',
    vehicle: { make: '', model: '', year: '' },
    customer: { name: '', email: '', phone: '' }
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const updateBooking = (data: Partial<Booking>) => {
    setBooking(prev => ({ ...prev, ...data }));
  };

  const updateVehicle = (data: Partial<Booking['vehicle']>) => {
    setBooking(prev => ({ ...prev, vehicle: { ...prev.vehicle!, ...data } }));
  };

  const updateCustomer = (data: Partial<Booking['customer']>) => {
    setBooking(prev => ({ ...prev, customer: { ...prev.customer!, ...data } }));
  };

  const selectedService = SERVICES.find(s => s.id === booking.serviceId);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-blue" />
              Select Service
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map(service => (
                <button
                  key={service.id}
                  onClick={() => updateBooking({ serviceId: service.id })}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    booking.serviceId === service.id
                      ? 'border-brand-blue bg-brand-blue/5'
                      : 'border-gray-100 hover:border-brand-blue/30'
                  }`}
                >
                  <div className="font-bold text-brand-navy">{service.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{service.price}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-blue" />
              Choose Date & Time
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Select Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none"
                  value={booking.date}
                  onChange={(e) => updateBooking({ date: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Select Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {['09:00', '10:30', '13:00', '14:30', '16:00'].map(t => (
                    <button
                      key={t}
                      onClick={() => updateBooking({ time: t })}
                      className={`p-2 rounded-md text-sm font-bold border transition-all ${
                        booking.time === t
                          ? 'bg-brand-blue text-white border-brand-blue'
                          : 'border-gray-200 hover:border-brand-blue/30'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Car className="w-5 h-5 text-brand-blue" />
              Vehicle Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Year</label>
                <input
                  type="text"
                  placeholder="2024"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none"
                  value={booking.vehicle?.year}
                  onChange={(e) => updateVehicle({ year: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold mb-2">Make & Model</label>
                <input
                  type="text"
                  placeholder="Tesla Model 3"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none"
                  value={`${booking.vehicle?.make} ${booking.vehicle?.model}`.trim()}
                  onChange={(e) => {
                    const [make, ...rest] = e.target.value.split(' ');
                    updateVehicle({ make: make || '', model: rest.join(' ') || '' });
                  }}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <User className="w-5 h-5 text-brand-blue" />
              Your Details
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none"
                value={booking.customer?.name}
                onChange={(e) => updateCustomer({ name: e.target.value })}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none"
                  value={booking.customer?.email}
                  onChange={(e) => updateCustomer({ email: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none"
                  value={booking.customer?.phone}
                  onChange={(e) => updateCustomer({ phone: e.target.value })}
                />
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Check className="w-5 h-5 text-status-success" />
              Review & Confirm
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex justify-between items-start border-b border-gray-200 pb-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Service</div>
                  <div className="font-bold text-brand-navy">{selectedService?.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Price</div>
                  <div className="font-bold text-brand-orange">{selectedService?.price}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Date & Time</div>
                  <div className="font-semibold">{booking.date} at {booking.time}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Vehicle</div>
                  <div className="font-semibold">{booking.vehicle?.year} {booking.vehicle?.make} {booking.vehicle?.model}</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">
              By confirming, you agree to our Terms of Service and Cancellation Policy.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-brand-navy p-6 flex justify-between items-center">
          <div>
            <h2 className="text-white text-2xl font-extrabold tracking-tight">BOOK YOUR SERVICE</h2>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div
                  key={i}
                  className={`h-1.5 w-8 rounded-full transition-all ${
                    i <= step ? 'bg-brand-orange' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 min-h-[400px]">
          {renderStep()}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`flex items-center gap-2 font-bold text-sm ${
              step === 1 ? 'text-gray-300' : 'text-brand-navy hover:text-brand-blue'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            BACK
          </button>
          
          {step < 5 ? (
            <button
              onClick={nextStep}
              className="bg-brand-blue hover:bg-brand-blue-deep text-white px-8 py-3 rounded-md font-bold text-sm flex items-center gap-2 transition-all"
            >
              CONTINUE
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                alert('Booking Confirmed! Check your email for details.');
                onClose();
              }}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-3 rounded-md font-bold text-sm flex items-center gap-2 transition-all shadow-lg"
            >
              CONFIRM BOOKING
              <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
