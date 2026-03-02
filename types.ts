
export interface Service {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  duration?: string;
  highlighted?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  hours: { [key: string]: string };
  planityUrl: string;
  instagram: string;
  facebook: string;
}

export interface WellnessTip {
  title: string;
  content: string;
}
