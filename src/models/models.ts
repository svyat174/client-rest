export interface IProduct {
  id: number;
  title: string;
  slug: string;
  categoryId: number;
  article: string;
  price: number;
  image: string;
  description: string;
  remains: boolean;
  Sale?: any;
}

export interface IProductResponse<T> {
  products: T[];
}