/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDER_SERVICE_RABBITMQ } from './constant';

@Module({
	imports: [ClientsModule.register([
		{
			name: ORDER_SERVICE_RABBITMQ, 
			transport:Transport.RMQ,
			options:{
				urls:[`amqp://guest:${encodeURIComponent('rd12@sSwOrdBg')}@localhost:5672`],
				queue:"order_queue",
				queueOptions:{
					durable:true
				}
			}
		}
	])],
	controllers: [ApiGatewayController],
	providers: [ApiGatewayService],
})
export class ApiGatewayModule { }
