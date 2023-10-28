import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductController {
  @Get()
  findAll() {
    
    const products = [
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
    return products;
  }
}
