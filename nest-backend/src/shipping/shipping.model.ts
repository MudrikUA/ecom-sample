import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from '../order/order.model';
import { ShippingMethod } from '../shipping-method/shipping-method.model';
// import { ShippingStatus } from '../shipping-method/shipping-status.model';

interface ShippingAttr {
  order_id: number;
  //customer_full_name: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_phone: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  status: string;
  shipping_method_id: number;
  shipped_at: Date;
  notes: string;
}

@Table({ tableName: 'shippings' })
export class Shipping extends Model<Shipping, ShippingAttr> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Order)
  @Column
  order_id: number;

  // @Column({ type: DataType.STRING, allowNull: false })
  // customer_full_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  customer_first_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  customer_last_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  customer_phone: string;

  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @Column({ type: DataType.STRING, allowNull: false })
  city: string;

  @Column({ type: DataType.STRING, allowNull: false })
  postal_code: string;

  @Column({ type: DataType.STRING, allowNull: false })
  country: string;

  @Column({ type: DataType.STRING, allowNull: false })
  status: string;

  @Column({ type: DataType.STRING})
  notes: string;

  @ForeignKey(() => ShippingMethod)
  @Column
  shipping_method_id: number;

  @Column({ type: DataType.STRING, unique: true })
  tracking_number: string;

  // @ForeignKey(() => ShippingStatus)
  // @Column
  // shipping_status_id: number;

  // @Column({ type: DataType.DATE })
  // estimated_delivery_date: Date;

  @Column({ type: DataType.DATE })
  shipped_at: Date;

  @Column({ type: DataType.DATE })
  delivered_at: Date;

  @BelongsTo(() => ShippingMethod)
  shippingMethod: ShippingMethod;
}
