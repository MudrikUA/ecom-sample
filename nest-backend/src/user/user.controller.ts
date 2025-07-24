import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/user/dto/CreateUserDto';
import { ChangeUserDto } from 'src/user/dto/ChangeUserDto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ChangeUserPasswordDto } from './dto/ChangeUserPasswordDto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @UseGuards(RolesGuard)
    @Roles('USER', 'MANAGER', 'ADMIN')
    @Put('/change-password')
    async changeUserPassword(@Body() dto: ChangeUserPasswordDto) {
        return this.userService.changeUserPassword(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('USER', 'MANAGER', 'ADMIN')
    @Put('/update')
    async updateUser(@Body() dto: ChangeUserDto) {
        return this.userService.updateUser(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Get()
    async getAllUsers(@Query() query: any, @Res() res: Response) {
        const { rows, count } = await this.userService.getAllByFilter(query);
        res.setHeader('Content-Range', `users 0-${rows.length}/${count}`);
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.json(rows);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.userService.getById(id);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Put('')
    async createUser(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Put(':id')
    async changeUser(@Param('id') id: number, @Body() dto: ChangeUserDto) {
        return this.userService.changeUser(id, dto);
    }

    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id);
    }


    // @UseGuards(RolesGuard)
    // @Roles('USER','MANAGER','ADMIN')
    // @Put('/update')
    // updateUser(@Body() dto: ChangeUserDto) {
    //     return this.userService.updateUser(dto);
    // }
    // @UseGuards(RolesGuard)
    // @Roles('ADMIN')
    // @Get('/user')
    // async getAllUsers(@Query() query: any, @Res() res: Response) {
    //     const { rows, count } = await this.userService.getAllByFilter(query);
    //     res.setHeader('Content-Range', `users 0-${rows.length}/${count}`);
    //     res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    //     res.json(rows);
    // }
}
