import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type schedule_daysModel = runtime.Types.Result.DefaultSelection<Prisma.$schedule_daysPayload>;
export type AggregateSchedule_days = {
    _count: Schedule_daysCountAggregateOutputType | null;
    _avg: Schedule_daysAvgAggregateOutputType | null;
    _sum: Schedule_daysSumAggregateOutputType | null;
    _min: Schedule_daysMinAggregateOutputType | null;
    _max: Schedule_daysMaxAggregateOutputType | null;
};
export type Schedule_daysAvgAggregateOutputType = {
    schedule_day_id: number | null;
    schedule_id: number | null;
    day_of_week: number | null;
};
export type Schedule_daysSumAggregateOutputType = {
    schedule_day_id: number | null;
    schedule_id: number | null;
    day_of_week: number | null;
};
export type Schedule_daysMinAggregateOutputType = {
    schedule_day_id: number | null;
    schedule_id: number | null;
    day_of_week: number | null;
};
export type Schedule_daysMaxAggregateOutputType = {
    schedule_day_id: number | null;
    schedule_id: number | null;
    day_of_week: number | null;
};
export type Schedule_daysCountAggregateOutputType = {
    schedule_day_id: number;
    schedule_id: number;
    day_of_week: number;
    _all: number;
};
export type Schedule_daysAvgAggregateInputType = {
    schedule_day_id?: true;
    schedule_id?: true;
    day_of_week?: true;
};
export type Schedule_daysSumAggregateInputType = {
    schedule_day_id?: true;
    schedule_id?: true;
    day_of_week?: true;
};
export type Schedule_daysMinAggregateInputType = {
    schedule_day_id?: true;
    schedule_id?: true;
    day_of_week?: true;
};
export type Schedule_daysMaxAggregateInputType = {
    schedule_day_id?: true;
    schedule_id?: true;
    day_of_week?: true;
};
export type Schedule_daysCountAggregateInputType = {
    schedule_day_id?: true;
    schedule_id?: true;
    day_of_week?: true;
    _all?: true;
};
export type Schedule_daysAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.schedule_daysWhereInput;
    orderBy?: Prisma.schedule_daysOrderByWithRelationInput | Prisma.schedule_daysOrderByWithRelationInput[];
    cursor?: Prisma.schedule_daysWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Schedule_daysCountAggregateInputType;
    _avg?: Schedule_daysAvgAggregateInputType;
    _sum?: Schedule_daysSumAggregateInputType;
    _min?: Schedule_daysMinAggregateInputType;
    _max?: Schedule_daysMaxAggregateInputType;
};
export type GetSchedule_daysAggregateType<T extends Schedule_daysAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule_days]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchedule_days[P]> : Prisma.GetScalarType<T[P], AggregateSchedule_days[P]>;
};
export type schedule_daysGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.schedule_daysWhereInput;
    orderBy?: Prisma.schedule_daysOrderByWithAggregationInput | Prisma.schedule_daysOrderByWithAggregationInput[];
    by: Prisma.Schedule_daysScalarFieldEnum[] | Prisma.Schedule_daysScalarFieldEnum;
    having?: Prisma.schedule_daysScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Schedule_daysCountAggregateInputType | true;
    _avg?: Schedule_daysAvgAggregateInputType;
    _sum?: Schedule_daysSumAggregateInputType;
    _min?: Schedule_daysMinAggregateInputType;
    _max?: Schedule_daysMaxAggregateInputType;
};
export type Schedule_daysGroupByOutputType = {
    schedule_day_id: number;
    schedule_id: number | null;
    day_of_week: number | null;
    _count: Schedule_daysCountAggregateOutputType | null;
    _avg: Schedule_daysAvgAggregateOutputType | null;
    _sum: Schedule_daysSumAggregateOutputType | null;
    _min: Schedule_daysMinAggregateOutputType | null;
    _max: Schedule_daysMaxAggregateOutputType | null;
};
type GetSchedule_daysGroupByPayload<T extends schedule_daysGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Schedule_daysGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Schedule_daysGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Schedule_daysGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Schedule_daysGroupByOutputType[P]>;
}>>;
export type schedule_daysWhereInput = {
    AND?: Prisma.schedule_daysWhereInput | Prisma.schedule_daysWhereInput[];
    OR?: Prisma.schedule_daysWhereInput[];
    NOT?: Prisma.schedule_daysWhereInput | Prisma.schedule_daysWhereInput[];
    schedule_day_id?: Prisma.IntFilter<"schedule_days"> | number;
    schedule_id?: Prisma.IntNullableFilter<"schedule_days"> | number | null;
    day_of_week?: Prisma.IntNullableFilter<"schedule_days"> | number | null;
    schedule?: Prisma.XOR<Prisma.ScheduleNullableScalarRelationFilter, Prisma.scheduleWhereInput> | null;
};
export type schedule_daysOrderByWithRelationInput = {
    schedule_day_id?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    day_of_week?: Prisma.SortOrderInput | Prisma.SortOrder;
    schedule?: Prisma.scheduleOrderByWithRelationInput;
};
export type schedule_daysWhereUniqueInput = Prisma.AtLeast<{
    schedule_day_id?: number;
    AND?: Prisma.schedule_daysWhereInput | Prisma.schedule_daysWhereInput[];
    OR?: Prisma.schedule_daysWhereInput[];
    NOT?: Prisma.schedule_daysWhereInput | Prisma.schedule_daysWhereInput[];
    schedule_id?: Prisma.IntNullableFilter<"schedule_days"> | number | null;
    day_of_week?: Prisma.IntNullableFilter<"schedule_days"> | number | null;
    schedule?: Prisma.XOR<Prisma.ScheduleNullableScalarRelationFilter, Prisma.scheduleWhereInput> | null;
}, "schedule_day_id">;
export type schedule_daysOrderByWithAggregationInput = {
    schedule_day_id?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    day_of_week?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.schedule_daysCountOrderByAggregateInput;
    _avg?: Prisma.schedule_daysAvgOrderByAggregateInput;
    _max?: Prisma.schedule_daysMaxOrderByAggregateInput;
    _min?: Prisma.schedule_daysMinOrderByAggregateInput;
    _sum?: Prisma.schedule_daysSumOrderByAggregateInput;
};
export type schedule_daysScalarWhereWithAggregatesInput = {
    AND?: Prisma.schedule_daysScalarWhereWithAggregatesInput | Prisma.schedule_daysScalarWhereWithAggregatesInput[];
    OR?: Prisma.schedule_daysScalarWhereWithAggregatesInput[];
    NOT?: Prisma.schedule_daysScalarWhereWithAggregatesInput | Prisma.schedule_daysScalarWhereWithAggregatesInput[];
    schedule_day_id?: Prisma.IntWithAggregatesFilter<"schedule_days"> | number;
    schedule_id?: Prisma.IntNullableWithAggregatesFilter<"schedule_days"> | number | null;
    day_of_week?: Prisma.IntNullableWithAggregatesFilter<"schedule_days"> | number | null;
};
export type schedule_daysCreateInput = {
    day_of_week?: number | null;
    schedule?: Prisma.scheduleCreateNestedOneWithoutSchedule_daysInput;
};
export type schedule_daysUncheckedCreateInput = {
    schedule_day_id?: number;
    schedule_id?: number | null;
    day_of_week?: number | null;
};
export type schedule_daysUpdateInput = {
    day_of_week?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    schedule?: Prisma.scheduleUpdateOneWithoutSchedule_daysNestedInput;
};
export type schedule_daysUncheckedUpdateInput = {
    schedule_day_id?: Prisma.IntFieldUpdateOperationsInput | number;
    schedule_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    day_of_week?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type schedule_daysCreateManyInput = {
    schedule_day_id?: number;
    schedule_id?: number | null;
    day_of_week?: number | null;
};
export type schedule_daysUpdateManyMutationInput = {
    day_of_week?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type schedule_daysUncheckedUpdateManyInput = {
    schedule_day_id?: Prisma.IntFieldUpdateOperationsInput | number;
    schedule_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    day_of_week?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Schedule_daysListRelationFilter = {
    every?: Prisma.schedule_daysWhereInput;
    some?: Prisma.schedule_daysWhereInput;
    none?: Prisma.schedule_daysWhereInput;
};
export type schedule_daysOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type schedule_daysCountOrderByAggregateInput = {
    schedule_day_id?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type schedule_daysAvgOrderByAggregateInput = {
    schedule_day_id?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type schedule_daysMaxOrderByAggregateInput = {
    schedule_day_id?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type schedule_daysMinOrderByAggregateInput = {
    schedule_day_id?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type schedule_daysSumOrderByAggregateInput = {
    schedule_day_id?: Prisma.SortOrder;
    schedule_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type schedule_daysCreateNestedManyWithoutScheduleInput = {
    create?: Prisma.XOR<Prisma.schedule_daysCreateWithoutScheduleInput, Prisma.schedule_daysUncheckedCreateWithoutScheduleInput> | Prisma.schedule_daysCreateWithoutScheduleInput[] | Prisma.schedule_daysUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.schedule_daysCreateOrConnectWithoutScheduleInput | Prisma.schedule_daysCreateOrConnectWithoutScheduleInput[];
    createMany?: Prisma.schedule_daysCreateManyScheduleInputEnvelope;
    connect?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
};
export type schedule_daysUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: Prisma.XOR<Prisma.schedule_daysCreateWithoutScheduleInput, Prisma.schedule_daysUncheckedCreateWithoutScheduleInput> | Prisma.schedule_daysCreateWithoutScheduleInput[] | Prisma.schedule_daysUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.schedule_daysCreateOrConnectWithoutScheduleInput | Prisma.schedule_daysCreateOrConnectWithoutScheduleInput[];
    createMany?: Prisma.schedule_daysCreateManyScheduleInputEnvelope;
    connect?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
};
export type schedule_daysUpdateManyWithoutScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.schedule_daysCreateWithoutScheduleInput, Prisma.schedule_daysUncheckedCreateWithoutScheduleInput> | Prisma.schedule_daysCreateWithoutScheduleInput[] | Prisma.schedule_daysUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.schedule_daysCreateOrConnectWithoutScheduleInput | Prisma.schedule_daysCreateOrConnectWithoutScheduleInput[];
    upsert?: Prisma.schedule_daysUpsertWithWhereUniqueWithoutScheduleInput | Prisma.schedule_daysUpsertWithWhereUniqueWithoutScheduleInput[];
    createMany?: Prisma.schedule_daysCreateManyScheduleInputEnvelope;
    set?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
    disconnect?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
    delete?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
    connect?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
    update?: Prisma.schedule_daysUpdateWithWhereUniqueWithoutScheduleInput | Prisma.schedule_daysUpdateWithWhereUniqueWithoutScheduleInput[];
    updateMany?: Prisma.schedule_daysUpdateManyWithWhereWithoutScheduleInput | Prisma.schedule_daysUpdateManyWithWhereWithoutScheduleInput[];
    deleteMany?: Prisma.schedule_daysScalarWhereInput | Prisma.schedule_daysScalarWhereInput[];
};
export type schedule_daysUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.schedule_daysCreateWithoutScheduleInput, Prisma.schedule_daysUncheckedCreateWithoutScheduleInput> | Prisma.schedule_daysCreateWithoutScheduleInput[] | Prisma.schedule_daysUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.schedule_daysCreateOrConnectWithoutScheduleInput | Prisma.schedule_daysCreateOrConnectWithoutScheduleInput[];
    upsert?: Prisma.schedule_daysUpsertWithWhereUniqueWithoutScheduleInput | Prisma.schedule_daysUpsertWithWhereUniqueWithoutScheduleInput[];
    createMany?: Prisma.schedule_daysCreateManyScheduleInputEnvelope;
    set?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
    disconnect?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
    delete?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
    connect?: Prisma.schedule_daysWhereUniqueInput | Prisma.schedule_daysWhereUniqueInput[];
    update?: Prisma.schedule_daysUpdateWithWhereUniqueWithoutScheduleInput | Prisma.schedule_daysUpdateWithWhereUniqueWithoutScheduleInput[];
    updateMany?: Prisma.schedule_daysUpdateManyWithWhereWithoutScheduleInput | Prisma.schedule_daysUpdateManyWithWhereWithoutScheduleInput[];
    deleteMany?: Prisma.schedule_daysScalarWhereInput | Prisma.schedule_daysScalarWhereInput[];
};
export type schedule_daysCreateWithoutScheduleInput = {
    day_of_week?: number | null;
};
export type schedule_daysUncheckedCreateWithoutScheduleInput = {
    schedule_day_id?: number;
    day_of_week?: number | null;
};
export type schedule_daysCreateOrConnectWithoutScheduleInput = {
    where: Prisma.schedule_daysWhereUniqueInput;
    create: Prisma.XOR<Prisma.schedule_daysCreateWithoutScheduleInput, Prisma.schedule_daysUncheckedCreateWithoutScheduleInput>;
};
export type schedule_daysCreateManyScheduleInputEnvelope = {
    data: Prisma.schedule_daysCreateManyScheduleInput | Prisma.schedule_daysCreateManyScheduleInput[];
    skipDuplicates?: boolean;
};
export type schedule_daysUpsertWithWhereUniqueWithoutScheduleInput = {
    where: Prisma.schedule_daysWhereUniqueInput;
    update: Prisma.XOR<Prisma.schedule_daysUpdateWithoutScheduleInput, Prisma.schedule_daysUncheckedUpdateWithoutScheduleInput>;
    create: Prisma.XOR<Prisma.schedule_daysCreateWithoutScheduleInput, Prisma.schedule_daysUncheckedCreateWithoutScheduleInput>;
};
export type schedule_daysUpdateWithWhereUniqueWithoutScheduleInput = {
    where: Prisma.schedule_daysWhereUniqueInput;
    data: Prisma.XOR<Prisma.schedule_daysUpdateWithoutScheduleInput, Prisma.schedule_daysUncheckedUpdateWithoutScheduleInput>;
};
export type schedule_daysUpdateManyWithWhereWithoutScheduleInput = {
    where: Prisma.schedule_daysScalarWhereInput;
    data: Prisma.XOR<Prisma.schedule_daysUpdateManyMutationInput, Prisma.schedule_daysUncheckedUpdateManyWithoutScheduleInput>;
};
export type schedule_daysScalarWhereInput = {
    AND?: Prisma.schedule_daysScalarWhereInput | Prisma.schedule_daysScalarWhereInput[];
    OR?: Prisma.schedule_daysScalarWhereInput[];
    NOT?: Prisma.schedule_daysScalarWhereInput | Prisma.schedule_daysScalarWhereInput[];
    schedule_day_id?: Prisma.IntFilter<"schedule_days"> | number;
    schedule_id?: Prisma.IntNullableFilter<"schedule_days"> | number | null;
    day_of_week?: Prisma.IntNullableFilter<"schedule_days"> | number | null;
};
export type schedule_daysCreateManyScheduleInput = {
    schedule_day_id?: number;
    day_of_week?: number | null;
};
export type schedule_daysUpdateWithoutScheduleInput = {
    day_of_week?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type schedule_daysUncheckedUpdateWithoutScheduleInput = {
    schedule_day_id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_of_week?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type schedule_daysUncheckedUpdateManyWithoutScheduleInput = {
    schedule_day_id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_of_week?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type schedule_daysSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    schedule_day_id?: boolean;
    schedule_id?: boolean;
    day_of_week?: boolean;
    schedule?: boolean | Prisma.schedule_days$scheduleArgs<ExtArgs>;
}, ExtArgs["result"]["schedule_days"]>;
export type schedule_daysSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    schedule_day_id?: boolean;
    schedule_id?: boolean;
    day_of_week?: boolean;
    schedule?: boolean | Prisma.schedule_days$scheduleArgs<ExtArgs>;
}, ExtArgs["result"]["schedule_days"]>;
export type schedule_daysSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    schedule_day_id?: boolean;
    schedule_id?: boolean;
    day_of_week?: boolean;
    schedule?: boolean | Prisma.schedule_days$scheduleArgs<ExtArgs>;
}, ExtArgs["result"]["schedule_days"]>;
export type schedule_daysSelectScalar = {
    schedule_day_id?: boolean;
    schedule_id?: boolean;
    day_of_week?: boolean;
};
export type schedule_daysOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"schedule_day_id" | "schedule_id" | "day_of_week", ExtArgs["result"]["schedule_days"]>;
export type schedule_daysInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    schedule?: boolean | Prisma.schedule_days$scheduleArgs<ExtArgs>;
};
export type schedule_daysIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    schedule?: boolean | Prisma.schedule_days$scheduleArgs<ExtArgs>;
};
export type schedule_daysIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    schedule?: boolean | Prisma.schedule_days$scheduleArgs<ExtArgs>;
};
export type $schedule_daysPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "schedule_days";
    objects: {
        schedule: Prisma.$schedulePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        schedule_day_id: number;
        schedule_id: number | null;
        day_of_week: number | null;
    }, ExtArgs["result"]["schedule_days"]>;
    composites: {};
};
export type schedule_daysGetPayload<S extends boolean | null | undefined | schedule_daysDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload, S>;
export type schedule_daysCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<schedule_daysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Schedule_daysCountAggregateInputType | true;
};
export interface schedule_daysDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['schedule_days'];
        meta: {
            name: 'schedule_days';
        };
    };
    findUnique<T extends schedule_daysFindUniqueArgs>(args: Prisma.SelectSubset<T, schedule_daysFindUniqueArgs<ExtArgs>>): Prisma.Prisma__schedule_daysClient<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends schedule_daysFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, schedule_daysFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__schedule_daysClient<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends schedule_daysFindFirstArgs>(args?: Prisma.SelectSubset<T, schedule_daysFindFirstArgs<ExtArgs>>): Prisma.Prisma__schedule_daysClient<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends schedule_daysFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, schedule_daysFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__schedule_daysClient<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends schedule_daysFindManyArgs>(args?: Prisma.SelectSubset<T, schedule_daysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends schedule_daysCreateArgs>(args: Prisma.SelectSubset<T, schedule_daysCreateArgs<ExtArgs>>): Prisma.Prisma__schedule_daysClient<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends schedule_daysCreateManyArgs>(args?: Prisma.SelectSubset<T, schedule_daysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends schedule_daysCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, schedule_daysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends schedule_daysDeleteArgs>(args: Prisma.SelectSubset<T, schedule_daysDeleteArgs<ExtArgs>>): Prisma.Prisma__schedule_daysClient<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends schedule_daysUpdateArgs>(args: Prisma.SelectSubset<T, schedule_daysUpdateArgs<ExtArgs>>): Prisma.Prisma__schedule_daysClient<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends schedule_daysDeleteManyArgs>(args?: Prisma.SelectSubset<T, schedule_daysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends schedule_daysUpdateManyArgs>(args: Prisma.SelectSubset<T, schedule_daysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends schedule_daysUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, schedule_daysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends schedule_daysUpsertArgs>(args: Prisma.SelectSubset<T, schedule_daysUpsertArgs<ExtArgs>>): Prisma.Prisma__schedule_daysClient<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends schedule_daysCountArgs>(args?: Prisma.Subset<T, schedule_daysCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Schedule_daysCountAggregateOutputType> : number>;
    aggregate<T extends Schedule_daysAggregateArgs>(args: Prisma.Subset<T, Schedule_daysAggregateArgs>): Prisma.PrismaPromise<GetSchedule_daysAggregateType<T>>;
    groupBy<T extends schedule_daysGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: schedule_daysGroupByArgs['orderBy'];
    } : {
        orderBy?: schedule_daysGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, schedule_daysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedule_daysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: schedule_daysFieldRefs;
}
export interface Prisma__schedule_daysClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    schedule<T extends Prisma.schedule_days$scheduleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.schedule_days$scheduleArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface schedule_daysFieldRefs {
    readonly schedule_day_id: Prisma.FieldRef<"schedule_days", 'Int'>;
    readonly schedule_id: Prisma.FieldRef<"schedule_days", 'Int'>;
    readonly day_of_week: Prisma.FieldRef<"schedule_days", 'Int'>;
}
export type schedule_daysFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
    where: Prisma.schedule_daysWhereUniqueInput;
};
export type schedule_daysFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
    where: Prisma.schedule_daysWhereUniqueInput;
};
export type schedule_daysFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
    where?: Prisma.schedule_daysWhereInput;
    orderBy?: Prisma.schedule_daysOrderByWithRelationInput | Prisma.schedule_daysOrderByWithRelationInput[];
    cursor?: Prisma.schedule_daysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Schedule_daysScalarFieldEnum | Prisma.Schedule_daysScalarFieldEnum[];
};
export type schedule_daysFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
    where?: Prisma.schedule_daysWhereInput;
    orderBy?: Prisma.schedule_daysOrderByWithRelationInput | Prisma.schedule_daysOrderByWithRelationInput[];
    cursor?: Prisma.schedule_daysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Schedule_daysScalarFieldEnum | Prisma.Schedule_daysScalarFieldEnum[];
};
export type schedule_daysFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
    where?: Prisma.schedule_daysWhereInput;
    orderBy?: Prisma.schedule_daysOrderByWithRelationInput | Prisma.schedule_daysOrderByWithRelationInput[];
    cursor?: Prisma.schedule_daysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Schedule_daysScalarFieldEnum | Prisma.Schedule_daysScalarFieldEnum[];
};
export type schedule_daysCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.schedule_daysCreateInput, Prisma.schedule_daysUncheckedCreateInput>;
};
export type schedule_daysCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.schedule_daysCreateManyInput | Prisma.schedule_daysCreateManyInput[];
    skipDuplicates?: boolean;
};
export type schedule_daysCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    data: Prisma.schedule_daysCreateManyInput | Prisma.schedule_daysCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.schedule_daysIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type schedule_daysUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.schedule_daysUpdateInput, Prisma.schedule_daysUncheckedUpdateInput>;
    where: Prisma.schedule_daysWhereUniqueInput;
};
export type schedule_daysUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.schedule_daysUpdateManyMutationInput, Prisma.schedule_daysUncheckedUpdateManyInput>;
    where?: Prisma.schedule_daysWhereInput;
    limit?: number;
};
export type schedule_daysUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.schedule_daysUpdateManyMutationInput, Prisma.schedule_daysUncheckedUpdateManyInput>;
    where?: Prisma.schedule_daysWhereInput;
    limit?: number;
    include?: Prisma.schedule_daysIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type schedule_daysUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
    where: Prisma.schedule_daysWhereUniqueInput;
    create: Prisma.XOR<Prisma.schedule_daysCreateInput, Prisma.schedule_daysUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.schedule_daysUpdateInput, Prisma.schedule_daysUncheckedUpdateInput>;
};
export type schedule_daysDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
    where: Prisma.schedule_daysWhereUniqueInput;
};
export type schedule_daysDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.schedule_daysWhereInput;
    limit?: number;
};
export type schedule_days$scheduleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    where?: Prisma.scheduleWhereInput;
};
export type schedule_daysDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.schedule_daysSelect<ExtArgs> | null;
    omit?: Prisma.schedule_daysOmit<ExtArgs> | null;
    include?: Prisma.schedule_daysInclude<ExtArgs> | null;
};
export {};
