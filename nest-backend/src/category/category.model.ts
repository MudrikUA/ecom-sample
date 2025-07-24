import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Product } from '../product/product.model';

interface CategoryCreateAttr {
  name: string;
  alias: string;
  type: string;
  parent_id: number;
}

@Table({ tableName: 'categories', createdAt: false, updatedAt: false})
export class Category extends Model<Category, CategoryCreateAttr> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  alias: string;

  @Column({ type: DataType.STRING})
  type: string;

  @Column({ type: DataType.BOOLEAN})
  isActive: boolean;

  @ForeignKey(() => Category)
  @Column({ allowNull: true })
  parent_id: number;

  @BelongsTo(() => Category, { foreignKey: 'parent_id', as: 'parentCategory' })
  parent: Category;

  @HasMany(() => Category, { foreignKey: 'parent_id', as: 'subcategories' })
  subcategories: Category[];

  @HasMany(() => Product)
  products: Product[];
}
