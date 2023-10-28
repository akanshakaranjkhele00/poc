import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Retail Shop')
    .setDescription('Retail Shop')
    .setVersion('1.0')
    .addTag('Retail Shop')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Define the CORS options
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3001', // Specify your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // The HTTP methods to allow
    credentials: true, // Set this to true if your frontend includes credentials like cookies
  };

  // Enable CORS with the specified options
  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
