import { Module } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitsController } from './habits.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // 👈 ahora PrismaService está disponible
  controllers: [HabitsController],
  providers: [HabitsService],
})
export class HabitsModule {}