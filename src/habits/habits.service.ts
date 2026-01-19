import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
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

  async rebootBadHabit(habitId: number) {
    // Verificamos que el hábito exista y sea de tipo negativo
    const habit = await this.prisma.habits.findUnique({
      where: { habit_id: habitId },
    });

    if (!habit) {
      throw new NotFoundException(`Habit con id ${habitId} no existe`);
    }

    if (habit.type !== false) {
      throw new BadRequestException(
        `El hábito con id ${habitId} no es un hábito malo`,
      );
    }

    // Reiniciamos el progreso asociado
    const updatedProgress = await this.prisma.progress.updateMany({
      where: { habit_id: habitId },
      data: {
        streak: 0,
        date: new Date(),
      },
    });

    return {
      message: `Hábito malo con id ${habitId} reiniciado`,
      progress: updatedProgress,
    };
  }

  async checkBadHabits() {
    const today = new Date();

    const badHabits = await this.prisma.habits.findMany({
      where: { type: false },
      include: { progress: true },
    });

    const updates: {
      habit_id: number;
      habit_name: string;
      new_streak: number;
      refreshed_at: Date;
    }[] = [];

    for (const habit of badHabits) {
      if (habit.progress.length > 0) {
        const progress = habit.progress[0];
        const lastRefresh = new Date(progress.date);

        const expectedDate = new Date(lastRefresh);
        expectedDate.setDate(expectedDate.getDate() + progress.streak);

        if (today > expectedDate) {
          const updated = await this.prisma.progress.update({
            where: {
              habit_id_date: {
                habit_id: progress.habit_id,
                date: progress.date,
              },
            },
            data: {
              streak: progress.streak + 1,
              date: today,
            },
          });

          updates.push({
            habit_id: habit.habit_id,
            habit_name: habit.habit_name,
            new_streak: updated.streak,
            refreshed_at: updated.date,
          });
        }
      }
    }

    return {
      message: 'Chequeo de hábitos malos completado',
      updated: updates,
    };
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
