import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from '../categories.service';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories() {
    return await this.categoriesService.getCategories();
  }
}
