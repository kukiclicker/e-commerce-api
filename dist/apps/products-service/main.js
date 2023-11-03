/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/products-service/src/products.module.ts":
/*!******************************************************!*\
  !*** ./apps/products-service/src/products.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsModule = exports.DATABASE_URL = exports.PASSWORD = exports.USERNAME = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_controller_1 = __webpack_require__(/*! ./products/products.controller */ "./apps/products-service/src/products/products.controller.ts");
const products_service_1 = __webpack_require__(/*! ./products.service */ "./apps/products-service/src/products.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const product_schema_1 = __webpack_require__(/*! ./schemas/product.schema */ "./apps/products-service/src/schemas/product.schema.ts");
exports.USERNAME = 'umitrovic22';
exports.PASSWORD = 'vegaspro2';
exports.DATABASE_URL = `mongodb+srv://${exports.USERNAME}:${exports.PASSWORD}@e-commerce-db.67irktm.mongodb.net/product-service-db?retryWrites=true&w=majority`;
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [ProductsModule, mongoose_1.MongooseModule.forRoot(exports.DATABASE_URL), mongoose_1.MongooseModule.forFeature([{ name: 'Product', schema: product_schema_1.ProductSchema }])],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService],
    })
], ProductsModule);


/***/ }),

/***/ "./apps/products-service/src/products.service.ts":
/*!*******************************************************!*\
  !*** ./apps/products-service/src/products.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async createProduct(title, description, price, size, color, origin) {
        try {
            const prodId = Math.random().toString();
            const newProduct = new this.productModel({ title, description, price, size, color, origin });
            const result = await newProduct.save();
            console.log(result);
            return {
                message: `Product created!`
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getProducts() {
        const products = await this.productModel.find().exec();
        return products.map((prod) => ({
            id: prod.id,
            title: prod.title,
            description: prod.description,
            price: prod.price,
            size: prod.size,
            color: prod.color,
            origin: prod.origin
        }));
    }
    async getProduct(id) {
        const product = await this.findProduct(id);
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            size: product.size,
            color: product.color,
            origin: product.origin
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
    async updateProduct(id, title, description, price, size, color, origin) {
        const updatedProduct = await this.findProduct(id);
        let updated = false;
        if (title) {
            updatedProduct.title = title;
        }
        if (description) {
            updatedProduct.description = description;
        }
        if (price) {
            updatedProduct.price = price;
        }
        if (size) {
            updatedProduct.size = size;
        }
        if (color) {
            updatedProduct.color = color;
        }
        if (origin) {
            updatedProduct.origin = origin;
        }
        updatedProduct.save();
        if (title || description || price || size || color || origin) {
            return {
                message: `Product updated!`
            };
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ProductsService);


/***/ }),

/***/ "./apps/products-service/src/products/products.controller.ts":
/*!*******************************************************************!*\
  !*** ./apps/products-service/src/products/products.controller.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_service_1 = __webpack_require__(/*! ../products.service */ "./apps/products-service/src/products.service.ts");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getAllProducts() {
        return await this.productsService.getProducts();
    }
    insertNewProduct(title, description, price, size, color, origin) {
        const result = this.productsService.createProduct(title, description, price, size, color, origin);
        return result;
    }
    async getProduct(id) {
        return this.productsService.getProduct(id);
    }
    async deleteProduct(id) {
        return this.productsService.deleteProduct(id);
    }
    async updateProduct(id, title, description, price, size, color, origin) {
        return await this.productsService.updateProduct(id, title, description, price, size, color, origin);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)('fetch'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('title')),
    __param(1, (0, common_1.Body)('description')),
    __param(2, (0, common_1.Body)('price')),
    __param(3, (0, common_1.Body)('size')),
    __param(4, (0, common_1.Body)('color')),
    __param(5, (0, common_1.Body)('origin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, String, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "insertNewProduct", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('title')),
    __param(2, (0, common_1.Body)('description')),
    __param(3, (0, common_1.Body)('price')),
    __param(4, (0, common_1.Body)('size')),
    __param(5, (0, common_1.Body)('color')),
    __param(6, (0, common_1.Body)('origin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String, String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof products_service_1.ProductsService !== "undefined" && products_service_1.ProductsService) === "function" ? _a : Object])
], ProductsController);


/***/ }),

/***/ "./apps/products-service/src/schemas/product.schema.ts":
/*!*************************************************************!*\
  !*** ./apps/products-service/src/schemas/product.schema.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductSchema = void 0;
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    origin: { type: String, required: true }
});


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************************!*\
  !*** ./apps/products-service/src/main.ts ***!
  \*******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const products_module_1 = __webpack_require__(/*! ./products.module */ "./apps/products-service/src/products.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(products_module_1.ProductsModule);
    await app.listen(3005);
}
bootstrap();

})();

/******/ })()
;