import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as supertest from 'supertest';
import { SuperTest, Test as AgentTest } from 'supertest';
import { INestApplication } from '@nestjs/common';

let app: INestApplication;
let request: SuperTest<AgentTest>;

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    appController = app.get<AppController>(AppController);
    request = supertest(app.getHttpServer());
  });

  describe('root', () => {
    it('app controller should exists', () => {
      expect(appController).toBeTruthy();
    });
  });

  describe('Controller', () => {
    it('should return message', async () => {
      await request
        .get('/')
        .expect(200)
        .then((res) => {
          expect(res.body.message).toBe('API Gama Teste');
          expect(res.body.code).toBe(200);
        });
    });
  });
});
