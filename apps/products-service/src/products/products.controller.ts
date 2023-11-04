import { Body, Controller, Get, Param, Post,Delete, Patch, BadRequestException } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return await this.productsService.getProducts();
  }
  @Post()
  async insertNewProduct(
    @Body('title') title:string,
    @Body('description') description:string,
    @Body('price') price:number,
    @Body('size') size:string,
    @Body('color') color:string,
    @Body('origin') origin:string,

  ){
    var uniqueTitle = await this.productsService.isTitleUnique(title);
    if(!uniqueTitle){
      throw new BadRequestException('Title of product must be unique');
    }
    const result = await this.productsService.createProduct(title,description,price,size,color,origin);
    return result;
  }
  @Get(":id")
  async getProduct(@Param('id') id:string){
    return this.productsService.getProduct(id);
  }
  @Delete(':id')
  async deleteProduct(@Param('id') id:string){
      return this.productsService.deleteProduct(id);
  }
  @Patch(':id')
  async updateProduct(
    @Param('id') id:string,
    @Body('title') title:string,
    @Body('description')description:string,
    @Body('price')price:number,
    @Body('size')size:string,
    @Body('color')color:string,
    @Body('origin')origin:string){
    return await this.productsService.updateProduct(id,title,description,price,size,color,origin);
  }
  
}