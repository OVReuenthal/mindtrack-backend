"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HabitsService = class HabitsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createHabitDto) {
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
    async rebootBadHabit(habitId) {
        const habit = await this.prisma.habits.findUnique({
            where: { habit_id: habitId },
        });
        if (!habit) {
            throw new common_1.NotFoundException(`Habit con id ${habitId} no existe`);
        }
        if (habit.type !== false) {
            throw new common_1.BadRequestException(`El hábito con id ${habitId} no es un hábito malo`);
        }
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
        const updates = [];
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
    findOne(id) {
        return `This action returns a #${id} habit`;
    }
    update(id, updateHabitDto) {
        return `This action updates a #${id} habit`;
    }
    remove(id) {
        return `This action removes a #${id} habit`;
    }
};
exports.HabitsService = HabitsService;
exports.HabitsService = HabitsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HabitsService);
//# sourceMappingURL=habits.service.js.map