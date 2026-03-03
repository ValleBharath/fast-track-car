import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'exterior-wash',
    name: 'Professional Exterior Wash',
    description: 'High-pressure cleaning and hand-wash for a showroom shine.',
    price: 'Starting from $45',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800',
    inclusions: [
      'High-pressure pre-wash',
      'Hand wash with premium shampoo',
      'Wheel and tire cleaning',
      'Exterior window cleaning',
      'Hand dry with microfiber'
    ]
  },
  {
    id: 'interior-detail',
    name: 'Luxury Interior Detail',
    description: 'Deep cleaning and conditioning of all interior surfaces.',
    price: 'Starting from $120',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    inclusions: [
      'Full vacuuming',
      'Steam cleaning of upholstery',
      'Leather conditioning',
      'Dashboard and console detailing',
      'Odor elimination'
    ]
  },
  {
    id: 'vehicle-wrap',
    name: 'Premium Vehicle Wrap',
    description: 'Custom vinyl wrapping for protection and style.',
    price: 'Request Quote',
    duration: '2-3 days',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    inclusions: [
      'Full surface preparation',
      'Premium 3M or Avery vinyl',
      'Precision edge trimming',
      'Heat-set finishing',
      '5-year warranty'
    ]
  },
  {
    id: 'mechanical-service',
    name: 'Precision Mechanical Service',
    description: 'Expert diagnostics and repairs for all vehicle makes.',
    price: 'Starting from $150',
    duration: 'Varies',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800',
    inclusions: [
      'Full system diagnostics',
      'Oil and filter change',
      'Brake inspection',
      'Fluid top-ups',
      'Safety certificate'
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'James Wilson',
    role: 'Luxury Car Owner',
    content: 'The attention to detail at Fast Track is unmatched. My interior looks better than the day I bought it.',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    role: 'Daily Commuter',
    content: 'Fast, reliable, and professional. The online booking system makes my life so much easier.',
    rating: 5
  },
  {
    name: 'Michael Ross',
    role: 'Fleet Manager',
    content: 'We trust Fast Track with our entire corporate fleet. Their mechanical expertise is top-notch.',
    rating: 5
  }
];
