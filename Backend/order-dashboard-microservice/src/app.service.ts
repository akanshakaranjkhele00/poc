import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ProductController(): string {
    throw new Error('Method not implemented.');
  }
  private static orders = [
    {
      orderId: '123',
      product: 'Product A',
      quantity: 10,
      total: 100.00,
    },
    {
      orderId: '124',
      product: 'Product B',
      quantity: 5,
      total: 50.00,
    },
  ];
  // getHello(): string {
  //   return 'Hello World!';
  // }
  OrdersController():any {
    return AppService.orders;
  }
}

