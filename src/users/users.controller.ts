import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id/bedtime')
  async updateBedtime(@Param('id') id: string, @Body('bedtime') bedtime: string) {
    return this.usersService.updateBedtime(Number(id), bedtime);
  }

  @Patch(':id/wakeup')
  async updateWakeupTime(@Param('id') id: string, @Body('wakeup_time') wakeup_time: string) {
    return this.usersService.updateWakeupTime(Number(id), wakeup_time);
  }

  @Patch(':id/productive')
  async updateProductiveTime(@Param('id') id: string, @Body('productive_time') productive_time: string) {
    return this.usersService.updateProductiveTime(Number(id), productive_time);
  }

  @Post('simple')
  async createUserSimple(
    @Body('user_name') user_name: string,
    @Body('password') password: string,
  ) {
    return this.usersService.createUserSimple(user_name, password);
  }



  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('by-id/:id')
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
