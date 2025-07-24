import { Table, Column, Model, DataType, BelongsTo, HasMany, ForeignKey, HasOne } from 'sequelize-typescript';
import { Brand } from '../brand/brand.model';
import { PriceBook } from '../pricebook/pricebook.model';
import { Category } from '../category/category.model';
import { Stock } from 'src/stock/stock.model';

interface CreateProductAttr {
  title: string;
  descriptionLong: string;
  descriptionShort: string;
  brand_id: number;
  type: string;
  size: string;
  sku: string;
  // price_book_id: number;
  category_id: number;
  is_active: boolean;
  images: string[];
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, CreateProductAttr> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.TEXT })
  descriptionLong: string;

  @Column({ type: DataType.STRING })
  descriptionShort: string;

  @ForeignKey(() => Brand)
  @Column
  brand_id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.STRING })
  size: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  sku: string;

  // @ForeignKey(() => PriceBook)
  // @Column
  // price_book_id: number;

  @ForeignKey(() => Category)
  @Column
  category_id: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_active: boolean;

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: true })
  images: string[];

  @BelongsTo(() => Brand, { as: "brand" }) 
  brand: Brand;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => PriceBook)
  prices: PriceBook;

  @HasOne(() => Stock)
  stock: Stock;
}
