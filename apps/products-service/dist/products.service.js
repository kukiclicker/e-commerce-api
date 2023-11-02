"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
        this.products = [];
    }
    async insertProduct(title, description, price) {
        try {
            const prodId = Math.random().toString();
            const newProduct = new this.productModel({ title, description, price, });
            const result = await newProduct.save();
            console.log(result);
            return result.id;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getProducts() {
        const products = await this.productModel.find().exec();
        return products.map((prod) => ({ id: prod.id, title: prod.title, description: prod.description, price: prod.price }));
    }
    async getProduct(id) {
        const product = await this.findProduct(id);
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price
        };
    }
    async findProduct(id) {
        try {
            const product = await this.productModel.findById(id).exec();
            if (!product) {
                throw new common_1.NotFoundException(`Could not find product with id: ${id}. `);
            }
            return product;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Could not find product with id: ${id}. `);
        }
    }
    async deleteProduct(id) {
        try {
            const product = await this.productModel.findByIdAndDelete(id).exec();
            if (!product) {
                throw new common_1.NotFoundException(`Could not find product with id: ${id}. `);
            }
            return {
                message: `Product deleted!`
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(`Could not find product with id: ${id}. `);
        }
    }
    async updateProduct(id, title, description, price) {
        const updatedProduct = await this.findProduct(id);
        if (title) {
            updatedProduct.title = title;
        }
        if (description) {
            updatedProduct.description = description;
        }
        if (price) {
            updatedProduct.price = price;
        }
        updatedProduct.save();
        return {
            message: `Product updated!`
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
//# sourceMappingURL=products.service.js.map