import { Controller, Get, Post, Body, Param, Delete, Patch, BadRequestException} from '@nestjs/common';
import { CategoriesService } from '../categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories() {
    return await this.categoriesService.getCategories();
  }
  @Post()
  async createNewCategory(
    @Body('name') name:string,
    @Body('description') description:string,
  ){
    var uniqueName = await this.categoriesService.isNameUnique(name);
    if(!uniqueName){
      throw new BadRequestException('Title of product must be unique');
    }
    const result = this.categoriesService.createCategory(name,description);
    return result;
  }
  @Get(":id")
  async getCategory(@Param('id') id:string){
    return this.categoriesService.getCategory(id);
  }
  @Delete(':id')
  async deleteCategory(@Param('id') id:string){
      return this.categoriesService.deleteCategory(id);
  }
  @Patch(':id')
  async updateProduct(
    @Param('id') id:string,
    @Body('name') name:string,
    @Body('description') description:string){
    return await this.categoriesService.updateCategory(id,name,description);
  }
}