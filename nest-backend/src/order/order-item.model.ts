import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { Order } from './order.model';
import { Product } from '../product/product.model';

interface OrderItemCreationAttrs {
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  currency: string;
}

@Table({ tableName: 'order_items' })
export class OrderItem extends Model<OrderItem, OrderItemCreationAttrs> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Order)
  @Column
  order_id: number;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  price: number;

  @Column({ type: DataType.STRING, allowNull: false })
  currency: string;

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => Product)
  product: Product;
}
