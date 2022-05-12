import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configSwagger: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle('Back-end - BootCamp Gama')
    .setDescription('Back-end')
    .setVersion('1.0')
    .addTag('Back-end')
    .build();

  const documentSwagger: OpenAPIObject = SwaggerModule.createDocument(
    app,
    configSwagger,
  );
  SwaggerModule.setup('API', app, documentSwagger);

  await app.listen(3030);
}
bootstrap();
