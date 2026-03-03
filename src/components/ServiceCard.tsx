import React from 'react';
import { Service } from '../types';
import { Check, ArrowRight, Clock } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onBook: () => void;
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden card-shadow card-shadow-hover flex flex-col h-full group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-brand-navy/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {service.duration}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-navy mb-2">{service.name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
        
        <div className="space-y-2 mb-6 flex-grow">
          {service.inclusions.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-status-success mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
          {service.inclusions.length > 3 && (
            <p className="text-xs text-brand-blue font-medium">+ {service.inclusions.length - 3} more inclusions</p>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-lg font-bold text-brand-orange">{service.price}</span>
          <button
            onClick={() => onBook()}
            className="text-brand-blue font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            BOOK NOW
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
