import { ProductsService } from '../products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<{
        id: any;
        title: string;
        description: string;
        price: number;
        size: string;
        color: string;
        origin: string;
    }[]>;
    insertNewProduct(title: string, description: string, price: number, size: string, color: string, origin: string): Promise<{
        message: string;
    }>;
    getProduct(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
        size: string;
        color: string;
        origin: string;
    }>;
    deleteProduct(id: string): Promise<{
        message: string;
    }>;
    updateProduct(id: string, title: string, description: string, price: number, size: string, color: string, origin: string): Promise<{
        message: string;
    }>;
}
