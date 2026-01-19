import { IsString, IsOptional, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  user_name: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsDateString()
  bedtime?: string;

  @IsNotEmpty()
  @IsDateString()
  wakeup_time?: string;

  @IsNotEmpty()
  @IsDateString()
  productive_time?: string;
}