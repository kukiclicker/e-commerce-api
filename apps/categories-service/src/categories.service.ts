import {Model} from 'mongoose';
import { Category } from './category.model';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, HttpCode, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

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
  async isNameUnique(name:string){
    const categoriesCount = await this.categoryModel.find({name:name}).count();
    return categoriesCount>0?false:true;
  }
  async createCategory(name: string, description: string){
    try{
      const categoryID = Math.random().toString();
      const newCategory = new this.categoryModel({name,description});
      const result = await newCategory.save();
      console.log(result);
      return {
        message:`Category created!`
      }
    }catch(error){
      throw new BadRequestException(error.message);
    }
    
  }
  async getCategory(id:string){
    const category = await this.findCategory(id);
    return {
      id:category.id, 
      name:category.name, 
      description:category.description,
    }
  }
  async findCategory(id:string):Promise<Category>{
    try{
      const category = await this.categoryModel.findById(id).exec();
      if(!category){
        throw new NotFoundException(`Could not find category with id: ${id}. `)

      }
      return category;
    }catch(error){
      throw new NotFoundException(`Could not find category with id: ${id}. `)
    }
  }
  async deleteCategory(id:string){
    try{
    const category = await this.categoryModel.findByIdAndDelete(id).exec();
    if(!category){
      throw new NotFoundException(`Could not find category with id: ${id}. `)
    }
    return{
      message:`Category deleted!`
    }
    }catch(error){
      throw new NotFoundException(`Could not find category with id: ${id}. `)
    }
  }
  async updateCategory(id:string, name:string, description:string){
    const updatedCategory = await this.findCategory(id);
    if(name){
      updatedCategory.name = name;
    }
    if(description){
      updatedCategory.description = description;
    }
    updatedCategory.save();
    if(name||description){
      return {
        message:`Category updated!`
      }
    }
  }
}
