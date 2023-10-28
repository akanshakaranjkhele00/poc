import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  OrdersController(): any {
    return this.appService.OrdersController();
  }
  @Get()
  ProductController(): any {
    return this.appService.ProductController();
  }
}
