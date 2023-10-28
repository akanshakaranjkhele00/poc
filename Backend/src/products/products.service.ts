// src/orders/orders.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';
import { Product } from './products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private ProductRepository: ProductRepository,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.ProductRepository.find();
  }
}
