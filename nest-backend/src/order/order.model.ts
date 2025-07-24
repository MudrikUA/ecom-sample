import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { OrderItem } from '../order/order-item.model';
import { Shipping } from '../shipping/shipping.model';
import { Payment } from '../payment/payment.model';

interface OrderCreationAttrs {
  user_id: number;
  total_price: number;
  currency: string;
  status: string;
}

@Table({ tableName: 'orders' })
export class Order extends Model<Order, OrderCreationAttrs> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  total_price: number;

  @Column({ type: DataType.STRING, allowNull: false })
  currency: string;

  @Column({ type: DataType.STRING, allowNull: false })
  status: string;

  @ForeignKey(() => Shipping)
  @Column
  shipping_id: number;

  @ForeignKey(() => Payment)
  @Column
  payment_id: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Shipping)
  shipping: Shipping;

  @BelongsTo(() => Payment)
  payment: Payment;

  @HasMany(() => OrderItem)
  items: OrderItem[];
}
