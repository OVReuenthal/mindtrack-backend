import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly habits: "habits";
    readonly level_rewards: "level_rewards";
    readonly progress: "progress";
    readonly schedule: "schedule";
    readonly schedule_days: "schedule_days";
    readonly users: "users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const HabitsScalarFieldEnum: {
    readonly habit_id: "habit_id";
    readonly habit_name: "habit_name";
    readonly user_id: "user_id";
    readonly type: "type";
    readonly schedule_id: "schedule_id";
    readonly color: "color";
};
export type HabitsScalarFieldEnum = (typeof HabitsScalarFieldEnum)[keyof typeof HabitsScalarFieldEnum];
export declare const Level_rewardsScalarFieldEnum: {
    readonly level: "level";
    readonly level_reward: "level_reward";
};
export type Level_rewardsScalarFieldEnum = (typeof Level_rewardsScalarFieldEnum)[keyof typeof Level_rewardsScalarFieldEnum];
export declare const ProgressScalarFieldEnum: {
    readonly habit_id: "habit_id";
    readonly date: "date";
    readonly streak: "streak";
};
export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum];
export declare const ScheduleScalarFieldEnum: {
    readonly schedule_id: "schedule_id";
    readonly schedule_name: "schedule_name";
};
export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum];
export declare const Schedule_daysScalarFieldEnum: {
    readonly schedule_day_id: "schedule_day_id";
    readonly schedule_id: "schedule_id";
    readonly day_of_week: "day_of_week";
};
export type Schedule_daysScalarFieldEnum = (typeof Schedule_daysScalarFieldEnum)[keyof typeof Schedule_daysScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly user_name: "user_name";
    readonly password: "password";
    readonly level: "level";
    readonly bedtime: "bedtime";
    readonly wakeup_time: "wakeup_time";
    readonly productive_time: "productive_time";
    readonly exp_points: "exp_points";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
