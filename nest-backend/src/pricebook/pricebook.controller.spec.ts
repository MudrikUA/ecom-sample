import { Test, TestingModule } from '@nestjs/testing';
import { PricebookController } from './pricebook.controller';

describe('PricebookController', () => {
  let controller: PricebookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricebookController],
    }).compile();

    controller = module.get<PricebookController>(PricebookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
