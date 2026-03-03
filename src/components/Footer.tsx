import React from 'react';
import { Car, Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Car className="w-8 h-8 text-brand-orange" />
              <span className="font-extrabold text-2xl tracking-tighter">FAST TRACK</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium automotive care delivered with speed, precision, and expertise. Your vehicle deserves the best.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Service Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Service Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Paint Protection Film</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Ceramic Coating</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Car Wash</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Wrapping</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Hydro Dipping</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span>1355/F, Rd Number 45<br />Nandagiri Hills, Jubilee Hills<br />Hyderabad, Telangana 500033</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>+91 73525 25252</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span>service@fasttrackcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 Fast Track Car Care. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
