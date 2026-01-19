import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type level_rewardsModel = runtime.Types.Result.DefaultSelection<Prisma.$level_rewardsPayload>;
export type AggregateLevel_rewards = {
    _count: Level_rewardsCountAggregateOutputType | null;
    _avg: Level_rewardsAvgAggregateOutputType | null;
    _sum: Level_rewardsSumAggregateOutputType | null;
    _min: Level_rewardsMinAggregateOutputType | null;
    _max: Level_rewardsMaxAggregateOutputType | null;
};
export type Level_rewardsAvgAggregateOutputType = {
    level: number | null;
};
export type Level_rewardsSumAggregateOutputType = {
    level: number | null;
};
export type Level_rewardsMinAggregateOutputType = {
    level: number | null;
    level_reward: string | null;
};
export type Level_rewardsMaxAggregateOutputType = {
    level: number | null;
    level_reward: string | null;
};
export type Level_rewardsCountAggregateOutputType = {
    level: number;
    level_reward: number;
    _all: number;
};
export type Level_rewardsAvgAggregateInputType = {
    level?: true;
};
export type Level_rewardsSumAggregateInputType = {
    level?: true;
};
export type Level_rewardsMinAggregateInputType = {
    level?: true;
    level_reward?: true;
};
export type Level_rewardsMaxAggregateInputType = {
    level?: true;
    level_reward?: true;
};
export type Level_rewardsCountAggregateInputType = {
    level?: true;
    level_reward?: true;
    _all?: true;
};
export type Level_rewardsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.level_rewardsWhereInput;
    orderBy?: Prisma.level_rewardsOrderByWithRelationInput | Prisma.level_rewardsOrderByWithRelationInput[];
    cursor?: Prisma.level_rewardsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Level_rewardsCountAggregateInputType;
    _avg?: Level_rewardsAvgAggregateInputType;
    _sum?: Level_rewardsSumAggregateInputType;
    _min?: Level_rewardsMinAggregateInputType;
    _max?: Level_rewardsMaxAggregateInputType;
};
export type GetLevel_rewardsAggregateType<T extends Level_rewardsAggregateArgs> = {
    [P in keyof T & keyof AggregateLevel_rewards]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLevel_rewards[P]> : Prisma.GetScalarType<T[P], AggregateLevel_rewards[P]>;
};
export type level_rewardsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.level_rewardsWhereInput;
    orderBy?: Prisma.level_rewardsOrderByWithAggregationInput | Prisma.level_rewardsOrderByWithAggregationInput[];
    by: Prisma.Level_rewardsScalarFieldEnum[] | Prisma.Level_rewardsScalarFieldEnum;
    having?: Prisma.level_rewardsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Level_rewardsCountAggregateInputType | true;
    _avg?: Level_rewardsAvgAggregateInputType;
    _sum?: Level_rewardsSumAggregateInputType;
    _min?: Level_rewardsMinAggregateInputType;
    _max?: Level_rewardsMaxAggregateInputType;
};
export type Level_rewardsGroupByOutputType = {
    level: number;
    level_reward: string | null;
    _count: Level_rewardsCountAggregateOutputType | null;
    _avg: Level_rewardsAvgAggregateOutputType | null;
    _sum: Level_rewardsSumAggregateOutputType | null;
    _min: Level_rewardsMinAggregateOutputType | null;
    _max: Level_rewardsMaxAggregateOutputType | null;
};
type GetLevel_rewardsGroupByPayload<T extends level_rewardsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Level_rewardsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Level_rewardsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Level_rewardsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Level_rewardsGroupByOutputType[P]>;
}>>;
export type level_rewardsWhereInput = {
    AND?: Prisma.level_rewardsWhereInput | Prisma.level_rewardsWhereInput[];
    OR?: Prisma.level_rewardsWhereInput[];
    NOT?: Prisma.level_rewardsWhereInput | Prisma.level_rewardsWhereInput[];
    level?: Prisma.IntFilter<"level_rewards"> | number;
    level_reward?: Prisma.StringNullableFilter<"level_rewards"> | string | null;
    users?: Prisma.UsersListRelationFilter;
};
export type level_rewardsOrderByWithRelationInput = {
    level?: Prisma.SortOrder;
    level_reward?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByRelationAggregateInput;
};
export type level_rewardsWhereUniqueInput = Prisma.AtLeast<{
    level?: number;
    AND?: Prisma.level_rewardsWhereInput | Prisma.level_rewardsWhereInput[];
    OR?: Prisma.level_rewardsWhereInput[];
    NOT?: Prisma.level_rewardsWhereInput | Prisma.level_rewardsWhereInput[];
    level_reward?: Prisma.StringNullableFilter<"level_rewards"> | string | null;
    users?: Prisma.UsersListRelationFilter;
}, "level">;
export type level_rewardsOrderByWithAggregationInput = {
    level?: Prisma.SortOrder;
    level_reward?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.level_rewardsCountOrderByAggregateInput;
    _avg?: Prisma.level_rewardsAvgOrderByAggregateInput;
    _max?: Prisma.level_rewardsMaxOrderByAggregateInput;
    _min?: Prisma.level_rewardsMinOrderByAggregateInput;
    _sum?: Prisma.level_rewardsSumOrderByAggregateInput;
};
export type level_rewardsScalarWhereWithAggregatesInput = {
    AND?: Prisma.level_rewardsScalarWhereWithAggregatesInput | Prisma.level_rewardsScalarWhereWithAggregatesInput[];
    OR?: Prisma.level_rewardsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.level_rewardsScalarWhereWithAggregatesInput | Prisma.level_rewardsScalarWhereWithAggregatesInput[];
    level?: Prisma.IntWithAggregatesFilter<"level_rewards"> | number;
    level_reward?: Prisma.StringNullableWithAggregatesFilter<"level_rewards"> | string | null;
};
export type level_rewardsCreateInput = {
    level_reward?: string | null;
    users?: Prisma.usersCreateNestedManyWithoutLevel_rewardsInput;
};
export type level_rewardsUncheckedCreateInput = {
    level?: number;
    level_reward?: string | null;
    users?: Prisma.usersUncheckedCreateNestedManyWithoutLevel_rewardsInput;
};
export type level_rewardsUpdateInput = {
    level_reward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.usersUpdateManyWithoutLevel_rewardsNestedInput;
};
export type level_rewardsUncheckedUpdateInput = {
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    level_reward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.usersUncheckedUpdateManyWithoutLevel_rewardsNestedInput;
};
export type level_rewardsCreateManyInput = {
    level?: number;
    level_reward?: string | null;
};
export type level_rewardsUpdateManyMutationInput = {
    level_reward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type level_rewardsUncheckedUpdateManyInput = {
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    level_reward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type level_rewardsCountOrderByAggregateInput = {
    level?: Prisma.SortOrder;
    level_reward?: Prisma.SortOrder;
};
export type level_rewardsAvgOrderByAggregateInput = {
    level?: Prisma.SortOrder;
};
export type level_rewardsMaxOrderByAggregateInput = {
    level?: Prisma.SortOrder;
    level_reward?: Prisma.SortOrder;
};
export type level_rewardsMinOrderByAggregateInput = {
    level?: Prisma.SortOrder;
    level_reward?: Prisma.SortOrder;
};
export type level_rewardsSumOrderByAggregateInput = {
    level?: Prisma.SortOrder;
};
export type Level_rewardsNullableScalarRelationFilter = {
    is?: Prisma.level_rewardsWhereInput | null;
    isNot?: Prisma.level_rewardsWhereInput | null;
};
export type level_rewardsCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.level_rewardsCreateWithoutUsersInput, Prisma.level_rewardsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.level_rewardsCreateOrConnectWithoutUsersInput;
    connect?: Prisma.level_rewardsWhereUniqueInput;
};
export type level_rewardsUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.level_rewardsCreateWithoutUsersInput, Prisma.level_rewardsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.level_rewardsCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.level_rewardsUpsertWithoutUsersInput;
    disconnect?: Prisma.level_rewardsWhereInput | boolean;
    delete?: Prisma.level_rewardsWhereInput | boolean;
    connect?: Prisma.level_rewardsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.level_rewardsUpdateToOneWithWhereWithoutUsersInput, Prisma.level_rewardsUpdateWithoutUsersInput>, Prisma.level_rewardsUncheckedUpdateWithoutUsersInput>;
};
export type level_rewardsCreateWithoutUsersInput = {
    level_reward?: string | null;
};
export type level_rewardsUncheckedCreateWithoutUsersInput = {
    level?: number;
    level_reward?: string | null;
};
export type level_rewardsCreateOrConnectWithoutUsersInput = {
    where: Prisma.level_rewardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.level_rewardsCreateWithoutUsersInput, Prisma.level_rewardsUncheckedCreateWithoutUsersInput>;
};
export type level_rewardsUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.level_rewardsUpdateWithoutUsersInput, Prisma.level_rewardsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.level_rewardsCreateWithoutUsersInput, Prisma.level_rewardsUncheckedCreateWithoutUsersInput>;
    where?: Prisma.level_rewardsWhereInput;
};
export type level_rewardsUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.level_rewardsWhereInput;
    data: Prisma.XOR<Prisma.level_rewardsUpdateWithoutUsersInput, Prisma.level_rewardsUncheckedUpdateWithoutUsersInput>;
};
export type level_rewardsUpdateWithoutUsersInput = {
    level_reward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type level_rewardsUncheckedUpdateWithoutUsersInput = {
    level?: Prisma.IntFieldUpdateOperationsInput | number;
    level_reward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Level_rewardsCountOutputType = {
    users: number;
};
export type Level_rewardsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Level_rewardsCountOutputTypeCountUsersArgs;
};
export type Level_rewardsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Level_rewardsCountOutputTypeSelect<ExtArgs> | null;
};
export type Level_rewardsCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
};
export type level_rewardsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    level?: boolean;
    level_reward?: boolean;
    users?: boolean | Prisma.level_rewards$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.Level_rewardsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["level_rewards"]>;
