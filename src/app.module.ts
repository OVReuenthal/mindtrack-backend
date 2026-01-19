// app.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { HabitsModule } from './habits/habits.module';

@Module({
  imports: [UsersModule, PrismaModule, HabitsModule],
})
export class AppModule {}
