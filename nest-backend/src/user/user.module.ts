import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.model';
import { RoleModule } from 'src/role/role.module';
import { AuthModule } from 'src/auth/auth.module';
import { Role } from 'src/role/role.model';
import { UserRole } from 'src/role/user-role.model';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    SequelizeModule.forFeature([User, UserRole, Role]),
    RoleModule,
    forwardRef(() => AuthModule),
  ],
  exports: [
    UserService,
  ]
})
export class UserModule { }
