import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { Product } from '../product/product.model';

interface CreateStockAttr {
  product_id: number;
  quantity: number;
}

@Table({ tableName: 'stocks' })
export class Stock extends Model<Stock, CreateStockAttr> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity: number;

  @BelongsTo(() => Product)
  product: Product;
}
