import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories.service';
import {MongooseModule} from '@nestjs/mongoose'
import { CategorySchema } from './schemas/category.schema';

export const USERNAME ='umitrovic22';
export const PASSWORD = 'vegaspro2';
export const DATABASE_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@e-commerce-db.67irktm.mongodb.net/category-service-db?retryWrites=true&w=majority`;


@Module({
  imports: [CategoriesModule,MongooseModule.forRoot(DATABASE_URL), MongooseModule.forFeature([{name:'Category',schema:CategorySchema}])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}