import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path:'/' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getHello(): Promise<{ message: string }> {
    return await this.appService.getHello();
  }
}
