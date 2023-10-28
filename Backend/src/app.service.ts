import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
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

  private static product= [
    {
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
    },
    {
      name: 'Product 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 24.99,
    },
    // Add more products as needed
  ];

  // getHello(): string {
  //   return 'Hello World!';
  // }
  OrdersController():any {
    return AppService.orders;
  }

  ProductController():any{
    return AppService.product;
  }
}
