import { IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  user_name: string;

  @IsString()
  password: string;
}