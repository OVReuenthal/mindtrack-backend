import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    user_id: number | null;
    level: number | null;
    exp_points: number | null;
};
export type UsersSumAggregateOutputType = {
    user_id: number | null;
    level: number | null;
    exp_points: bigint | null;
};
export type UsersMinAggregateOutputType = {
    user_id: number | null;
    user_name: string | null;
    password: string | null;
    level: number | null;
    bedtime: Date | null;
    wakeup_time: Date | null;
    productive_time: Date | null;
    exp_points: bigint | null;
};
export type UsersMaxAggregateOutputType = {
    user_id: number | null;
    user_name: string | null;
    password: string | null;
    level: number | null;
    bedtime: Date | null;
    wakeup_time: Date | null;
    productive_time: Date | null;
    exp_points: bigint | null;
};
export type UsersCountAggregateOutputType = {
    user_id: number;
    user_name: number;
    password: number;
    level: number;
    bedtime: number;
    wakeup_time: number;
    productive_time: number;
    exp_points: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    user_id?: true;
    level?: true;
    exp_points?: true;
};
export type UsersSumAggregateInputType = {
    user_id?: true;
    level?: true;
    exp_points?: true;
};
export type UsersMinAggregateInputType = {
    user_id?: true;
    user_name?: true;
    password?: true;
    level?: true;
    bedtime?: true;
    wakeup_time?: true;
    productive_time?: true;
    exp_points?: true;
};
export type UsersMaxAggregateInputType = {
    user_id?: true;
    user_name?: true;
    password?: true;
    level?: true;
    bedtime?: true;
    wakeup_time?: true;
    productive_time?: true;
    exp_points?: true;
};
export type UsersCountAggregateInputType = {
    user_id?: true;
    user_name?: true;
    password?: true;
    level?: true;
    bedtime?: true;
    wakeup_time?: true;
    productive_time?: true;
    exp_points?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    user_id: number;
    user_name: string;
    password: string;
    level: number;
    bedtime: Date | null;
    wakeup_time: Date | null;
    productive_time: Date | null;
    exp_points: bigint;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    user_id?: Prisma.IntFilter<"users"> | number;
    user_name?: Prisma.StringFilter<"users"> | string;
    password?: Prisma.StringFilter<"users"> | string;
    level?: Prisma.IntFilter<"users"> | number;
    bedtime?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    wakeup_time?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    productive_time?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    exp_points?: Prisma.BigIntFilter<"users"> | bigint | number;
    habits?: Prisma.HabitsListRelationFilter;
    level_rewards?: Prisma.XOR<Prisma.Level_rewardsNullableScalarRelationFilter, Prisma.level_rewardsWhereInput> | null;
};
export type usersOrderByWithRelationInput = {
    user_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    bedtime?: Prisma.SortOrderInput | Prisma.SortOrder;
    wakeup_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    productive_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    exp_points?: Prisma.SortOrder;
    habits?: Prisma.habitsOrderByRelationAggregateInput;
    level_rewards?: Prisma.level_rewardsOrderByWithRelationInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    user_name?: Prisma.StringFilter<"users"> | string;
    password?: Prisma.StringFilter<"users"> | string;
    level?: Prisma.IntFilter<"users"> | number;
    bedtime?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    wakeup_time?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    productive_time?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    exp_points?: Prisma.BigIntFilter<"users"> | bigint | number;
    habits?: Prisma.HabitsListRelationFilter;
    level_rewards?: Prisma.XOR<Prisma.Level_rewardsNullableScalarRelationFilter, Prisma.level_rewardsWhereInput> | null;
}, "user_id">;
export type usersOrderByWithAggregationInput = {
    user_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    bedtime?: Prisma.SortOrderInput | Prisma.SortOrder;
    wakeup_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    productive_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    exp_points?: Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _avg?: Prisma.usersAvgOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
    _sum?: Prisma.usersSumOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    user_id?: Prisma.IntWithAggregatesFilter<"users"> | number;
    user_name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    password?: Prisma.StringWithAggregatesFilter<"users"> | string;
    level?: Prisma.IntWithAggregatesFilter<"users"> | number;
    bedtime?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
    wakeup_time?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
    productive_time?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
    exp_points?: Prisma.BigIntWithAggregatesFilter<"users"> | bigint | number;
};
export type usersCreateInput = {
    user_name: string;
    password: string;
    bedtime?: Date | string | null;
    wakeup_time?: Date | string | null;
    productive_time?: Date | string | null;
    exp_points?: bigint | number;
    habits?: Prisma.habitsCreateNestedManyWithoutUsersInput;
    level_rewards?: Prisma.level_rewardsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateInput = {
    user_id?: number;
    user_name: string;
    password: string;
    level?: number;
    bedtime?: Date | string | null;
    wakeup_time?: Date | string | null;
    productive_time?: Date | string | null;
    exp_points?: bigint | number;
    habits?: Prisma.habitsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersUpdateInput = {
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    bedtime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wakeup_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    productive_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exp_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    habits?: Prisma.habitsUpdateManyWithoutUsersNestedInput;
    level_rewards?: Prisma.level_rewardsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    bedtime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wakeup_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    productive_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exp_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    habits?: Prisma.habitsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateManyInput = {
    user_id?: number;
    user_name: string;
    password: string;
    level?: number;
    bedtime?: Date | string | null;
    wakeup_time?: Date | string | null;
    productive_time?: Date | string | null;
    exp_points?: bigint | number;
};
export type usersUpdateManyMutationInput = {
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    bedtime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wakeup_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    productive_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exp_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type usersUncheckedUpdateManyInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    bedtime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wakeup_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    productive_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exp_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UsersNullableScalarRelationFilter = {
    is?: Prisma.usersWhereInput | null;
    isNot?: Prisma.usersWhereInput | null;
};
export type UsersListRelationFilter = {
    every?: Prisma.usersWhereInput;
    some?: Prisma.usersWhereInput;
    none?: Prisma.usersWhereInput;
};
export type usersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type usersCountOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    bedtime?: Prisma.SortOrder;
    wakeup_time?: Prisma.SortOrder;
    productive_time?: Prisma.SortOrder;
    exp_points?: Prisma.SortOrder;
};
export type usersAvgOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    exp_points?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    bedtime?: Prisma.SortOrder;
    wakeup_time?: Prisma.SortOrder;
    productive_time?: Prisma.SortOrder;
    exp_points?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    user_name?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    bedtime?: Prisma.SortOrder;
    wakeup_time?: Prisma.SortOrder;
    productive_time?: Prisma.SortOrder;
    exp_points?: Prisma.SortOrder;
};
export type usersSumOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    exp_points?: Prisma.SortOrder;
};
export type usersCreateNestedOneWithoutHabitsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutHabitsInput, Prisma.usersUncheckedCreateWithoutHabitsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutHabitsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneWithoutHabitsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutHabitsInput, Prisma.usersUncheckedCreateWithoutHabitsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutHabitsInput;
    upsert?: Prisma.usersUpsertWithoutHabitsInput;
    disconnect?: Prisma.usersWhereInput | boolean;
    delete?: Prisma.usersWhereInput | boolean;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutHabitsInput, Prisma.usersUpdateWithoutHabitsInput>, Prisma.usersUncheckedUpdateWithoutHabitsInput>;
};
export type usersCreateNestedManyWithoutLevel_rewardsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutLevel_rewardsInput, Prisma.usersUncheckedCreateWithoutLevel_rewardsInput> | Prisma.usersCreateWithoutLevel_rewardsInput[] | Prisma.usersUncheckedCreateWithoutLevel_rewardsInput[];
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutLevel_rewardsInput | Prisma.usersCreateOrConnectWithoutLevel_rewardsInput[];
    createMany?: Prisma.usersCreateManyLevel_rewardsInputEnvelope;
    connect?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
};
export type usersUncheckedCreateNestedManyWithoutLevel_rewardsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutLevel_rewardsInput, Prisma.usersUncheckedCreateWithoutLevel_rewardsInput> | Prisma.usersCreateWithoutLevel_rewardsInput[] | Prisma.usersUncheckedCreateWithoutLevel_rewardsInput[];
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutLevel_rewardsInput | Prisma.usersCreateOrConnectWithoutLevel_rewardsInput[];
    createMany?: Prisma.usersCreateManyLevel_rewardsInputEnvelope;
    connect?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
};
export type usersUpdateManyWithoutLevel_rewardsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutLevel_rewardsInput, Prisma.usersUncheckedCreateWithoutLevel_rewardsInput> | Prisma.usersCreateWithoutLevel_rewardsInput[] | Prisma.usersUncheckedCreateWithoutLevel_rewardsInput[];
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutLevel_rewardsInput | Prisma.usersCreateOrConnectWithoutLevel_rewardsInput[];
    upsert?: Prisma.usersUpsertWithWhereUniqueWithoutLevel_rewardsInput | Prisma.usersUpsertWithWhereUniqueWithoutLevel_rewardsInput[];
    createMany?: Prisma.usersCreateManyLevel_rewardsInputEnvelope;
    set?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
    disconnect?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
    delete?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
    connect?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
    update?: Prisma.usersUpdateWithWhereUniqueWithoutLevel_rewardsInput | Prisma.usersUpdateWithWhereUniqueWithoutLevel_rewardsInput[];
    updateMany?: Prisma.usersUpdateManyWithWhereWithoutLevel_rewardsInput | Prisma.usersUpdateManyWithWhereWithoutLevel_rewardsInput[];
    deleteMany?: Prisma.usersScalarWhereInput | Prisma.usersScalarWhereInput[];
};
export type usersUncheckedUpdateManyWithoutLevel_rewardsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutLevel_rewardsInput, Prisma.usersUncheckedCreateWithoutLevel_rewardsInput> | Prisma.usersCreateWithoutLevel_rewardsInput[] | Prisma.usersUncheckedCreateWithoutLevel_rewardsInput[];
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutLevel_rewardsInput | Prisma.usersCreateOrConnectWithoutLevel_rewardsInput[];
    upsert?: Prisma.usersUpsertWithWhereUniqueWithoutLevel_rewardsInput | Prisma.usersUpsertWithWhereUniqueWithoutLevel_rewardsInput[];
    createMany?: Prisma.usersCreateManyLevel_rewardsInputEnvelope;
    set?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
    disconnect?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
    delete?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
    connect?: Prisma.usersWhereUniqueInput | Prisma.usersWhereUniqueInput[];
    update?: Prisma.usersUpdateWithWhereUniqueWithoutLevel_rewardsInput | Prisma.usersUpdateWithWhereUniqueWithoutLevel_rewardsInput[];
    updateMany?: Prisma.usersUpdateManyWithWhereWithoutLevel_rewardsInput | Prisma.usersUpdateManyWithWhereWithoutLevel_rewardsInput[];
    deleteMany?: Prisma.usersScalarWhereInput | Prisma.usersScalarWhereInput[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type usersCreateWithoutHabitsInput = {
    user_name: string;
    password: string;
    bedtime?: Date | string | null;
    wakeup_time?: Date | string | null;
    productive_time?: Date | string | null;
    exp_points?: bigint | number;
    level_rewards?: Prisma.level_rewardsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutHabitsInput = {
    user_id?: number;
    user_name: string;
    password: string;
    level?: number;
    bedtime?: Date | string | null;
    wakeup_time?: Date | string | null;
    productive_time?: Date | string | null;
    exp_points?: bigint | number;
};
export type usersCreateOrConnectWithoutHabitsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutHabitsInput, Prisma.usersUncheckedCreateWithoutHabitsInput>;
};
export type usersUpsertWithoutHabitsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutHabitsInput, Prisma.usersUncheckedUpdateWithoutHabitsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutHabitsInput, Prisma.usersUncheckedCreateWithoutHabitsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutHabitsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutHabitsInput, Prisma.usersUncheckedUpdateWithoutHabitsInput>;
};
export type usersUpdateWithoutHabitsInput = {
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    bedtime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wakeup_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    productive_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exp_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    level_rewards?: Prisma.level_rewardsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutHabitsInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    bedtime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wakeup_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    productive_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exp_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type usersCreateWithoutLevel_rewardsInput = {
    user_name: string;
    password: string;
    bedtime?: Date | string | null;
    wakeup_time?: Date | string | null;
    productive_time?: Date | string | null;
    exp_points?: bigint | number;
    habits?: Prisma.habitsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutLevel_rewardsInput = {
    user_id?: number;
    user_name: string;
    password: string;
    bedtime?: Date | string | null;
    wakeup_time?: Date | string | null;
    productive_time?: Date | string | null;
    exp_points?: bigint | number;
    habits?: Prisma.habitsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutLevel_rewardsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutLevel_rewardsInput, Prisma.usersUncheckedCreateWithoutLevel_rewardsInput>;
};
export type usersCreateManyLevel_rewardsInputEnvelope = {
    data: Prisma.usersCreateManyLevel_rewardsInput | Prisma.usersCreateManyLevel_rewardsInput[];
    skipDuplicates?: boolean;
};
export type usersUpsertWithWhereUniqueWithoutLevel_rewardsInput = {
    where: Prisma.usersWhereUniqueInput;
    update: Prisma.XOR<Prisma.usersUpdateWithoutLevel_rewardsInput, Prisma.usersUncheckedUpdateWithoutLevel_rewardsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutLevel_rewardsInput, Prisma.usersUncheckedCreateWithoutLevel_rewardsInput>;
};
export type usersUpdateWithWhereUniqueWithoutLevel_rewardsInput = {
    where: Prisma.usersWhereUniqueInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutLevel_rewardsInput, Prisma.usersUncheckedUpdateWithoutLevel_rewardsInput>;
};
export type usersUpdateManyWithWhereWithoutLevel_rewardsInput = {
    where: Prisma.usersScalarWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyWithoutLevel_rewardsInput>;
};
export type usersScalarWhereInput = {
    AND?: Prisma.usersScalarWhereInput | Prisma.usersScalarWhereInput[];
    OR?: Prisma.usersScalarWhereInput[];
    NOT?: Prisma.usersScalarWhereInput | Prisma.usersScalarWhereInput[];
    user_id?: Prisma.IntFilter<"users"> | number;
    user_name?: Prisma.StringFilter<"users"> | string;
    password?: Prisma.StringFilter<"users"> | string;
    level?: Prisma.IntFilter<"users"> | number;
    bedtime?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    wakeup_time?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    productive_time?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    exp_points?: Prisma.BigIntFilter<"users"> | bigint | number;
};
export type usersCreateManyLevel_rewardsInput = {
    user_id?: number;
    user_name: string;
    password: string;
    bedtime?: Date | string | null;
    wakeup_time?: Date | string | null;
    productive_time?: Date | string | null;
    exp_points?: bigint | number;
};
export type usersUpdateWithoutLevel_rewardsInput = {
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    bedtime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wakeup_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    productive_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exp_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    habits?: Prisma.habitsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutLevel_rewardsInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    bedtime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wakeup_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    productive_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exp_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    habits?: Prisma.habitsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateManyWithoutLevel_rewardsInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_name?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    bedtime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wakeup_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    productive_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exp_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UsersCountOutputType = {
    habits: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habits?: boolean | UsersCountOutputTypeCountHabitsArgs;
};
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
export type UsersCountOutputTypeCountHabitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.habitsWhereInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    user_name?: boolean;
    password?: boolean;
    level?: boolean;
    bedtime?: boolean;
    wakeup_time?: boolean;
    productive_time?: boolean;
    exp_points?: boolean;
    habits?: boolean | Prisma.users$habitsArgs<ExtArgs>;
    level_rewards?: boolean | Prisma.users$level_rewardsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    user_name?: boolean;
    password?: boolean;
    level?: boolean;
    bedtime?: boolean;
    wakeup_time?: boolean;
    productive_time?: boolean;
    exp_points?: boolean;
    level_rewards?: boolean | Prisma.users$level_rewardsArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    user_name?: boolean;
    password?: boolean;
    level?: boolean;
    bedtime?: boolean;
    wakeup_time?: boolean;
    productive_time?: boolean;
    exp_points?: boolean;
    level_rewards?: boolean | Prisma.users$level_rewardsArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    user_id?: boolean;
    user_name?: boolean;
    password?: boolean;
    level?: boolean;
    bedtime?: boolean;
    wakeup_time?: boolean;
    productive_time?: boolean;
    exp_points?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"user_id" | "user_name" | "password" | "level" | "bedtime" | "wakeup_time" | "productive_time" | "exp_points", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habits?: boolean | Prisma.users$habitsArgs<ExtArgs>;
    level_rewards?: boolean | Prisma.users$level_rewardsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type usersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    level_rewards?: boolean | Prisma.users$level_rewardsArgs<ExtArgs>;
};
export type usersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    level_rewards?: boolean | Prisma.users$level_rewardsArgs<ExtArgs>;
};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        habits: Prisma.$habitsPayload<ExtArgs>[];
        level_rewards: Prisma.$level_rewardsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        user_id: number;
        user_name: string;
        password: string;
        level: number;
        bedtime: Date | null;
        wakeup_time: Date | null;
        productive_time: Date | null;
        exp_points: bigint;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usersFieldRefs;
}
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    habits<T extends Prisma.users$habitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    level_rewards<T extends Prisma.users$level_rewardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$level_rewardsArgs<ExtArgs>>): Prisma.Prisma__level_rewardsClient<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usersFieldRefs {
    readonly user_id: Prisma.FieldRef<"users", 'Int'>;
    readonly user_name: Prisma.FieldRef<"users", 'String'>;
    readonly password: Prisma.FieldRef<"users", 'String'>;
    readonly level: Prisma.FieldRef<"users", 'Int'>;
    readonly bedtime: Prisma.FieldRef<"users", 'DateTime'>;
    readonly wakeup_time: Prisma.FieldRef<"users", 'DateTime'>;
    readonly productive_time: Prisma.FieldRef<"users", 'DateTime'>;
    readonly exp_points: Prisma.FieldRef<"users", 'BigInt'>;
}
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.usersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    where: Prisma.usersWhereUniqueInput;
};
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
    include?: Prisma.usersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type users$habitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type users$level_rewardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    where?: Prisma.level_rewardsWhereInput;
};
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
};
export {};
