import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxFJIEJnynvihoqcJQ2D1_IQhzWOruQwEKL_v9lvrETXECwzRV-_CCKbAqG2f3fQuM4/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using no-cors mode as required for Google Apps Script redirects
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({ name: '', email: '', service: 'General Inquiry', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 ml-1">Full Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 ml-1">Email Address</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 ml-1">Interested Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all appearance-none"
        >
          <option>General Inquiry</option>
          <option>Paint Protection Film</option>
          <option>Ceramic Coating</option>
          <option>Car Wash</option>
          <option>Wrapping</option>
          <option>Hydro Dipping</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 ml-1">Message</label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="How can we help you?"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all ${
          status === 'success' 
            ? 'bg-status-success text-white' 
            : status === 'error'
            ? 'bg-status-error text-white'
            : 'bg-brand-navy text-white hover:bg-brand-blue'
        }`}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle2 className="w-4 h-4" />
            Message Sent!
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
      
      {status === 'error' && (
        <p className="text-center text-[10px] text-status-error font-bold uppercase tracking-widest">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
