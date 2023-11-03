import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products.service';
import {MongooseModule} from '@nestjs/mongoose'
import { ProductSchema } from './schemas/product.schema';

export const USERNAME ='umitrovic22';
export const PASSWORD = 'vegaspro2';
export const DATABASE_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@e-commerce-db.67irktm.mongodb.net/product-service-db?retryWrites=true&w=majority`;

@Module({
  imports: [ProductsModule,MongooseModule.forRoot(DATABASE_URL), MongooseModule.forFeature([{name:'Product',schema:ProductSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}