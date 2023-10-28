import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('orders') 
@Controller('orders')
export class OrdersController {
  @Get(':orderid')
  @ApiOperation({ summary: 'Get order by ID' })
  @ApiParam({ name: 'orderid', description: 'Order ID' })
  getOrderById(@Param('orderid') orderid: string) {
    
    return {
      orderid,
      product: 'SampleProduct',
      quantity: 10,
      total: 100.00,
    };
  }
}
