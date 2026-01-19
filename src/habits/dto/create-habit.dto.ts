import { IsString, IsNotEmpty, IsBoolean, IsInt, IsArray } from 'class-validator';

export class CreateHabitDto {
  @IsNotEmpty()
  @IsString()
  habit_name: string;

  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @IsNotEmpty()
  @IsBoolean()
  type: boolean;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsArray()
  @IsInt({ each: true })
  days: number[]; // 👈 ahora existe
}