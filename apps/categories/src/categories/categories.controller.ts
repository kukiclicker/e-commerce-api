import { Controller, Get, Post, Body, Param, Delete, Patch} from '@nestjs/common';
import { CategoriesService } from '../categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('fetch')
  async getCategories() {
    return await this.categoriesService.getCategories();
  }
  @Post()
  insertNewProduct(
    @Body('name') name:string,
    @Body('description') description:string,
  ){
    const result = this.categoriesService.createCategory(name,description);
    return result;
  }
  @Get(":id")
  async getProduct(@Param('id') id:string){
    return this.categoriesService.getProduct(id);
  }
  @Delete('delete/:id')
  async deleteCategory(@Param('id') id:string){
      return this.categoriesService.deleteCategory(id);
  }
  @Patch('update/:id')
  async updateProduct(
    @Param('id') id:string,
    @Body('name') name:string,
    @Body('description') description:string){
    return await this.categoriesService.updateProduct(id,name,description);
  }
}
