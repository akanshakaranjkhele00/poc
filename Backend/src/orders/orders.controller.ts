
import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  findAll() {
    
    const orders = [
      {
        orderId: '12345',
        product: 'Product A',
        quantity: 10,
        total: 100.00,
      },
      {
        orderId: '54321',
        product: 'Product B',
        quantity: 5,
        total: 50.00,
      },
      
    ];
    return orders;
  }
}
