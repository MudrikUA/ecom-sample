import { Role } from "src/role/role.model";

export class ChangeUserDto {
    readonly id: number;
    readonly email: string;
    readonly password: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly phone: string;
    readonly roles: Role[]
}