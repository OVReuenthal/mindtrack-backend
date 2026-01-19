import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.users.create({
      data: {
        ...createUserDto,
        level: 1,
        exp_points: 0,
      },
    });

    return {
      ...user,
      exp_points: Number(user.exp_points), // ✅ serializable
    };
  }

  async login(loginUserDto: LoginUserDto) {
    const { user_name, password } = loginUserDto;

    // Buscar usuario por nombre
    const user = await this.prisma.users.findUnique({
      where: { user_name },
    });

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    // Validar contraseña (por ahora texto plano, luego puedes usar bcrypt)
    if (user.password !== password) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    // Retornar datos del usuario (sin la contraseña)
    const { password: _, ...result } = user;
    return result;
  }

  async getUserById(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    return user;
  }



  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
