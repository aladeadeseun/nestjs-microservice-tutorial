/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PAYMENT_SERVICE_RABBITMQ } from 'apps/api-gateway/src/constant';

@Module({
  imports: [
    ClientsModule.register([{
      name: PAYMENT_SERVICE_RABBITMQ, 
      transport:Transport.RMQ,
      options:{
        urls:[`amqp://guest:${encodeURIComponent('rd12@sSwOrdBg')}@localhost:5672`],
        queue:"order_queue",
        queueOptions:{
          durable:true
        }
      }
    }])
  ],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
