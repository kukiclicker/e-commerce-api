import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import { Injectable } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  await app.listen(3005);
}
bootstrap();
