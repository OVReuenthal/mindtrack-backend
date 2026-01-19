import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type progressModel = runtime.Types.Result.DefaultSelection<Prisma.$progressPayload>;
export type AggregateProgress = {
    _count: ProgressCountAggregateOutputType | null;
    _avg: ProgressAvgAggregateOutputType | null;
    _sum: ProgressSumAggregateOutputType | null;
    _min: ProgressMinAggregateOutputType | null;
    _max: ProgressMaxAggregateOutputType | null;
};
export type ProgressAvgAggregateOutputType = {
    habit_id: number | null;
    streak: number | null;
};
export type ProgressSumAggregateOutputType = {
    habit_id: number | null;
    streak: number | null;
};
export type ProgressMinAggregateOutputType = {
    habit_id: number | null;
    date: Date | null;
    streak: number | null;
};
export type ProgressMaxAggregateOutputType = {
    habit_id: number | null;
    date: Date | null;
    streak: number | null;
};
export type ProgressCountAggregateOutputType = {
    habit_id: number;
    date: number;
    streak: number;
    _all: number;
};
export type ProgressAvgAggregateInputType = {
    habit_id?: true;
    streak?: true;
};
export type ProgressSumAggregateInputType = {
    habit_id?: true;
    streak?: true;
};
export type ProgressMinAggregateInputType = {
    habit_id?: true;
    date?: true;
    streak?: true;
};
export type ProgressMaxAggregateInputType = {
    habit_id?: true;
    date?: true;
    streak?: true;
};
export type ProgressCountAggregateInputType = {
    habit_id?: true;
    date?: true;
    streak?: true;
    _all?: true;
};
export type ProgressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progressWhereInput;
    orderBy?: Prisma.progressOrderByWithRelationInput | Prisma.progressOrderByWithRelationInput[];
    cursor?: Prisma.progressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProgressCountAggregateInputType;
    _avg?: ProgressAvgAggregateInputType;
    _sum?: ProgressSumAggregateInputType;
    _min?: ProgressMinAggregateInputType;
    _max?: ProgressMaxAggregateInputType;
};
export type GetProgressAggregateType<T extends ProgressAggregateArgs> = {
    [P in keyof T & keyof AggregateProgress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgress[P]> : Prisma.GetScalarType<T[P], AggregateProgress[P]>;
};
export type progressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progressWhereInput;
    orderBy?: Prisma.progressOrderByWithAggregationInput | Prisma.progressOrderByWithAggregationInput[];
    by: Prisma.ProgressScalarFieldEnum[] | Prisma.ProgressScalarFieldEnum;
    having?: Prisma.progressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgressCountAggregateInputType | true;
    _avg?: ProgressAvgAggregateInputType;
    _sum?: ProgressSumAggregateInputType;
    _min?: ProgressMinAggregateInputType;
    _max?: ProgressMaxAggregateInputType;
};
export type ProgressGroupByOutputType = {
    habit_id: number;
    date: Date;
    streak: number | null;
    _count: ProgressCountAggregateOutputType | null;
    _avg: ProgressAvgAggregateOutputType | null;
    _sum: ProgressSumAggregateOutputType | null;
    _min: ProgressMinAggregateOutputType | null;
    _max: ProgressMaxAggregateOutputType | null;
};
type GetProgressGroupByPayload<T extends progressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgressGroupByOutputType[P]>;
}>>;
export type progressWhereInput = {
    AND?: Prisma.progressWhereInput | Prisma.progressWhereInput[];
    OR?: Prisma.progressWhereInput[];
    NOT?: Prisma.progressWhereInput | Prisma.progressWhereInput[];
    habit_id?: Prisma.IntFilter<"progress"> | number;
    date?: Prisma.DateTimeFilter<"progress"> | Date | string;
    streak?: Prisma.IntNullableFilter<"progress"> | number | null;
    habits?: Prisma.XOR<Prisma.HabitsScalarRelationFilter, Prisma.habitsWhereInput>;
};
export type progressOrderByWithRelationInput = {
    habit_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    streak?: Prisma.SortOrderInput | Prisma.SortOrder;
    habits?: Prisma.habitsOrderByWithRelationInput;
};
export type progressWhereUniqueInput = Prisma.AtLeast<{
    habit_id_date?: Prisma.progressHabit_idDateCompoundUniqueInput;
    AND?: Prisma.progressWhereInput | Prisma.progressWhereInput[];
    OR?: Prisma.progressWhereInput[];
    NOT?: Prisma.progressWhereInput | Prisma.progressWhereInput[];
    habit_id?: Prisma.IntFilter<"progress"> | number;
    date?: Prisma.DateTimeFilter<"progress"> | Date | string;
    streak?: Prisma.IntNullableFilter<"progress"> | number | null;
    habits?: Prisma.XOR<Prisma.HabitsScalarRelationFilter, Prisma.habitsWhereInput>;
}, "habit_id_date">;
export type progressOrderByWithAggregationInput = {
    habit_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    streak?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.progressCountOrderByAggregateInput;
    _avg?: Prisma.progressAvgOrderByAggregateInput;
    _max?: Prisma.progressMaxOrderByAggregateInput;
    _min?: Prisma.progressMinOrderByAggregateInput;
    _sum?: Prisma.progressSumOrderByAggregateInput;
};
export type progressScalarWhereWithAggregatesInput = {
    AND?: Prisma.progressScalarWhereWithAggregatesInput | Prisma.progressScalarWhereWithAggregatesInput[];
    OR?: Prisma.progressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.progressScalarWhereWithAggregatesInput | Prisma.progressScalarWhereWithAggregatesInput[];
    habit_id?: Prisma.IntWithAggregatesFilter<"progress"> | number;
    date?: Prisma.DateTimeWithAggregatesFilter<"progress"> | Date | string;
    streak?: Prisma.IntNullableWithAggregatesFilter<"progress"> | number | null;
};
export type progressCreateInput = {
    date: Date | string;
    streak?: number | null;
    habits: Prisma.habitsCreateNestedOneWithoutProgressInput;
};
export type progressUncheckedCreateInput = {
    habit_id: number;
    date: Date | string;
    streak?: number | null;
};
export type progressUpdateInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    streak?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    habits?: Prisma.habitsUpdateOneRequiredWithoutProgressNestedInput;
};
export type progressUncheckedUpdateInput = {
    habit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    streak?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type progressCreateManyInput = {
    habit_id: number;
    date: Date | string;
    streak?: number | null;
};
export type progressUpdateManyMutationInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    streak?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type progressUncheckedUpdateManyInput = {
    habit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    streak?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ProgressListRelationFilter = {
    every?: Prisma.progressWhereInput;
    some?: Prisma.progressWhereInput;
    none?: Prisma.progressWhereInput;
};
export type progressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type progressHabit_idDateCompoundUniqueInput = {
    habit_id: number;
    date: Date | string;
};
export type progressCountOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    streak?: Prisma.SortOrder;
};
export type progressAvgOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    streak?: Prisma.SortOrder;
};
export type progressMaxOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    streak?: Prisma.SortOrder;
};
export type progressMinOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    streak?: Prisma.SortOrder;
};
export type progressSumOrderByAggregateInput = {
    habit_id?: Prisma.SortOrder;
    streak?: Prisma.SortOrder;
};
export type progressCreateNestedManyWithoutHabitsInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutHabitsInput, Prisma.progressUncheckedCreateWithoutHabitsInput> | Prisma.progressCreateWithoutHabitsInput[] | Prisma.progressUncheckedCreateWithoutHabitsInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutHabitsInput | Prisma.progressCreateOrConnectWithoutHabitsInput[];
    createMany?: Prisma.progressCreateManyHabitsInputEnvelope;
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
};
export type progressUncheckedCreateNestedManyWithoutHabitsInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutHabitsInput, Prisma.progressUncheckedCreateWithoutHabitsInput> | Prisma.progressCreateWithoutHabitsInput[] | Prisma.progressUncheckedCreateWithoutHabitsInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutHabitsInput | Prisma.progressCreateOrConnectWithoutHabitsInput[];
    createMany?: Prisma.progressCreateManyHabitsInputEnvelope;
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
};
export type progressUpdateManyWithoutHabitsNestedInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutHabitsInput, Prisma.progressUncheckedCreateWithoutHabitsInput> | Prisma.progressCreateWithoutHabitsInput[] | Prisma.progressUncheckedCreateWithoutHabitsInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutHabitsInput | Prisma.progressCreateOrConnectWithoutHabitsInput[];
    upsert?: Prisma.progressUpsertWithWhereUniqueWithoutHabitsInput | Prisma.progressUpsertWithWhereUniqueWithoutHabitsInput[];
    createMany?: Prisma.progressCreateManyHabitsInputEnvelope;
    set?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    disconnect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    delete?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    update?: Prisma.progressUpdateWithWhereUniqueWithoutHabitsInput | Prisma.progressUpdateWithWhereUniqueWithoutHabitsInput[];
    updateMany?: Prisma.progressUpdateManyWithWhereWithoutHabitsInput | Prisma.progressUpdateManyWithWhereWithoutHabitsInput[];
    deleteMany?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
};
export type progressUncheckedUpdateManyWithoutHabitsNestedInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutHabitsInput, Prisma.progressUncheckedCreateWithoutHabitsInput> | Prisma.progressCreateWithoutHabitsInput[] | Prisma.progressUncheckedCreateWithoutHabitsInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutHabitsInput | Prisma.progressCreateOrConnectWithoutHabitsInput[];
    upsert?: Prisma.progressUpsertWithWhereUniqueWithoutHabitsInput | Prisma.progressUpsertWithWhereUniqueWithoutHabitsInput[];
    createMany?: Prisma.progressCreateManyHabitsInputEnvelope;
    set?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    disconnect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    delete?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    update?: Prisma.progressUpdateWithWhereUniqueWithoutHabitsInput | Prisma.progressUpdateWithWhereUniqueWithoutHabitsInput[];
    updateMany?: Prisma.progressUpdateManyWithWhereWithoutHabitsInput | Prisma.progressUpdateManyWithWhereWithoutHabitsInput[];
    deleteMany?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type progressCreateWithoutHabitsInput = {
    date: Date | string;
    streak?: number | null;
};
export type progressUncheckedCreateWithoutHabitsInput = {
    date: Date | string;
    streak?: number | null;
};
export type progressCreateOrConnectWithoutHabitsInput = {
    where: Prisma.progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.progressCreateWithoutHabitsInput, Prisma.progressUncheckedCreateWithoutHabitsInput>;
};
export type progressCreateManyHabitsInputEnvelope = {
    data: Prisma.progressCreateManyHabitsInput | Prisma.progressCreateManyHabitsInput[];
    skipDuplicates?: boolean;
};
export type progressUpsertWithWhereUniqueWithoutHabitsInput = {
    where: Prisma.progressWhereUniqueInput;
    update: Prisma.XOR<Prisma.progressUpdateWithoutHabitsInput, Prisma.progressUncheckedUpdateWithoutHabitsInput>;
    create: Prisma.XOR<Prisma.progressCreateWithoutHabitsInput, Prisma.progressUncheckedCreateWithoutHabitsInput>;
};
export type progressUpdateWithWhereUniqueWithoutHabitsInput = {
    where: Prisma.progressWhereUniqueInput;
    data: Prisma.XOR<Prisma.progressUpdateWithoutHabitsInput, Prisma.progressUncheckedUpdateWithoutHabitsInput>;
};
export type progressUpdateManyWithWhereWithoutHabitsInput = {
    where: Prisma.progressScalarWhereInput;
    data: Prisma.XOR<Prisma.progressUpdateManyMutationInput, Prisma.progressUncheckedUpdateManyWithoutHabitsInput>;
};
export type progressScalarWhereInput = {
    AND?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
    OR?: Prisma.progressScalarWhereInput[];
    NOT?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
    habit_id?: Prisma.IntFilter<"progress"> | number;
    date?: Prisma.DateTimeFilter<"progress"> | Date | string;
    streak?: Prisma.IntNullableFilter<"progress"> | number | null;
};
export type progressCreateManyHabitsInput = {
    date: Date | string;
    streak?: number | null;
};
export type progressUpdateWithoutHabitsInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    streak?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type progressUncheckedUpdateWithoutHabitsInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    streak?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type progressUncheckedUpdateManyWithoutHabitsInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    streak?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type progressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    habit_id?: boolean;
    date?: boolean;
    streak?: boolean;
    habits?: boolean | Prisma.habitsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progress"]>;
