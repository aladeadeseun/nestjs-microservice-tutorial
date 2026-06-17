/* eslint-disable prettier/prettier */


import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Post()
  createOrder(@Body() order: object){
    this.apiGatewayService.emitCreateOrder(order)

    return {message: "Order sent to RabbitMQ", order}
  }
}
