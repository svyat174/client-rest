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
  orderItems: OrderItem[]
  Sale?: any;
}

export interface IProductResponse<T> {
  products: T[];
}

export interface OrderItem {
  id: number;
  count: number;
  amount: number;
  orderId: number;
  productId: number;
}