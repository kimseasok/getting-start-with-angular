/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  productCode: string;
  category: string;
  tags?: string[];
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

export interface ProductResolved {
  tags?: any;
  product: Product;
  error?: any;
}
