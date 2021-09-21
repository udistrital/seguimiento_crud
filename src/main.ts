import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { environment } from './config/configuration';


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
  .setTitle('seguimiento_crud')
  .setDescription('API CRUD para el registro de ingreso y salida de espacios físicos de terceros para el cliente de alternancia.')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  fs.writeFileSync("./swagger.json", JSON.stringify(document));
  SwaggerModule.setup('swagger', app, document);
  
  
  await app.listen( parseInt(environment.HTTP_PORT,10) || 8080);
}
bootstrap();