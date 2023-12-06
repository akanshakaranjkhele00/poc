import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
const cors =require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: 'http://13.53.33.52:3001/', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  };

  app.use(cors(corsOptions));
  await app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
bootstrap();
