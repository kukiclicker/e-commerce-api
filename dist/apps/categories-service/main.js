/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/categories-service/src/categories.module.ts":
/*!**********************************************************!*\
  !*** ./apps/categories-service/src/categories.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesModule = exports.DATABASE_URL = exports.PASSWORD = exports.USERNAME = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const categories_controller_1 = __webpack_require__(/*! ./categories/categories.controller */ "./apps/categories-service/src/categories/categories.controller.ts");
const categories_service_1 = __webpack_require__(/*! ./categories.service */ "./apps/categories-service/src/categories.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const category_schema_1 = __webpack_require__(/*! ./schemas/category.schema */ "./apps/categories-service/src/schemas/category.schema.ts");
exports.USERNAME = 'umitrovic22';
exports.PASSWORD = 'vegaspro2';
exports.DATABASE_URL = `mongodb+srv://${exports.USERNAME}:${exports.PASSWORD}@e-commerce-db.67irktm.mongodb.net/category-service-db?retryWrites=true&w=majority`;
let CategoriesModule = class CategoriesModule {
};
exports.CategoriesModule = CategoriesModule;
exports.CategoriesModule = CategoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [CategoriesModule, mongoose_1.MongooseModule.forRoot(exports.DATABASE_URL), mongoose_1.MongooseModule.forFeature([{ name: 'Category', schema: category_schema_1.CategorySchema }])],
        controllers: [categories_controller_1.CategoriesController],
        providers: [categories_service_1.CategoriesService],
    })
], CategoriesModule);


/***/ }),

/***/ "./apps/categories-service/src/categories.service.ts":
/*!***********************************************************!*\
  !*** ./apps/categories-service/src/categories.service.ts ***!
  \***********************************************************/
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
exports.CategoriesService = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const mongoose_2 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CategoriesService = class CategoriesService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async getCategories() {
        const categories = await this.categoryModel.find().exec();
        return categories.map((cat) => ({
            id: cat.id,
            name: cat.name,
            description: cat.description,
        }));
    }
    async isNameUnique(name) {
        const categoriesCount = await this.categoryModel.find({ name: name }).count();
        return categoriesCount > 0 ? false : true;
    }
    async createCategory(name, description) {
        try {
            const categoryID = Math.random().toString();
            const newCategory = new this.categoryModel({ name, description });
            const result = await newCategory.save();
            console.log(result);
            return {
                message: `Category created!`
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getCategory(id) {
        const category = await this.findCategory(id);
        return {
            id: category.id,
            name: category.name,
            description: category.description,
        };
    }
    async findCategory(id) {
        try {
            const category = await this.categoryModel.findById(id).exec();
            if (!category) {
                throw new common_1.NotFoundException(`Could not find category with id: ${id}. `);
            }
            return category;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Could not find category with id: ${id}. `);
        }
    }
    async deleteCategory(id) {
        try {
            const category = await this.categoryModel.findByIdAndDelete(id).exec();
            if (!category) {
                throw new common_1.NotFoundException(`Could not find category with id: ${id}. `);
            }
            return {
                message: `Category deleted!`
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(`Could not find category with id: ${id}. `);
        }
    }
    async updateCategory(id, name, description) {
        const updatedCategory = await this.findCategory(id);
        if (name) {
            updatedCategory.name = name;
        }
        if (description) {
            updatedCategory.description = description;
        }
        updatedCategory.save();
        if (name || description) {
            return {
                message: `Category updated!`
            };
        }
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Category')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], CategoriesService);


/***/ }),

/***/ "./apps/categories-service/src/categories/categories.controller.ts":
/*!*************************************************************************!*\
  !*** ./apps/categories-service/src/categories/categories.controller.ts ***!
  \*************************************************************************/
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
exports.CategoriesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const categories_service_1 = __webpack_require__(/*! ../categories.service */ "./apps/categories-service/src/categories.service.ts");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async getCategories() {
        return await this.categoriesService.getCategories();
    }
    async createNewCategory(name, description) {
        var uniqueName = await this.categoriesService.isNameUnique(name);
        if (!uniqueName) {
            throw new common_1.BadRequestException('Title of product must be unique');
        }
        const result = this.categoriesService.createCategory(name, description);
        return result;
    }
    async getCategory(id) {
        return this.categoriesService.getCategory(id);
    }
    async deleteCategory(id) {
        return this.categoriesService.deleteCategory(id);
    }
    async updateProduct(id, name, description) {
        return await this.categoriesService.updateCategory(id, name, description);
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "createNewCategory", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "deleteCategory", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateProduct", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [typeof (_a = typeof categories_service_1.CategoriesService !== "undefined" && categories_service_1.CategoriesService) === "function" ? _a : Object])
], CategoriesController);


/***/ }),

/***/ "./apps/categories-service/src/schemas/category.schema.ts":
/*!****************************************************************!*\
  !*** ./apps/categories-service/src/schemas/category.schema.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategorySchema = void 0;
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
exports.CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
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
/*!*********************************************!*\
  !*** ./apps/categories-service/src/main.ts ***!
  \*********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const categories_module_1 = __webpack_require__(/*! ./categories.module */ "./apps/categories-service/src/categories.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(categories_module_1.CategoriesModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;