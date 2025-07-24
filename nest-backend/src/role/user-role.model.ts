import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Role } from './role.model';

@Table({ tableName: 'user_roles' })
export class UserRole extends Model<UserRole> {
  
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @ForeignKey(() => Role)
  @Column
  role_id: number;
}
