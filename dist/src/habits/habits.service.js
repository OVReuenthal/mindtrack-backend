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