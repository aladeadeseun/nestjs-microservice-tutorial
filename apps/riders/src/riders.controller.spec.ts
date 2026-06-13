import { Test, TestingModule } from '@nestjs/testing';
import { RidersController } from './riders.controller';
import { RidersService } from './riders.service';

describe('RidersController', () => {
  let ridersController: RidersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RidersController],
      providers: [RidersService],
    }).compile();

    ridersController = app.get<RidersController>(RidersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ridersController.getHello()).toBe('Hello World!');
    });
  });
});
