import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type scheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$schedulePayload>;
export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null;
    _avg: ScheduleAvgAggregateOutputType | null;
    _sum: ScheduleSumAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
};
export type ScheduleAvgAggregateOutputType = {
    schedule_id: number | null;
};
export type ScheduleSumAggregateOutputType = {
    schedule_id: number | null;
};
export type ScheduleMinAggregateOutputType = {
    schedule_id: number | null;
    schedule_name: string | null;
};
export type ScheduleMaxAggregateOutputType = {
    schedule_id: number | null;
    schedule_name: string | null;
};
export type ScheduleCountAggregateOutputType = {
    schedule_id: number;
    schedule_name: number;
    _all: number;
};
export type ScheduleAvgAggregateInputType = {
    schedule_id?: true;
};
export type ScheduleSumAggregateInputType = {
    schedule_id?: true;
};
export type ScheduleMinAggregateInputType = {
    schedule_id?: true;
    schedule_name?: true;
};
export type ScheduleMaxAggregateInputType = {
    schedule_id?: true;
    schedule_name?: true;
};
export type ScheduleCountAggregateInputType = {
    schedule_id?: true;
    schedule_name?: true;
    _all?: true;
};
export type ScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.scheduleWhereInput;
    orderBy?: Prisma.scheduleOrderByWithRelationInput | Prisma.scheduleOrderByWithRelationInput[];
    cursor?: Prisma.scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScheduleCountAggregateInputType;
    _avg?: ScheduleAvgAggregateInputType;
    _sum?: ScheduleSumAggregateInputType;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
};
export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchedule[P]> : Prisma.GetScalarType<T[P], AggregateSchedule[P]>;
};
export type scheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.scheduleWhereInput;
    orderBy?: Prisma.scheduleOrderByWithAggregationInput | Prisma.scheduleOrderByWithAggregationInput[];
    by: Prisma.ScheduleScalarFieldEnum[] | Prisma.ScheduleScalarFieldEnum;
    having?: Prisma.scheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInputType | true;
    _avg?: ScheduleAvgAggregateInputType;
    _sum?: ScheduleSumAggregateInputType;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
};
export type ScheduleGroupByOutputType = {
    schedule_id: number;
    schedule_name: string | null;
    _count: ScheduleCountAggregateOutputType | null;
    _avg: ScheduleAvgAggregateOutputType | null;
    _sum: ScheduleSumAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
};
type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScheduleGroupByOutputType[P]>;
}>>;
export type scheduleWhereInput = {
    AND?: Prisma.scheduleWhereInput | Prisma.scheduleWhereInput[];
    OR?: Prisma.scheduleWhereInput[];
    NOT?: Prisma.scheduleWhereInput | Prisma.scheduleWhereInput[];
    schedule_id?: Prisma.IntFilter<"schedule"> | number;
    schedule_name?: Prisma.StringNullableFilter<"schedule"> | string | null;
    habits?: Prisma.HabitsListRelationFilter;
    schedule_days?: Prisma.Schedule_daysListRelationFilter;
};
export type scheduleOrderByWithRelationInput = {
    schedule_id?: Prisma.SortOrder;
    schedule_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    habits?: Prisma.habitsOrderByRelationAggregateInput;
    schedule_days?: Prisma.schedule_daysOrderByRelationAggregateInput;
};
export type scheduleWhereUniqueInput = Prisma.AtLeast<{
    schedule_id?: number;
    AND?: Prisma.scheduleWhereInput | Prisma.scheduleWhereInput[];
    OR?: Prisma.scheduleWhereInput[];
    NOT?: Prisma.scheduleWhereInput | Prisma.scheduleWhereInput[];
    schedule_name?: Prisma.StringNullableFilter<"schedule"> | string | null;
    habits?: Prisma.HabitsListRelationFilter;
    schedule_days?: Prisma.Schedule_daysListRelationFilter;
}, "schedule_id">;
export type scheduleOrderByWithAggregationInput = {
    schedule_id?: Prisma.SortOrder;
    schedule_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.scheduleCountOrderByAggregateInput;
    _avg?: Prisma.scheduleAvgOrderByAggregateInput;
    _max?: Prisma.scheduleMaxOrderByAggregateInput;
    _min?: Prisma.scheduleMinOrderByAggregateInput;
    _sum?: Prisma.scheduleSumOrderByAggregateInput;
};
export type scheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.scheduleScalarWhereWithAggregatesInput | Prisma.scheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.scheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.scheduleScalarWhereWithAggregatesInput | Prisma.scheduleScalarWhereWithAggregatesInput[];
    schedule_id?: Prisma.IntWithAggregatesFilter<"schedule"> | number;
    schedule_name?: Prisma.StringNullableWithAggregatesFilter<"schedule"> | string | null;
};
export type scheduleCreateInput = {
    schedule_name?: string | null;
    habits?: Prisma.habitsCreateNestedManyWithoutScheduleInput;
    schedule_days?: Prisma.schedule_daysCreateNestedManyWithoutScheduleInput;
};
export type scheduleUncheckedCreateInput = {
    schedule_id?: number;
    schedule_name?: string | null;
    habits?: Prisma.habitsUncheckedCreateNestedManyWithoutScheduleInput;
    schedule_days?: Prisma.schedule_daysUncheckedCreateNestedManyWithoutScheduleInput;
};
export type scheduleUpdateInput = {
    schedule_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    habits?: Prisma.habitsUpdateManyWithoutScheduleNestedInput;
    schedule_days?: Prisma.schedule_daysUpdateManyWithoutScheduleNestedInput;
};
export type scheduleUncheckedUpdateInput = {
    schedule_id?: Prisma.IntFieldUpdateOperationsInput | number;
    schedule_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    habits?: Prisma.habitsUncheckedUpdateManyWithoutScheduleNestedInput;
    schedule_days?: Prisma.schedule_daysUncheckedUpdateManyWithoutScheduleNestedInput;
};
export type scheduleCreateManyInput = {
    schedule_id?: number;
    schedule_name?: string | null;
};
export type scheduleUpdateManyMutationInput = {
    schedule_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type scheduleUncheckedUpdateManyInput = {
    schedule_id?: Prisma.IntFieldUpdateOperationsInput | number;
    schedule_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ScheduleNullableScalarRelationFilter = {
    is?: Prisma.scheduleWhereInput | null;
    isNot?: Prisma.scheduleWhereInput | null;
};
export type scheduleCountOrderByAggregateInput = {
    schedule_id?: Prisma.SortOrder;
    schedule_name?: Prisma.SortOrder;
};
export type scheduleAvgOrderByAggregateInput = {
    schedule_id?: Prisma.SortOrder;
};
export type scheduleMaxOrderByAggregateInput = {
    schedule_id?: Prisma.SortOrder;
    schedule_name?: Prisma.SortOrder;
};
export type scheduleMinOrderByAggregateInput = {
    schedule_id?: Prisma.SortOrder;
    schedule_name?: Prisma.SortOrder;
};
export type scheduleSumOrderByAggregateInput = {
    schedule_id?: Prisma.SortOrder;
};
export type scheduleCreateNestedOneWithoutHabitsInput = {
    create?: Prisma.XOR<Prisma.scheduleCreateWithoutHabitsInput, Prisma.scheduleUncheckedCreateWithoutHabitsInput>;
    connectOrCreate?: Prisma.scheduleCreateOrConnectWithoutHabitsInput;
    connect?: Prisma.scheduleWhereUniqueInput;
};
export type scheduleUpdateOneWithoutHabitsNestedInput = {
    create?: Prisma.XOR<Prisma.scheduleCreateWithoutHabitsInput, Prisma.scheduleUncheckedCreateWithoutHabitsInput>;
    connectOrCreate?: Prisma.scheduleCreateOrConnectWithoutHabitsInput;
    upsert?: Prisma.scheduleUpsertWithoutHabitsInput;
    disconnect?: Prisma.scheduleWhereInput | boolean;
    delete?: Prisma.scheduleWhereInput | boolean;
    connect?: Prisma.scheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.scheduleUpdateToOneWithWhereWithoutHabitsInput, Prisma.scheduleUpdateWithoutHabitsInput>, Prisma.scheduleUncheckedUpdateWithoutHabitsInput>;
};
export type scheduleCreateNestedOneWithoutSchedule_daysInput = {
    create?: Prisma.XOR<Prisma.scheduleCreateWithoutSchedule_daysInput, Prisma.scheduleUncheckedCreateWithoutSchedule_daysInput>;
    connectOrCreate?: Prisma.scheduleCreateOrConnectWithoutSchedule_daysInput;
    connect?: Prisma.scheduleWhereUniqueInput;
};
export type scheduleUpdateOneWithoutSchedule_daysNestedInput = {
    create?: Prisma.XOR<Prisma.scheduleCreateWithoutSchedule_daysInput, Prisma.scheduleUncheckedCreateWithoutSchedule_daysInput>;
    connectOrCreate?: Prisma.scheduleCreateOrConnectWithoutSchedule_daysInput;
    upsert?: Prisma.scheduleUpsertWithoutSchedule_daysInput;
    disconnect?: Prisma.scheduleWhereInput | boolean;
    delete?: Prisma.scheduleWhereInput | boolean;
    connect?: Prisma.scheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.scheduleUpdateToOneWithWhereWithoutSchedule_daysInput, Prisma.scheduleUpdateWithoutSchedule_daysInput>, Prisma.scheduleUncheckedUpdateWithoutSchedule_daysInput>;
};
export type scheduleCreateWithoutHabitsInput = {
    schedule_name?: string | null;
    schedule_days?: Prisma.schedule_daysCreateNestedManyWithoutScheduleInput;
};
export type scheduleUncheckedCreateWithoutHabitsInput = {
    schedule_id?: number;
    schedule_name?: string | null;
    schedule_days?: Prisma.schedule_daysUncheckedCreateNestedManyWithoutScheduleInput;
};
export type scheduleCreateOrConnectWithoutHabitsInput = {
    where: Prisma.scheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.scheduleCreateWithoutHabitsInput, Prisma.scheduleUncheckedCreateWithoutHabitsInput>;
};
export type scheduleUpsertWithoutHabitsInput = {
    update: Prisma.XOR<Prisma.scheduleUpdateWithoutHabitsInput, Prisma.scheduleUncheckedUpdateWithoutHabitsInput>;
    create: Prisma.XOR<Prisma.scheduleCreateWithoutHabitsInput, Prisma.scheduleUncheckedCreateWithoutHabitsInput>;
    where?: Prisma.scheduleWhereInput;
};
export type scheduleUpdateToOneWithWhereWithoutHabitsInput = {
    where?: Prisma.scheduleWhereInput;
    data: Prisma.XOR<Prisma.scheduleUpdateWithoutHabitsInput, Prisma.scheduleUncheckedUpdateWithoutHabitsInput>;
};
export type scheduleUpdateWithoutHabitsInput = {
    schedule_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schedule_days?: Prisma.schedule_daysUpdateManyWithoutScheduleNestedInput;
};
export type scheduleUncheckedUpdateWithoutHabitsInput = {
    schedule_id?: Prisma.IntFieldUpdateOperationsInput | number;
    schedule_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schedule_days?: Prisma.schedule_daysUncheckedUpdateManyWithoutScheduleNestedInput;
};
export type scheduleCreateWithoutSchedule_daysInput = {
    schedule_name?: string | null;
    habits?: Prisma.habitsCreateNestedManyWithoutScheduleInput;
};
export type scheduleUncheckedCreateWithoutSchedule_daysInput = {
    schedule_id?: number;
    schedule_name?: string | null;
    habits?: Prisma.habitsUncheckedCreateNestedManyWithoutScheduleInput;
};
export type scheduleCreateOrConnectWithoutSchedule_daysInput = {
    where: Prisma.scheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.scheduleCreateWithoutSchedule_daysInput, Prisma.scheduleUncheckedCreateWithoutSchedule_daysInput>;
};
export type scheduleUpsertWithoutSchedule_daysInput = {
    update: Prisma.XOR<Prisma.scheduleUpdateWithoutSchedule_daysInput, Prisma.scheduleUncheckedUpdateWithoutSchedule_daysInput>;
    create: Prisma.XOR<Prisma.scheduleCreateWithoutSchedule_daysInput, Prisma.scheduleUncheckedCreateWithoutSchedule_daysInput>;
    where?: Prisma.scheduleWhereInput;
};
export type scheduleUpdateToOneWithWhereWithoutSchedule_daysInput = {
    where?: Prisma.scheduleWhereInput;
    data: Prisma.XOR<Prisma.scheduleUpdateWithoutSchedule_daysInput, Prisma.scheduleUncheckedUpdateWithoutSchedule_daysInput>;
};
export type scheduleUpdateWithoutSchedule_daysInput = {
    schedule_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    habits?: Prisma.habitsUpdateManyWithoutScheduleNestedInput;
};
export type scheduleUncheckedUpdateWithoutSchedule_daysInput = {
    schedule_id?: Prisma.IntFieldUpdateOperationsInput | number;
    schedule_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    habits?: Prisma.habitsUncheckedUpdateManyWithoutScheduleNestedInput;
};
export type ScheduleCountOutputType = {
    habits: number;
    schedule_days: number;
};
export type ScheduleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habits?: boolean | ScheduleCountOutputTypeCountHabitsArgs;
    schedule_days?: boolean | ScheduleCountOutputTypeCountSchedule_daysArgs;
};
export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleCountOutputTypeSelect<ExtArgs> | null;
};
export type ScheduleCountOutputTypeCountHabitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.habitsWhereInput;
};
export type ScheduleCountOutputTypeCountSchedule_daysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.schedule_daysWhereInput;
};
export type scheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    schedule_id?: boolean;
    schedule_name?: boolean;
    habits?: boolean | Prisma.schedule$habitsArgs<ExtArgs>;
    schedule_days?: boolean | Prisma.schedule$schedule_daysArgs<ExtArgs>;
    _count?: boolean | Prisma.ScheduleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type scheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    schedule_id?: boolean;
    schedule_name?: boolean;
}, ExtArgs["result"]["schedule"]>;
export type scheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    schedule_id?: boolean;
    schedule_name?: boolean;
}, ExtArgs["result"]["schedule"]>;
export type scheduleSelectScalar = {
    schedule_id?: boolean;
    schedule_name?: boolean;
};
export type scheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"schedule_id" | "schedule_name", ExtArgs["result"]["schedule"]>;
export type scheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habits?: boolean | Prisma.schedule$habitsArgs<ExtArgs>;
    schedule_days?: boolean | Prisma.schedule$schedule_daysArgs<ExtArgs>;
    _count?: boolean | Prisma.ScheduleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type scheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type scheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $schedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "schedule";
    objects: {
        habits: Prisma.$habitsPayload<ExtArgs>[];
        schedule_days: Prisma.$schedule_daysPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        schedule_id: number;
        schedule_name: string | null;
    }, ExtArgs["result"]["schedule"]>;
    composites: {};
};
export type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$schedulePayload, S>;
export type scheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScheduleCountAggregateInputType | true;
};
export interface scheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['schedule'];
        meta: {
            name: 'schedule';
        };
    };
    findUnique<T extends scheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends scheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends scheduleFindManyArgs>(args?: Prisma.SelectSubset<T, scheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends scheduleCreateArgs>(args: Prisma.SelectSubset<T, scheduleCreateArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends scheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends scheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, scheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends scheduleDeleteArgs>(args: Prisma.SelectSubset<T, scheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends scheduleUpdateArgs>(args: Prisma.SelectSubset<T, scheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends scheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends scheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends scheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, scheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends scheduleUpsertArgs>(args: Prisma.SelectSubset<T, scheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__scheduleClient<runtime.Types.Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends scheduleCountArgs>(args?: Prisma.Subset<T, scheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScheduleCountAggregateOutputType> : number>;
    aggregate<T extends ScheduleAggregateArgs>(args: Prisma.Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>;
    groupBy<T extends scheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: scheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: scheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: scheduleFieldRefs;
}
export interface Prisma__scheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    habits<T extends Prisma.schedule$habitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.schedule$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    schedule_days<T extends Prisma.schedule$schedule_daysArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.schedule$schedule_daysArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$schedule_daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface scheduleFieldRefs {
    readonly schedule_id: Prisma.FieldRef<"schedule", 'Int'>;
    readonly schedule_name: Prisma.FieldRef<"schedule", 'String'>;
}
export type scheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    where: Prisma.scheduleWhereUniqueInput;
};
export type scheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    where: Prisma.scheduleWhereUniqueInput;
};
export type scheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    where?: Prisma.scheduleWhereInput;
    orderBy?: Prisma.scheduleOrderByWithRelationInput | Prisma.scheduleOrderByWithRelationInput[];
    cursor?: Prisma.scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type scheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    where?: Prisma.scheduleWhereInput;
    orderBy?: Prisma.scheduleOrderByWithRelationInput | Prisma.scheduleOrderByWithRelationInput[];
    cursor?: Prisma.scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type scheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    where?: Prisma.scheduleWhereInput;
    orderBy?: Prisma.scheduleOrderByWithRelationInput | Prisma.scheduleOrderByWithRelationInput[];
    cursor?: Prisma.scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type scheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.scheduleCreateInput, Prisma.scheduleUncheckedCreateInput>;
};
export type scheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.scheduleCreateManyInput | Prisma.scheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type scheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    data: Prisma.scheduleCreateManyInput | Prisma.scheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type scheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.scheduleUpdateInput, Prisma.scheduleUncheckedUpdateInput>;
    where: Prisma.scheduleWhereUniqueInput;
};
export type scheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.scheduleUpdateManyMutationInput, Prisma.scheduleUncheckedUpdateManyInput>;
    where?: Prisma.scheduleWhereInput;
    limit?: number;
};
export type scheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.scheduleUpdateManyMutationInput, Prisma.scheduleUncheckedUpdateManyInput>;
    where?: Prisma.scheduleWhereInput;
    limit?: number;
};
export type scheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    where: Prisma.scheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.scheduleCreateInput, Prisma.scheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.scheduleUpdateInput, Prisma.scheduleUncheckedUpdateInput>;
};
export type scheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
    where: Prisma.scheduleWhereUniqueInput;
};
export type scheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.scheduleWhereInput;
    limit?: number;
};
export type schedule$habitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type schedule$schedule_daysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type scheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.scheduleSelect<ExtArgs> | null;
    omit?: Prisma.scheduleOmit<ExtArgs> | null;
    include?: Prisma.scheduleInclude<ExtArgs> | null;
};
export {};
