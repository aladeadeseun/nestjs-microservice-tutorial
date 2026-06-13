import { Injectable } from '@nestjs/common';

@Injectable()
export class RidersService {
  getHello(): string {
    return 'Hello World!';
  }
}
