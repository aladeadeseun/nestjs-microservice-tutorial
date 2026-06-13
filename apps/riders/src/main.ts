import { NestFactory } from '@nestjs/core';
import { RidersModule } from './riders.module';

async function bootstrap() {
  const app = await NestFactory.create(RidersModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
