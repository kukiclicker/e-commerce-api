import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import{Product} from './product.model'
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel:Model<Product>){
  }
  async createProduct(title: string, description: string, price: number, size: string, color:string, origin: string){
    try{
      const prodId = Math.random().toString();
      const newProduct = new this.productModel({title,description,price,size,color,origin});
      const result = await newProduct.save();
      console.log(result);
      return {
        message:`Product created!`
      }
    }catch(error){
      throw new BadRequestException(error.message);
    }
    
  }
  async getProducts(){
    const products = await this.productModel.find().exec();
    return products.map((prod)=>({
      id:prod.id,
      title:prod.title,
      description:prod.description,
      price:prod.price, 
      size:prod.size, 
      color:prod.color,
      origin:prod.origin
    }));
  }
  async getProduct(id:string){
    const product = await this.findProduct(id);
    return {
      id:product.id, 
      title:product.title, 
      description:product.description,
      price:product.price,
      size:product.size, 
      color:product.color,
      origin:product.origin
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
  async updateProduct(id:string, title:string, description:string, price:number,size: string, color: string, origin:string){
    const updatedProduct = await this.findProduct(id);
    let updated = false;
    if(title){
      updatedProduct.title = title;
    }
    if(description){
      updatedProduct.description = description;
    }
    if(price){
      updatedProduct.price = price;
    }
    if(size){
      updatedProduct.size = size;
    }
    if(color){
      updatedProduct.color = color;
    }
    if(origin){
      updatedProduct.origin = origin;
    }
    updatedProduct.save();
    if(title||description||price||size||color||origin){
      return {
        message:`Product updated!`
      }
    }
  }
}
