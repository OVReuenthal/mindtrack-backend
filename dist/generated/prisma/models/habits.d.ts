import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type habitsModel = runtime.Types.Result.DefaultSelection<Prisma.$habitsPayload>;
export type AggregateHabits = {
    _count: HabitsCountAggregateOutputType | null;
    _avg: HabitsAvgAggregateOutputType | null;
    _sum: HabitsSumAggregateOutputType | null;
    _min: HabitsMinAggregateOutputType | null;
    _max: HabitsMaxAggregateOutputType | null;
};
export type HabitsAvgAggregateOutputType = {
    habit_id: number | null;
    user_id: number | null;
    schedule_id: number | null;
};
export type HabitsSumAggregateOutputType = {
    habit_id: number | null;
    user_id: number | null;
    schedule_id: number | null;
};
export type HabitsMinAggregateOutputType = {
    habit_id: number | null;
    habit_name: string | null;
    user_id: number | null;
    type: boolean | null;
    schedule_id: number | null;
    color: string | null;
};
export type HabitsMaxAggregateOutputType = {
    habit_id: number | null;
    habit_name: string | null;
    user_id: number | null;
    type: boolean | null;
    schedule_id: number | null;
    color: string | null;
};
export type HabitsCountAggregateOutputType = {
    habit_id: number;
    habit_name: number;
    user_id: number;
    type: number;
    schedule_id: number;
    color: number;
    _all: number;
};
export type HabitsAvgAggregateInputType = {
    habit_id?: true;
    user_id?: true;
    schedule_id?: true;
};
export type HabitsSumAggregateInputType = {
    habit_id?: true;
    user_id?: true;
    schedule_id?: true;
};
export type HabitsMinAggregateInputType = {
    habit_id?: true;
    habit_name?: true;
    user_id?: true;
    type?: true;
    schedule_id?: true;
    color?: true;
};
export type HabitsMaxAggregateInputType = {
    habit_id?: true;
    habit_name?: true;
    user_id?: true;
    type?: true;
    schedule_id?: true;
    color?: true;
};
export type HabitsCountAggregateInputType = {
    habit_id?: true;
    habit_name?: true;
    user_id?: true;
    type?: true;
    schedule_id?: true;
    color?: true;
    _all?: true;
};
export type HabitsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.habitsWhereInput;
    orderBy?: Prisma.habitsOrderByWithRelationInput | Prisma.habitsOrderByWithRelationInput[];
    cursor?: Prisma.habitsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HabitsCountAggregateInputType;
    _avg?: HabitsAvgAggregateInputType;
    _sum?: HabitsSumAggregateInputType;
    _min?: HabitsMinAggregateInputType;
    _max?: HabitsMaxAggregateInputType;
};
export type GetHabitsAggregateType<T extends HabitsAggregateArgs> = {
    [P in keyof T & keyof AggregateHabits]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHabits[P]> : Prisma.GetScalarType<T[P], AggregateHabits[P]>;
};
export type habitsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.habitsWhereInput;
    orderBy?: Prisma.habitsOrderByWithAggregationInput | Prisma.habitsOrderByWithAggregationInput[];
    by: Prisma.HabitsScalarFieldEnum[] | Prisma.HabitsScalarFieldEnum;
    having?: Prisma.habitsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HabitsCountAggregateInputType | true;
    _avg?: HabitsAvgAggregateInputType;
    _sum?: HabitsSumAggregateInputType;
    _min?: HabitsMinAggregateInputType;
    _max?: HabitsMaxAggregateInputType;
};
export type HabitsGroupByOutputType = {
    habit_id: number;
    habit_name: string | null;
    user_id: number | null;
    type: boolean | null;
    schedule_id: number | null;
    color: string | null;
    _count: HabitsCountAggregateOutputType | null;
    _avg: HabitsAvgAggregateOutputType | null;
    _sum: HabitsSumAggregateOutputType | null;
    _min: HabitsMinAggregateOutputType | null;
    _max: HabitsMaxAggregateOutputType | null;
};
type GetHabitsGroupByPayload<T extends habitsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HabitsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HabitsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HabitsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HabitsGroupByOutputType[P]>;
}>>;
export type habitsWhereInput = {
    AND?: Prisma.habitsWhereInput | Prisma.habitsWhereInput[];
    OR?: Prisma.habitsWhereInput[];
    NOT?: Prisma.habitsWhereInput | Prisma.habitsWhereInput[];
    habit_id?: Prisma.IntFilter<"habits"> | number;
    habit_name?: Prisma.StringNullableFilter<"habits"> | string | null;
    user_id?: Prisma.IntNullableFilter<"habits"> | number | null;
    type?: Prisma.BoolNullableFilter<"habits"> | boolean | null;
    schedule_id?: Prisma.IntNullableFilter<"habits"> | number | null;
    color?: Prisma.StringNullableFilter<"habits"> | string | null;
    schedule?: Prisma.XOR<Prisma.ScheduleNullableScalarRelationFilter, Prisma.scheduleWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    progress?: Prisma.ProgressListRelationFilter;
};
export type habitsOrderByWithRelationInput = {
    habit_id?: Prisma.SortOrder;
    habit_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    schedule_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    schedule?: Prisma.scheduleOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    progress?: Prisma.progressOrderByRelationAggregateInput;
};
export type habitsWhereUniqueInput = Prisma.AtLeast<{
    habit_id?: number;
    AND?: Prisma.habitsWhereInput | Prisma.habitsWhereInput[];
    OR?: Prisma.habitsWhereInput[];
    NOT?: Prisma.habitsWhereInput | Prisma.habitsWhereInput[];
    habit_name?: Prisma.StringNullableFilter<"habits"> | string | null;
    user_id?: Prisma.IntNullableFilter<"habits"> | number | null;
    type?: Prisma.BoolNullableFilter<"habits"> | boolean | null;
    schedule_id?: Prisma.IntNullableFilter<"habits"> | number | null;
    color?: Prisma.StringNullableFilter<"habits"> | string | null;
    schedule?: Prisma.XOR<Prisma.ScheduleNullableScalarRelationFilter, Prisma.scheduleWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    progress?: Prisma.ProgressListRelationFilter;
}, "habit_id">;
export type habitsOrderByWithAggregationInput = {
    habit_id?: Prisma.SortOrder;
    habit_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    schedule_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.habitsCountOrderByAggregateInput;
    _avg?: Prisma.habitsAvgOrderByAggregateInput;
    _max?: Prisma.habitsMaxOrderByAggregateInput;
    _min?: Prisma.habitsMinOrderByAggregateInput;
    _sum?: Prisma.habitsSumOrderByAggregateInput;
};
export type habitsScalarWhereWithAggregatesInput = {
    AND?: Prisma.habitsScalarWhereWithAggregatesInput | Prisma.habitsScalarWhereWithAggregatesInput[];
    OR?: Prisma.habitsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.habitsScalarWhereWithAggregatesInput | Prisma.habitsScalarWhereWithAggregatesInput[];
    habit_id?: Prisma.IntWithAggregatesFilter<"habits"> | number;
    habit_name?: Prisma.StringNullableWithAggregatesFilter<"habits"> | string | null;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"habits"> | number | null;
    type?: Prisma.BoolNullableWithAggregatesFilter<"habits"> | boolean | null;
    schedule_id?: Prisma.IntNullableWithAggregatesFilter<"habits"> | number | null;
    color?: Prisma.StringNullableWithAggregatesFilter<"habits"> | string | null;
};
export type habitsCreateInput = {
    habit_name?: string | null;
    type?: boolean | null;
    color?: string | null;
    schedule?: Prisma.scheduleCreateNestedOneWithoutHabitsInput;
    users?: Prisma.usersCreateNestedOneWithoutHabitsInput;
    progress?: Prisma.progressCreateNestedManyWithoutHabitsInput;
};
export type habitsUncheckedCreateInput = {
    habit_id?: number;
    habit_name?: string | null;
    user_id?: number | null;
    type?: boolean | null;
    schedule_id?: number | null;
    color?: string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutHabitsInput;
};
export type habitsUpdateInput = {
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schedule?: Prisma.scheduleUpdateOneWithoutHabitsNestedInput;
    users?: Prisma.usersUpdateOneWithoutHabitsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutHabitsNestedInput;
};
export type habitsUncheckedUpdateInput = {
    habit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    schedule_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutHabitsNestedInput;
};
export type habitsCreateManyInput = {
    habit_id?: number;
    habit_name?: string | null;
    user_id?: number | null;
    type?: boolean | null;
    schedule_id?: number | null;
    color?: string | null;
};
export type habitsUpdateManyMutationInput = {
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type habitsUncheckedUpdateManyInput = {
    habit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    schedule_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type habitsCountOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    habit_name?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
};
export type habitsAvgOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
};
export type habitsMaxOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    habit_name?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
};
export type habitsMinOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    habit_name?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
};
export type habitsSumOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
};
export type HabitsScalarRelationFilter = {
    is?: Prisma.habitsWhereInput;
    isNot?: Prisma.habitsWhereInput;
};
export type HabitsListRelationFilter = {
    every?: Prisma.habitsWhereInput;
    some?: Prisma.habitsWhereInput;
    none?: Prisma.habitsWhereInput;
};
export type habitsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type habitsCreateNestedOneWithoutProgressInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutProgressInput, Prisma.habitsUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutProgressInput;
    connect?: Prisma.habitsWhereUniqueInput;
};
export type habitsUpdateOneRequiredWithoutProgressNestedInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutProgressInput, Prisma.habitsUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutProgressInput;
    upsert?: Prisma.habitsUpsertWithoutProgressInput;
    connect?: Prisma.habitsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.habitsUpdateToOneWithWhereWithoutProgressInput, Prisma.habitsUpdateWithoutProgressInput>, Prisma.habitsUncheckedUpdateWithoutProgressInput>;
};
export type habitsCreateNestedManyWithoutScheduleInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutScheduleInput, Prisma.habitsUncheckedCreateWithoutScheduleInput> | Prisma.habitsCreateWithoutScheduleInput[] | Prisma.habitsUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutScheduleInput | Prisma.habitsCreateOrConnectWithoutScheduleInput[];
    createMany?: Prisma.habitsCreateManyScheduleInputEnvelope;
    connect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
};
export type habitsUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutScheduleInput, Prisma.habitsUncheckedCreateWithoutScheduleInput> | Prisma.habitsCreateWithoutScheduleInput[] | Prisma.habitsUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutScheduleInput | Prisma.habitsCreateOrConnectWithoutScheduleInput[];
    createMany?: Prisma.habitsCreateManyScheduleInputEnvelope;
    connect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
};
export type habitsUpdateManyWithoutScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutScheduleInput, Prisma.habitsUncheckedCreateWithoutScheduleInput> | Prisma.habitsCreateWithoutScheduleInput[] | Prisma.habitsUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutScheduleInput | Prisma.habitsCreateOrConnectWithoutScheduleInput[];
    upsert?: Prisma.habitsUpsertWithWhereUniqueWithoutScheduleInput | Prisma.habitsUpsertWithWhereUniqueWithoutScheduleInput[];
    createMany?: Prisma.habitsCreateManyScheduleInputEnvelope;
    set?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    disconnect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    delete?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    connect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    update?: Prisma.habitsUpdateWithWhereUniqueWithoutScheduleInput | Prisma.habitsUpdateWithWhereUniqueWithoutScheduleInput[];
    updateMany?: Prisma.habitsUpdateManyWithWhereWithoutScheduleInput | Prisma.habitsUpdateManyWithWhereWithoutScheduleInput[];
    deleteMany?: Prisma.habitsScalarWhereInput | Prisma.habitsScalarWhereInput[];
};
export type habitsUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutScheduleInput, Prisma.habitsUncheckedCreateWithoutScheduleInput> | Prisma.habitsCreateWithoutScheduleInput[] | Prisma.habitsUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutScheduleInput | Prisma.habitsCreateOrConnectWithoutScheduleInput[];
    upsert?: Prisma.habitsUpsertWithWhereUniqueWithoutScheduleInput | Prisma.habitsUpsertWithWhereUniqueWithoutScheduleInput[];
    createMany?: Prisma.habitsCreateManyScheduleInputEnvelope;
    set?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    disconnect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    delete?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    connect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    update?: Prisma.habitsUpdateWithWhereUniqueWithoutScheduleInput | Prisma.habitsUpdateWithWhereUniqueWithoutScheduleInput[];
    updateMany?: Prisma.habitsUpdateManyWithWhereWithoutScheduleInput | Prisma.habitsUpdateManyWithWhereWithoutScheduleInput[];
    deleteMany?: Prisma.habitsScalarWhereInput | Prisma.habitsScalarWhereInput[];
};
export type habitsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutUsersInput, Prisma.habitsUncheckedCreateWithoutUsersInput> | Prisma.habitsCreateWithoutUsersInput[] | Prisma.habitsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutUsersInput | Prisma.habitsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.habitsCreateManyUsersInputEnvelope;
    connect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
};
export type habitsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutUsersInput, Prisma.habitsUncheckedCreateWithoutUsersInput> | Prisma.habitsCreateWithoutUsersInput[] | Prisma.habitsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutUsersInput | Prisma.habitsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.habitsCreateManyUsersInputEnvelope;
    connect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
};
export type habitsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutUsersInput, Prisma.habitsUncheckedCreateWithoutUsersInput> | Prisma.habitsCreateWithoutUsersInput[] | Prisma.habitsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutUsersInput | Prisma.habitsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.habitsUpsertWithWhereUniqueWithoutUsersInput | Prisma.habitsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.habitsCreateManyUsersInputEnvelope;
    set?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    disconnect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    delete?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    connect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    update?: Prisma.habitsUpdateWithWhereUniqueWithoutUsersInput | Prisma.habitsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.habitsUpdateManyWithWhereWithoutUsersInput | Prisma.habitsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.habitsScalarWhereInput | Prisma.habitsScalarWhereInput[];
};
export type habitsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.habitsCreateWithoutUsersInput, Prisma.habitsUncheckedCreateWithoutUsersInput> | Prisma.habitsCreateWithoutUsersInput[] | Prisma.habitsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.habitsCreateOrConnectWithoutUsersInput | Prisma.habitsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.habitsUpsertWithWhereUniqueWithoutUsersInput | Prisma.habitsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.habitsCreateManyUsersInputEnvelope;
    set?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    disconnect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    delete?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    connect?: Prisma.habitsWhereUniqueInput | Prisma.habitsWhereUniqueInput[];
    update?: Prisma.habitsUpdateWithWhereUniqueWithoutUsersInput | Prisma.habitsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.habitsUpdateManyWithWhereWithoutUsersInput | Prisma.habitsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.habitsScalarWhereInput | Prisma.habitsScalarWhereInput[];
};
export type habitsCreateWithoutProgressInput = {
    habit_name?: string | null;
    type?: boolean | null;
    color?: string | null;
    schedule?: Prisma.scheduleCreateNestedOneWithoutHabitsInput;
    users?: Prisma.usersCreateNestedOneWithoutHabitsInput;
};
export type habitsUncheckedCreateWithoutProgressInput = {
    habit_id?: number;
    habit_name?: string | null;
    user_id?: number | null;
    type?: boolean | null;
    schedule_id?: number | null;
    color?: string | null;
};
export type habitsCreateOrConnectWithoutProgressInput = {
    where: Prisma.habitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.habitsCreateWithoutProgressInput, Prisma.habitsUncheckedCreateWithoutProgressInput>;
};
export type habitsUpsertWithoutProgressInput = {
    update: Prisma.XOR<Prisma.habitsUpdateWithoutProgressInput, Prisma.habitsUncheckedUpdateWithoutProgressInput>;
    create: Prisma.XOR<Prisma.habitsCreateWithoutProgressInput, Prisma.habitsUncheckedCreateWithoutProgressInput>;
    where?: Prisma.habitsWhereInput;
};
export type habitsUpdateToOneWithWhereWithoutProgressInput = {
    where?: Prisma.habitsWhereInput;
    data: Prisma.XOR<Prisma.habitsUpdateWithoutProgressInput, Prisma.habitsUncheckedUpdateWithoutProgressInput>;
};
export type habitsUpdateWithoutProgressInput = {
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schedule?: Prisma.scheduleUpdateOneWithoutHabitsNestedInput;
    users?: Prisma.usersUpdateOneWithoutHabitsNestedInput;
};
export type habitsUncheckedUpdateWithoutProgressInput = {
    habit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    schedule_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type habitsCreateWithoutScheduleInput = {
    habit_name?: string | null;
    type?: boolean | null;
    color?: string | null;
    users?: Prisma.usersCreateNestedOneWithoutHabitsInput;
    progress?: Prisma.progressCreateNestedManyWithoutHabitsInput;
};
export type habitsUncheckedCreateWithoutScheduleInput = {
    habit_id?: number;
    habit_name?: string | null;
    user_id?: number | null;
    type?: boolean | null;
    color?: string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutHabitsInput;
};
export type habitsCreateOrConnectWithoutScheduleInput = {
    where: Prisma.habitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.habitsCreateWithoutScheduleInput, Prisma.habitsUncheckedCreateWithoutScheduleInput>;
};
export type habitsCreateManyScheduleInputEnvelope = {
    data: Prisma.habitsCreateManyScheduleInput | Prisma.habitsCreateManyScheduleInput[];
    skipDuplicates?: boolean;
};
export type habitsUpsertWithWhereUniqueWithoutScheduleInput = {
    where: Prisma.habitsWhereUniqueInput;
    update: Prisma.XOR<Prisma.habitsUpdateWithoutScheduleInput, Prisma.habitsUncheckedUpdateWithoutScheduleInput>;
    create: Prisma.XOR<Prisma.habitsCreateWithoutScheduleInput, Prisma.habitsUncheckedCreateWithoutScheduleInput>;
};
export type habitsUpdateWithWhereUniqueWithoutScheduleInput = {
    where: Prisma.habitsWhereUniqueInput;
    data: Prisma.XOR<Prisma.habitsUpdateWithoutScheduleInput, Prisma.habitsUncheckedUpdateWithoutScheduleInput>;
};
export type habitsUpdateManyWithWhereWithoutScheduleInput = {
    where: Prisma.habitsScalarWhereInput;
    data: Prisma.XOR<Prisma.habitsUpdateManyMutationInput, Prisma.habitsUncheckedUpdateManyWithoutScheduleInput>;
};
export type habitsScalarWhereInput = {
    AND?: Prisma.habitsScalarWhereInput | Prisma.habitsScalarWhereInput[];
    OR?: Prisma.habitsScalarWhereInput[];
    NOT?: Prisma.habitsScalarWhereInput | Prisma.habitsScalarWhereInput[];
    habit_id?: Prisma.IntFilter<"habits"> | number;
    habit_name?: Prisma.StringNullableFilter<"habits"> | string | null;
    user_id?: Prisma.IntNullableFilter<"habits"> | number | null;
    type?: Prisma.BoolNullableFilter<"habits"> | boolean | null;
    schedule_id?: Prisma.IntNullableFilter<"habits"> | number | null;
    color?: Prisma.StringNullableFilter<"habits"> | string | null;
};
export type habitsCreateWithoutUsersInput = {
    habit_name?: string | null;
    type?: boolean | null;
    color?: string | null;
    schedule?: Prisma.scheduleCreateNestedOneWithoutHabitsInput;
    progress?: Prisma.progressCreateNestedManyWithoutHabitsInput;
};
export type habitsUncheckedCreateWithoutUsersInput = {
    habit_id?: number;
    habit_name?: string | null;
    type?: boolean | null;
    schedule_id?: number | null;
    color?: string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutHabitsInput;
};
export type habitsCreateOrConnectWithoutUsersInput = {
    where: Prisma.habitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.habitsCreateWithoutUsersInput, Prisma.habitsUncheckedCreateWithoutUsersInput>;
};
export type habitsCreateManyUsersInputEnvelope = {
    data: Prisma.habitsCreateManyUsersInput | Prisma.habitsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type habitsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.habitsWhereUniqueInput;
    update: Prisma.XOR<Prisma.habitsUpdateWithoutUsersInput, Prisma.habitsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.habitsCreateWithoutUsersInput, Prisma.habitsUncheckedCreateWithoutUsersInput>;
};
export type habitsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.habitsWhereUniqueInput;
    data: Prisma.XOR<Prisma.habitsUpdateWithoutUsersInput, Prisma.habitsUncheckedUpdateWithoutUsersInput>;
};
export type habitsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.habitsScalarWhereInput;
    data: Prisma.XOR<Prisma.habitsUpdateManyMutationInput, Prisma.habitsUncheckedUpdateManyWithoutUsersInput>;
};
export type habitsCreateManyScheduleInput = {
    habit_id?: number;
    habit_name?: string | null;
    user_id?: number | null;
    type?: boolean | null;
    color?: string | null;
};
export type habitsUpdateWithoutScheduleInput = {
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.usersUpdateOneWithoutHabitsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutHabitsNestedInput;
};
export type habitsUncheckedUpdateWithoutScheduleInput = {
    habit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutHabitsNestedInput;
};
export type habitsUncheckedUpdateManyWithoutScheduleInput = {
    habit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type habitsCreateManyUsersInput = {
    habit_id?: number;
    habit_name?: string | null;
    type?: boolean | null;
    schedule_id?: number | null;
    color?: string | null;
};
export type habitsUpdateWithoutUsersInput = {
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schedule?: Prisma.scheduleUpdateOneWithoutHabitsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutHabitsNestedInput;
};
export type habitsUncheckedUpdateWithoutUsersInput = {
    habit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    schedule_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutHabitsNestedInput;
};
export type habitsUncheckedUpdateManyWithoutUsersInput = {
    habit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    habit_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    schedule_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type HabitsCountOutputType = {
    progress: number;
};
export type HabitsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    progress?: boolean | HabitsCountOutputTypeCountProgressArgs;
};
export type HabitsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitsCountOutputTypeSelect<ExtArgs> | null;
};
export type HabitsCountOutputTypeCountProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progressWhereInput;
};
export type habitsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    habit_id?: boolean;
    habit_name?: boolean;
    user_id?: boolean;
    type?: boolean;
    schedule_id?: boolean;
    color?: boolean;
    schedule?: boolean | Prisma.habits$scheduleArgs<ExtArgs>;
    users?: boolean | Prisma.habits$usersArgs<ExtArgs>;
    progress?: boolean | Prisma.habits$progressArgs<ExtArgs>;
    _count?: boolean | Prisma.HabitsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habits"]>;
