/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { ORDER_SERVICE_RABBITMQ } from './constant';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject(ORDER_SERVICE_RABBITMQ)
    private readonly client: ClientProxy
  ){

  }
  getHello(): string {
    return 'Hello World! api-gatewway';
  }

  emitCreateOrder(order:any){
    console.log("I was called")
    this.client.emit("order-created", order)
  }
}
