export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: any; // Type for lucide-react icons
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface ContactInfoType {
  icon: any; // Type for lucide-react icons
  title: string;
  content: string | React.ReactNode;
}