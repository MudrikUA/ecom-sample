import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Product } from '../product/product.model';

interface BrandCreationAttrs {
  name: string;
  country: string;
  description: string;
}

@Table({ tableName: 'brands', createdAt: false, updatedAt: false })
export class Brand extends Model<Brand, BrandCreationAttrs> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.STRING })
  country: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @HasMany(() => Product, { as: "products" })
  products: Product[];
}
