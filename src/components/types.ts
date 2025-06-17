export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string | null;
  rating: number;
  reviews: number;
  image: string;
  discount: string | null;
}

export interface Category {
  name: string;
  image: string;
}