/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ApiGatewayModule } from 'apps/api-gateway/src/api-gateway.module';

async function bootstrap() {
  //const app = await NestFactory.create(OrderServiceModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ApiGatewayModule, {
    transport:Transport.RMQ,
    options:{
      urls:[`amqp://guest:${encodeURIComponent('rd12@sSwOrdBg')}@localhost:5672`],
      queue:"order_queue",
      queueOptions:{
        durable:true
      }
    }
  })
  await app.listen();
  console.log(`Application is running on: RabbitMQ...`)
}
bootstrap();
