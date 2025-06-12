export interface Product {
  id: string;
  name: string;
  category: 'mens' | 'womens' | 'kids';
  image: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}