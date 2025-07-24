import { Test, TestingModule } from '@nestjs/testing';
import { ShippingMethodController } from './shipping-method.controller';

describe('ShippingMethodController', () => {
  let controller: ShippingMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingMethodController],
    }).compile();

    controller = module.get<ShippingMethodController>(ShippingMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
