import { Controller, Get } from '@nestjs/common';
import { OrderServiceService } from './order-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class OrderServiceController {
  constructor(private readonly orderServiceService: OrderServiceService) {}

  @Get()
  getHello(): string {
    return this.orderServiceService.getHello();
  }

  @MessagePattern('order-created')
  handleOrderCreated(@Payload() order: object) {
    console.log(order);
  }
}
