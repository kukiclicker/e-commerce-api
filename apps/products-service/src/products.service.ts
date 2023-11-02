import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import{Product} from './product.model'
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class ProductsService {
  private products : Product [] = [];
  constructor(@InjectModel('Product') private readonly productModel:Model<Product>){
  }
  async insertProduct(title: string, description: string, price: number){
    try{
      const prodId = Math.random().toString();
      const newProduct = new this.productModel({title,description,price,});
      const result = await newProduct.save();
      console.log(result);
      return result.id;
    }catch(error){
      throw new BadRequestException(error.message);
    }
    
  }
  async getProducts(){
    const products = await this.productModel.find().exec();
    return products.map((prod)=>({id:prod.id,title:prod.title,description:prod.description,price:prod.price}));
  }
  async getProduct(id:string){
    const product = await this.findProduct(id);
    return {
      id:product.id, 
      title:product.title, 
      description:product.description,
      price:product.price
    }
  }
  async findProduct(id:string):Promise<Product>{
    try{
      const product = await this.productModel.findById(id).exec();
      if(!product){
        throw new NotFoundException(`Could not find product with id: ${id}. `)

      }
      return product;
    }catch(error){
      throw new NotFoundException(`Could not find product with id: ${id}. `)
    }
    
  }
  async deleteProduct(id:string){
    try{
    const product = await this.productModel.findByIdAndDelete(id).exec();
    if(!product){
      throw new NotFoundException(`Could not find product with id: ${id}. `)
    }
    return{
      message:`Product deleted!`
    }
    }catch(error){
      throw new NotFoundException(`Could not find product with id: ${id}. `)
    }
  }
  async updateProduct(id:string, title:string, description:string, price:number){
    const updatedProduct = await this.findProduct(id);
    if(title){
      updatedProduct.title = title;
    }
    if(description){
      updatedProduct.description = description;
    }
    if(price){
      updatedProduct.price = price;
    }
    updatedProduct.save();
    return {
      message:`Product updated!`
    }
  }
}
