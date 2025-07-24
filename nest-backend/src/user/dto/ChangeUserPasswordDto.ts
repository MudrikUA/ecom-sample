export class ChangeUserPasswordDto {
    readonly id: number;
    readonly oldPassword: string;
    readonly newPassword: string;
}