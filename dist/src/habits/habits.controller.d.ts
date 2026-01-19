import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
export declare class HabitsController {
    private readonly habitsService;
    constructor(habitsService: HabitsService);
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
        habit_name: string;
        type: boolean;
        color: string;
        habit_id: number;
        user_id: number;
    }>;
    getNegativeHabits(): Promise<{
        habit_name: string;
        color: string;
        habit_id: number;
    }[]>;
    getPositiveHabits(): Promise<{
        habit_name: string;
        color: string;
        schedule: {
            day_of_week: number;
        }[];
        progress: {
            date: Date;
            streak: number;
        }[];
        habit_id: number;
    }[]>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHabitDto: UpdateHabitDto): string;
    remove(id: string): string;
}
