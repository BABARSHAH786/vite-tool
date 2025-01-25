
export default interface IProduct {
    // id(id: any, arg1: number): void;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    tags: string[];
    image: string;
    available: boolean;
    quantity?: number;
  }
  