export type progressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    habit_id?: boolean;
    date?: boolean;
    streak?: boolean;
    habits?: boolean | Prisma.habitsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progress"]>;
export type progressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    habit_id?: boolean;
    date?: boolean;
    streak?: boolean;
    habits?: boolean | Prisma.habitsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progress"]>;
export type progressSelectScalar = {
    habit_id?: boolean;
    date?: boolean;
    streak?: boolean;
};
export type progressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"habit_id" | "date" | "streak", ExtArgs["result"]["progress"]>;
export type progressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habits?: boolean | Prisma.habitsDefaultArgs<ExtArgs>;
};
export type progressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habits?: boolean | Prisma.habitsDefaultArgs<ExtArgs>;
};
export type progressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habits?: boolean | Prisma.habitsDefaultArgs<ExtArgs>;
};
export type $progressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "progress";
    objects: {
        habits: Prisma.$habitsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        habit_id: number;
        date: Date;
        streak: number | null;
    }, ExtArgs["result"]["progress"]>;
    composites: {};
};
export type progressGetPayload<S extends boolean | null | undefined | progressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$progressPayload, S>;
export type progressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgressCountAggregateInputType | true;
};
export interface progressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['progress'];
        meta: {
            name: 'progress';
        };
    };
    findUnique<T extends progressFindUniqueArgs>(args: Prisma.SelectSubset<T, progressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends progressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends progressFindFirstArgs>(args?: Prisma.SelectSubset<T, progressFindFirstArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends progressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, progressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends progressFindManyArgs>(args?: Prisma.SelectSubset<T, progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends progressCreateArgs>(args: Prisma.SelectSubset<T, progressCreateArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends progressCreateManyArgs>(args?: Prisma.SelectSubset<T, progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends progressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends progressDeleteArgs>(args: Prisma.SelectSubset<T, progressDeleteArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends progressUpdateArgs>(args: Prisma.SelectSubset<T, progressUpdateArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends progressDeleteManyArgs>(args?: Prisma.SelectSubset<T, progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends progressUpdateManyArgs>(args: Prisma.SelectSubset<T, progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends progressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends progressUpsertArgs>(args: Prisma.SelectSubset<T, progressUpsertArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends progressCountArgs>(args?: Prisma.Subset<T, progressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgressCountAggregateOutputType> : number>;
    aggregate<T extends ProgressAggregateArgs>(args: Prisma.Subset<T, ProgressAggregateArgs>): Prisma.PrismaPromise<GetProgressAggregateType<T>>;
    groupBy<T extends progressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: progressGroupByArgs['orderBy'];
    } : {
        orderBy?: progressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: progressFieldRefs;
}
export interface Prisma__progressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    habits<T extends Prisma.habitsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.habitsDefaultArgs<ExtArgs>>): Prisma.Prisma__habitsClient<runtime.Types.Result.GetResult<Prisma.$habitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface progressFieldRefs {
    readonly habit_id: Prisma.FieldRef<"progress", 'Int'>;
    readonly date: Prisma.FieldRef<"progress", 'DateTime'>;
    readonly streak: Prisma.FieldRef<"progress", 'Int'>;
}
export type progressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where: Prisma.progressWhereUniqueInput;
};
export type progressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where: Prisma.progressWhereUniqueInput;
};
export type progressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type progressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type progressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type progressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.progressCreateInput, Prisma.progressUncheckedCreateInput>;
};
export type progressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.progressCreateManyInput | Prisma.progressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type progressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    data: Prisma.progressCreateManyInput | Prisma.progressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.progressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type progressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.progressUpdateInput, Prisma.progressUncheckedUpdateInput>;
    where: Prisma.progressWhereUniqueInput;
};
export type progressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.progressUpdateManyMutationInput, Prisma.progressUncheckedUpdateManyInput>;
    where?: Prisma.progressWhereInput;
    limit?: number;
};
export type progressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.progressUpdateManyMutationInput, Prisma.progressUncheckedUpdateManyInput>;
    where?: Prisma.progressWhereInput;
    limit?: number;
    include?: Prisma.progressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type progressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where: Prisma.progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.progressCreateInput, Prisma.progressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.progressUpdateInput, Prisma.progressUncheckedUpdateInput>;
};
export type progressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where: Prisma.progressWhereUniqueInput;
};
export type progressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progressWhereInput;
    limit?: number;
};
export type progressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
};
export {};
