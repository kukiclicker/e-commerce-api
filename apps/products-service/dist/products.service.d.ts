import { Product } from './product.model';
import { Model } from 'mongoose';
export declare class ProductsService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, description: string, price: number): Promise<any>;
    getProducts(): Promise<{
        id: any;
        title: string;
        description: string;
        price: number;
    }[]>;
    getProduct(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    findProduct(id: string): Promise<Product>;
    deleteProduct(id: string): Promise<{
        message: string;
    }>;
    updateProduct(id: string, title: string, description: string, price: number): Promise<{
        message: string;
    }>;
}
