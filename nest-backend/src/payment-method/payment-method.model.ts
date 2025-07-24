import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Payment } from '../payment/payment.model';

interface CreatePaymentAttr {
  name: string;
  description: string;
  fee: number;
}

@Table({ tableName: 'payment_methods', createdAt: false, updatedAt: false })
export class PaymentMethod extends Model<PaymentMethod, CreatePaymentAttr> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.FLOAT, defaultValue: 0 })
  fee: number;
  
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;

  @HasMany(() => Payment)
  payments: Payment[];
}
