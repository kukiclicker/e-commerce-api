import { Product } from './product.model';
import { Model } from 'mongoose';
export declare class ProductsService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, description: string, price: number, size: string, color: string, origin: string): Promise<{
        message: string;
    }>;
    getProducts(): Promise<{
        id: any;
        title: string;
        description: string;
        price: number;
        size: string;
        color: string;
        origin: string;
    }[]>;
    getProduct(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        size: string;
        color: string;
        origin: string;
    }>;
    findProduct(id: string): Promise<Product>;
    deleteProduct(id: string): Promise<{
        message: string;
    }>;
    updateProduct(id: string, title: string, description: string, price: number, size: string, color: string, origin: string): Promise<{
        message: string;
    }>;
}
