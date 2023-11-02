import { Body, Controller, Get, Param, Post,Delete, Patch } from '@nestjs/common';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('fetch')
  async getAllProducts() {
    return await this.productsService.getProducts();
  }
  @Post()
  insertNewProduct(
    @Body('title') title:string,
    @Body('description') description:string,
    @Body('price') price:number,
  ){
    const id = this.productsService.insertProduct(title,description,price);
    return id;
  }
  @Get(":id")
  async getProduct(@Param('id') id:string){
    return this.productsService.getProduct(id);
  }
  @Delete('delete/:id')
  async deleteProduct(@Param('id') id:string){
      return this.productsService.deleteProduct(id);
  }
  @Patch('update/:id')
  async updateProduct(
    @Param('id') id:string,
    @Body('title') title:string,
    @Body('description')description:string,
    @Body('price')price:number){
    await this.productsService.updateProduct(id,title,description,price);
  }
  
}
