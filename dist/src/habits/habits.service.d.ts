import { PrismaService } from '../prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
export declare class HabitsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createHabitDto: CreateHabitDto): Promise<{
        schedule: {
            habit_id: number;
            day_of_week: number;
            schedule_id: number;
        }[];
        progress: {
            habit_id: number;
            date: Date;
            streak: number;
        }[];
    } & {
        user_id: number;
        habit_name: string;
        type: boolean;
        color: string;
        habit_id: number;
    }>;
    getPositiveHabits(): Promise<{
        schedule: {
            day_of_week: number;
        }[];
        progress: {
            date: Date;
            streak: number;
        }[];
        habit_name: string;
        color: string;
        habit_id: number;
    }[]>;
    getNegativeHabits(): Promise<{
        habit_name: string;
        color: string;
        habit_id: number;
    }[]>;
    rebootBadHabit(habitId: number): Promise<{
        message: string;
        progress: import("@prisma/client").Prisma.BatchPayload;
    }>;
    checkBadHabits(): Promise<{
        message: string;
        updated: {
            habit_id: number;
            habit_name: string;
            new_streak: number;
            refreshed_at: Date;
        }[];
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHabitDto: UpdateHabitDto): string;
    remove(id: number): string;
}
