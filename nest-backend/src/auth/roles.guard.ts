import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private jwtService: JwtService,
        private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ])
            if (!requiredRoles) {
                return true;
            }
            const req = context.switchToHttp().getRequest();
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                throw new UnauthorizedException({ message: 'Missing authorization header' });
            }
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({ message: 'Користувач не авторизований' })
            }
            try {

                const user = this.jwtService.verify(token);
                req.user = user;
                const hasRole = user.roles.some((role: { name: string }) =>
                    requiredRoles.includes(role.name)
                );

                if (!hasRole) {
                    throw new ForbiddenException({ message: 'Insufficient permissions' });
                }

                return hasRole;
            } catch (jwtError) {
                throw new UnauthorizedException({ message: 'Invalid token' });
            }

        } catch (error) {
            if (error instanceof UnauthorizedException ||
                error instanceof ForbiddenException) {
                throw error;
            }
            throw new HttpException('Немає доступу', HttpStatus.FORBIDDEN)
        }
    }

}