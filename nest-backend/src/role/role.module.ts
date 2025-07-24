import { forwardRef, Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { Role } from './role.model';
import { UserRole } from './user-role.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({  
    providers: [RoleService],
    controllers: [RoleController],
    imports: [
      SequelizeModule.forFeature([Role, UserRole]),
      forwardRef(() => AuthModule),
    ],
    exports: [
      RoleService
    ]})
export class RoleModule {}
