import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/CreateUserDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @Post('/admin-login')
    adminLogin(@Body() userDto: CreateUserDto) {
        return this.authService.adminLogin(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }

}