export type level_rewardsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    level?: boolean;
    level_reward?: boolean;
}, ExtArgs["result"]["level_rewards"]>;
export type level_rewardsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    level?: boolean;
    level_reward?: boolean;
}, ExtArgs["result"]["level_rewards"]>;
export type level_rewardsSelectScalar = {
    level?: boolean;
    level_reward?: boolean;
};
export type level_rewardsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"level" | "level_reward", ExtArgs["result"]["level_rewards"]>;
export type level_rewardsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.level_rewards$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.Level_rewardsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type level_rewardsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type level_rewardsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $level_rewardsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "level_rewards";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        level: number;
        level_reward: string | null;
    }, ExtArgs["result"]["level_rewards"]>;
    composites: {};
};
export type level_rewardsGetPayload<S extends boolean | null | undefined | level_rewardsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload, S>;
export type level_rewardsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<level_rewardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Level_rewardsCountAggregateInputType | true;
};
export interface level_rewardsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['level_rewards'];
        meta: {
            name: 'level_rewards';
        };
    };
    findUnique<T extends level_rewardsFindUniqueArgs>(args: Prisma.SelectSubset<T, level_rewardsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__level_rewardsClient<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends level_rewardsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, level_rewardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__level_rewardsClient<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends level_rewardsFindFirstArgs>(args?: Prisma.SelectSubset<T, level_rewardsFindFirstArgs<ExtArgs>>): Prisma.Prisma__level_rewardsClient<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends level_rewardsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, level_rewardsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__level_rewardsClient<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends level_rewardsFindManyArgs>(args?: Prisma.SelectSubset<T, level_rewardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends level_rewardsCreateArgs>(args: Prisma.SelectSubset<T, level_rewardsCreateArgs<ExtArgs>>): Prisma.Prisma__level_rewardsClient<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends level_rewardsCreateManyArgs>(args?: Prisma.SelectSubset<T, level_rewardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends level_rewardsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, level_rewardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends level_rewardsDeleteArgs>(args: Prisma.SelectSubset<T, level_rewardsDeleteArgs<ExtArgs>>): Prisma.Prisma__level_rewardsClient<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends level_rewardsUpdateArgs>(args: Prisma.SelectSubset<T, level_rewardsUpdateArgs<ExtArgs>>): Prisma.Prisma__level_rewardsClient<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends level_rewardsDeleteManyArgs>(args?: Prisma.SelectSubset<T, level_rewardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends level_rewardsUpdateManyArgs>(args: Prisma.SelectSubset<T, level_rewardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends level_rewardsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, level_rewardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends level_rewardsUpsertArgs>(args: Prisma.SelectSubset<T, level_rewardsUpsertArgs<ExtArgs>>): Prisma.Prisma__level_rewardsClient<runtime.Types.Result.GetResult<Prisma.$level_rewardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends level_rewardsCountArgs>(args?: Prisma.Subset<T, level_rewardsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Level_rewardsCountAggregateOutputType> : number>;
    aggregate<T extends Level_rewardsAggregateArgs>(args: Prisma.Subset<T, Level_rewardsAggregateArgs>): Prisma.PrismaPromise<GetLevel_rewardsAggregateType<T>>;
    groupBy<T extends level_rewardsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: level_rewardsGroupByArgs['orderBy'];
    } : {
        orderBy?: level_rewardsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, level_rewardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevel_rewardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: level_rewardsFieldRefs;
}
export interface Prisma__level_rewardsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.level_rewards$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.level_rewards$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface level_rewardsFieldRefs {
    readonly level: Prisma.FieldRef<"level_rewards", 'Int'>;
    readonly level_reward: Prisma.FieldRef<"level_rewards", 'String'>;
}
export type level_rewardsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    where: Prisma.level_rewardsWhereUniqueInput;
};
export type level_rewardsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    where: Prisma.level_rewardsWhereUniqueInput;
};
export type level_rewardsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    where?: Prisma.level_rewardsWhereInput;
    orderBy?: Prisma.level_rewardsOrderByWithRelationInput | Prisma.level_rewardsOrderByWithRelationInput[];
    cursor?: Prisma.level_rewardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Level_rewardsScalarFieldEnum | Prisma.Level_rewardsScalarFieldEnum[];
};
export type level_rewardsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    where?: Prisma.level_rewardsWhereInput;
    orderBy?: Prisma.level_rewardsOrderByWithRelationInput | Prisma.level_rewardsOrderByWithRelationInput[];
    cursor?: Prisma.level_rewardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Level_rewardsScalarFieldEnum | Prisma.Level_rewardsScalarFieldEnum[];
};
export type level_rewardsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    where?: Prisma.level_rewardsWhereInput;
    orderBy?: Prisma.level_rewardsOrderByWithRelationInput | Prisma.level_rewardsOrderByWithRelationInput[];
    cursor?: Prisma.level_rewardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Level_rewardsScalarFieldEnum | Prisma.Level_rewardsScalarFieldEnum[];
};
export type level_rewardsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.level_rewardsCreateInput, Prisma.level_rewardsUncheckedCreateInput>;
};
export type level_rewardsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.level_rewardsCreateManyInput | Prisma.level_rewardsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type level_rewardsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    data: Prisma.level_rewardsCreateManyInput | Prisma.level_rewardsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type level_rewardsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.level_rewardsUpdateInput, Prisma.level_rewardsUncheckedUpdateInput>;
    where: Prisma.level_rewardsWhereUniqueInput;
};
export type level_rewardsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.level_rewardsUpdateManyMutationInput, Prisma.level_rewardsUncheckedUpdateManyInput>;
    where?: Prisma.level_rewardsWhereInput;
    limit?: number;
};
export type level_rewardsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.level_rewardsUpdateManyMutationInput, Prisma.level_rewardsUncheckedUpdateManyInput>;
    where?: Prisma.level_rewardsWhereInput;
    limit?: number;
};
export type level_rewardsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    where: Prisma.level_rewardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.level_rewardsCreateInput, Prisma.level_rewardsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.level_rewardsUpdateInput, Prisma.level_rewardsUncheckedUpdateInput>;
};
export type level_rewardsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
    where: Prisma.level_rewardsWhereUniqueInput;
};
export type level_rewardsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.level_rewardsWhereInput;
    limit?: number;
};
export type level_rewards$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type level_rewardsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.level_rewardsSelect<ExtArgs> | null;
    omit?: Prisma.level_rewardsOmit<ExtArgs> | null;
    include?: Prisma.level_rewardsInclude<ExtArgs> | null;
};
export {};