export type habitsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    habit_id?: boolean;
    habit_name?: boolean;
    user_id?: boolean;
    type?: boolean;
    schedule_id?: boolean;
    color?: boolean;
    schedule?: boolean | Prisma.habits$scheduleArgs<ExtArgs>;
    users?: boolean | Prisma.habits$usersArgs<ExtArgs>;
}, ExtArgs["result"]["habits"]>;
export type habitsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    habit_id?: boolean;
    habit_name?: boolean;
    user_id?: boolean;
    type?: boolean;
    schedule_id?: boolean;
    color?: boolean;
    schedule?: boolean | Prisma.habits$scheduleArgs<ExtArgs>;
    users?: boolean | Prisma.habits$usersArgs<ExtArgs>;
}, ExtArgs["result"]["habits"]>;
export type habitsSelectScalar = {
    habit_id?: boolean;
    habit_name?: boolean;
    user_id?: boolean;
    type?: boolean;
    schedule_id?: boolean;
    color?: boolean;
};
export type habitsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"habit_id" | "habit_name" | "user_id" | "type" | "schedule_id" | "color", ExtArgs["result"]["habits"]>;
export type habitsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    schedule?: boolean | Prisma.habits$scheduleArgs<ExtArgs>;
    users?: boolean | Prisma.habits$usersArgs<ExtArgs>;
    progress?: boolean | Prisma.habits$progressArgs<ExtArgs>;
    _count?: boolean | Prisma.HabitsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type habitsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    schedule?: boolean | Prisma.habits$scheduleArgs<ExtArgs>;
    users?: boolean | Prisma.habits$usersArgs<ExtArgs>;
};
export type habitsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    schedule?: boolean | Prisma.habits$scheduleArgs<ExtArgs>;
    users?: boolean | Prisma.habits$usersArgs<ExtArgs>;
};
export type $habitsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "habits";
    objects: {
        schedule: Prisma.$schedulePayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs> | null;
        progress: Prisma.$progressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        habit_id: number;
        habit_name: string | null;
        user_id: number | null;
        type: boolean | null;
        schedule_id: number | null;
        color: string | null;
    }, ExtArgs["result"]["habits"]>;
    composites: {};
};
export type habitsGetPayload<S extends boolean | null | undefined | habitsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$habitsPayload, S>;
export type habitsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<habitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HabitsCountAggregateInputType | true;
};
export interface habitsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['habits'];
        meta: {
            name: 'habits';
        };
    };
    findUnique<T extends habitsFindUniqueArgs>(args: Prisma.SelectSubset<T, habitsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__habitsClient<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends habitsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, habitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__habitsClient<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends habitsFindFirstArgs>(args?: Prisma.SelectSubset<T, habitsFindFirstArgs<ExtArgs>>): Prisma.Prisma__habitsClient<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends habitsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, habitsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__habitsClient<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends habitsFindManyArgs>(args?: Prisma.SelectSubset<T, habitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends habitsCreateArgs>(args: Prisma.SelectSubset<T, habitsCreateArgs<ExtArgs>>): Prisma.Prisma__habitsClient<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends habitsCreateManyArgs>(args?: Prisma.SelectSubset<T, habitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends habitsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, habitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends habitsDeleteArgs>(args: Prisma.SelectSubset<T, habitsDeleteArgs<ExtArgs>>): Prisma.Prisma__habitsClient<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends habitsUpdateArgs>(args: Prisma.SelectSubset<T, habitsUpdateArgs<ExtArgs>>): Prisma.Prisma__habitsClient<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends habitsDeleteManyArgs>(args?: Prisma.SelectSubset<T, habitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends habitsUpdateManyArgs>(args: Prisma.SelectSubset<T, habitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends habitsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, habitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends habitsUpsertArgs>(args: Prisma.SelectSubset<T, habitsUpsertArgs<ExtArgs>>): Prisma.Prisma__habitsClient<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends habitsCountArgs>(args?: Prisma.Subset<T, habitsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HabitsCountAggregateOutputType> : number>;
    aggregate<T extends HabitsAggregateArgs>(args: Prisma.Subset<T, HabitsAggregateArgs>): Prisma.PrismaPromise<GetHabitsAggregateType<T>>;
    groupBy<T extends habitsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: habitsGroupByArgs['orderBy'];
    } : {
        orderBy?: habitsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, habitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: habitsFieldRefs;
}
export interface Prisma__habitsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    schedule<T extends Prisma.habits$scheduleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.habits$scheduleArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.habits$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.habits$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    progress<T extends Prisma.habits$progressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.habits$progressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface habitsFieldRefs {
    readonly habit_id: Prisma.FieldRef<"habits", 'Int'>;
    readonly habit_name: Prisma.FieldRef<"habits", 'String'>;
    readonly user_id: Prisma.FieldRef<"habits", 'Int'>;
    readonly type: Prisma.FieldRef<"habits", 'Boolean'>;
    readonly schedule_id: Prisma.FieldRef<"habits", 'Int'>;
    readonly color: Prisma.FieldRef<"habits", 'String'>;
}
export type habitsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
    where: Prisma.habitsWhereUniqueInput;
};
export type habitsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
    where: Prisma.habitsWhereUniqueInput;
};
export type habitsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
    where?: Prisma.habitsWhereInput;
    orderBy?: Prisma.habitsOrderByWithRelationInput | Prisma.habitsOrderByWithRelationInput[];
    cursor?: Prisma.habitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitsScalarFieldEnum | Prisma.HabitsScalarFieldEnum[];
};
export type habitsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
    where?: Prisma.habitsWhereInput;
    orderBy?: Prisma.habitsOrderByWithRelationInput | Prisma.habitsOrderByWithRelationInput[];
    cursor?: Prisma.habitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitsScalarFieldEnum | Prisma.HabitsScalarFieldEnum[];
};
export type habitsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
    where?: Prisma.habitsWhereInput;
    orderBy?: Prisma.habitsOrderByWithRelationInput | Prisma.habitsOrderByWithRelationInput[];
    cursor?: Prisma.habitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitsScalarFieldEnum | Prisma.HabitsScalarFieldEnum[];
};
export type habitsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.habitsCreateInput, Prisma.habitsUncheckedCreateInput>;
};
export type habitsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.habitsCreateManyInput | Prisma.habitsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type habitsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    data: Prisma.habitsCreateManyInput | Prisma.habitsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.habitsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type habitsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.habitsUpdateInput, Prisma.habitsUncheckedUpdateInput>;
    where: Prisma.habitsWhereUniqueInput;
};
export type habitsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.habitsUpdateManyMutationInput, Prisma.habitsUncheckedUpdateManyInput>;
    where?: Prisma.habitsWhereInput;
    limit?: number;
};
export type habitsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.habitsUpdateManyMutationInput, Prisma.habitsUncheckedUpdateManyInput>;
    where?: Prisma.habitsWhereInput;
    limit?: number;
    include?: Prisma.habitsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type habitsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
    where: Prisma.habitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.habitsCreateInput, Prisma.habitsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.habitsUpdateInput, Prisma.habitsUncheckedUpdateInput>;
};
export type habitsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
    where: Prisma.habitsWhereUniqueInput;
};
export type habitsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.habitsWhereInput;
    limit?: number;
};
export type habits$scheduleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    where?: Prisma.scheduleWhereInput;
};
export type habits$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type habits$progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where?: Prisma.progressWhereInput;
    orderBy?: Prisma.progressOrderByWithRelationInput | Prisma.progressOrderByWithRelationInput[];
    cursor?: Prisma.progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgressScalarFieldEnum | Prisma.ProgressScalarFieldEnum[];
};
export type habitsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.habitsSelect<ExtArgs> | null;
    omit?: Prisma.habitsOmit<ExtArgs> | null;
    include?: Prisma.habitsInclude<ExtArgs> | null;
};
export {};
