import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Shipping } from '../shipping/shipping.model';

@Table({ tableName: 'shipping_statuses' })
export class ShippingStatus extends Model<ShippingStatus> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @HasMany(() => Shipping)
  shippings: Shipping[];
}
