import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Shipping } from '../shipping/shipping.model';

interface CreateShippingMethodAttr {
  name: string;
  delivery_time: string;
  cost: number;
  description: string;
}

@Table({ tableName: 'shipping_methods' })
export class ShippingMethod extends Model<ShippingMethod, CreateShippingMethodAttr> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.STRING })
  delivery_time: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.FLOAT, defaultValue: 0 })
  cost: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;

  @HasMany(() => Shipping)
  shippings: Shipping[];
}
