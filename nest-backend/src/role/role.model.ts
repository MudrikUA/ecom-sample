import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { UserRole } from '../role/user-role.model';

interface CreateRoleAttr {
  name: string;
  description: string; 
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, CreateRoleAttr> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}
