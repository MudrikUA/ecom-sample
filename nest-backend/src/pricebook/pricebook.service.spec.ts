import { Test, TestingModule } from '@nestjs/testing';
import { PricebookService } from './pricebook.service';

describe('PricebookService', () => {
  let service: PricebookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PricebookService],
    }).compile();

    service = module.get<PricebookService>(PricebookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
