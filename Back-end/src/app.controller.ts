import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';

@ApiTags('Default')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @ApiOperation({ summary: 'Initial route' })
  @ApiResponse({
    status: 200,
    description: 'Initial route',
  })
  initial(@Res() res: Response) {
    return res.status(HttpStatus.OK).json({
      message: 'API Gama Teste',
      code: HttpStatus.OK,
    });
  }
}
