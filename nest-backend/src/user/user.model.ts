import { Table, Column, Model, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { UserRole } from '../role/user-role.model';
import { Role } from '../role/role.model';
import { Order } from '../order/order.model';

interface CreateUserAttr {
  email: string;
  password: string;
  //full_name: string;
  first_name: string;
  last_name: string;
  phone: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, CreateUserAttr> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  // @Column({ type: DataType.STRING })
  // full_name: string;

  @Column({ type: DataType.STRING, allowNull: false  })
  first_name: string;

  @Column({ type: DataType.STRING, allowNull: false  })
  last_name: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];

  @HasMany(() => Order)
  orders: Order[];
}
