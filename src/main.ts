import { ConfigService } from '@nestjs/config'; // 追加
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService(); // 追加

  const sync = configService.get('DB_SYNC'); // 追加
  console.log(`TypeORM synchronize is [ ${sync} ]`); // 追加

  const port = configService.get('API_PORT'); // 追加
  await app.listen(port); // 3000をportに変更
}
bootstrap();
