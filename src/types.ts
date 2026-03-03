export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  inclusions: string[];
}

export interface Booking {
  serviceId: string;
  date: string;
  time: string;
  vehicle: {
    make: string;
    model: string;
    year: string;
  };
  customer: {
    name: string;
    email: string;
    phone: string;
  };
}
