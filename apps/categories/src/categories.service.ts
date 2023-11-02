import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { Category } from './category.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel('Category') private readonly categoryModel:Model<Category>){
  }
  async getCategories(){
    const categories = await this.categoryModel.find().exec();
    return categories.map((cat)=>({
      id:cat.id,
      name:cat.name,
      description:cat.description,
    }));
  }
}
