
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderID: string;

  @Column()
  product: string;

  @Column()
  quantity: number;

  @Column()
  total: string;
}
