import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Product } from '../product/product.model';

interface CreatePriceBookAttr {
  product_id: number;
  price: number;
  currency: string;
}

@Table({ tableName: 'price_books', createdAt: false, updatedAt: false})
export class PriceBook extends Model<PriceBook, CreatePriceBookAttr> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  price: number;

  @Column({ type: DataType.STRING, allowNull: false })
  currency: string;

  @BelongsTo(() => Product)
  product: Product;
}
