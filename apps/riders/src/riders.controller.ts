import { Controller, Get } from '@nestjs/common';
import { RidersService } from './riders.service';

@Controller()
export class RidersController {
  constructor(private readonly ridersService: RidersService) {}

  @Get()
  getHello(): string {
    return this.ridersService.getHello();
  }
}
