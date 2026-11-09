export interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  fallbackImage?: string;
  badge?: string;
  flavorProfile: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  nutritionalHighlights: string[];
  ingredients: string;
  netWeight?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface FactItem {
  id: string;
  title: string;
  image: string;
  description?: string;
}

