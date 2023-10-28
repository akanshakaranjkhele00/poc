import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private static products = [
    {
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
    },
    {
      name: "Product 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 24.99,
    },
    
  ];

  // getHello(): string {
  //   return 'Hello World!';
  // }
  ProductController():any {
    return AppService.products;
  }
}
