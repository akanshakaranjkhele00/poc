import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
   @Get(':name')
  @ApiOperation({  })
  // @ApiParam({ name: 'name', description: 'name' })
  get() {
    return [
      {
        name: "Mobile",
        description: "Galaxy s7.",
        price: 19.99,
      },
      {
        name: "Phone",
        description:
          "iphone",
        price: 24.99,
      },
      {
        name: "Redmi",
        description: "Galaxy s7.",
        price: 19.99,
      },
      {
        name: "Galaxy",
        description:
          "iphone",
        price: 24.99,
      },
      
    ];
    
  }
}
