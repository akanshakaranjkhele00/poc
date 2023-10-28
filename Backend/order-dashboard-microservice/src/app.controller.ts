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
  OrdersController(): string {
    return this.appService.OrdersController();
  }
  @Get()
  ProductController(): string {
    return this.appService.ProductController();
  }
}
