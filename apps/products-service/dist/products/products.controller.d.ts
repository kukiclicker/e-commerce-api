import { ProductsService } from '../products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<{
        id: any;
        title: string;
        description: string;
        price: number;
    }[]>;
    insertNewProduct(title: string, description: string, price: number): Promise<any>;
    getProduct(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    deleteProduct(id: string): Promise<{
        message: string;
    }>;
    updateProduct(id: string, title: string, description: string, price: number): Promise<void>;
}
