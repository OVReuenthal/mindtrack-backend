import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit } from './entities/habit.entity';

@Injectable()
export class HabitsService {
  constructor(private prisma: PrismaService) {}

  async create(createHabitDto: CreateHabitDto) {
    const habit = await this.prisma.habits.create({
      data: {
        habit_name: createHabitDto.habit_name,
        user_id: createHabitDto.user_id,
        type: createHabitDto.type,
        color: createHabitDto.color,
        schedule: {
          create: createHabitDto.days.map((day) => ({
            day_of_week: day,
          })),
        },
        progress: {
          create: {
            streak: 0,
            date: new Date(),
          },
        },
      },
      include: { schedule: true, progress: true },
    });

    return habit;
  }

  async getPositiveHabits() {
    return this.prisma.habits.findMany({
      where: { type: true },
      select: {
        habit_id: true,
        habit_name: true,
        color: true,
        schedule: {
          select: {
            day_of_week: true,
          },
        },
        progress: {
          select: {
            streak: true,
            date: true,
          },
        },
      },
    });
  }

  async getNegativeHabits() {
    return this.prisma.habits.findMany({
      where: { type: false },
      select: {
        habit_id: true,
        habit_name: true,
        color: true,
      },
    });
  }

  findAll() {
    return `This action returns all habits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habit`;
  }

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: number) {
    return `This action removes a #${id} habit`;
  }
}
