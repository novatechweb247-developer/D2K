export type PageId = 'home' | 'about' | 'services' | 'experience' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  keyPoints: string[];
  image: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Business' | 'Logistics' | 'Real Estate' | 'Project Management' | 'Consulting';
  description: string;
  status: 'Active Initiative' | 'Completed Engagement' | 'Strategic Partnership' | 'Ongoing Advisory';
  image: string;
  year: string;
}

export interface AssociatedVenture {
  name: string;
  handle: string;
  url: string;
  description: string;
  badge: string;
  image: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}
