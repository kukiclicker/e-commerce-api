import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './app.service';

describe('ProductsController', () => {
  let productsController: ProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    productsController = app.get<ProductsController>(ProductsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productsController.getHello()).toBe('Hello World!');
    });
  });
});
