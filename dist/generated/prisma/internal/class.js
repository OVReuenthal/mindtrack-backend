"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.2.0",
    "engineVersion": "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel habits {\n  habit_id    Int        @id @default(autoincrement())\n  habit_name  String?    @db.VarChar\n  user_id     Int?\n  type        Boolean?\n  schedule_id Int?\n  color       String?    @db.VarChar\n  schedule    schedule?  @relation(fields: [schedule_id], references: [schedule_id], onDelete: NoAction, onUpdate: NoAction)\n  users       users?     @relation(fields: [user_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction)\n  progress    progress[]\n}\n\nmodel level_rewards {\n  level        Int     @id @default(autoincrement())\n  level_reward String? @db.VarChar\n  users        users[]\n}\n\nmodel progress {\n  habit_id Int\n  date     DateTime @db.Date\n  streak   Int?\n  habits   habits   @relation(fields: [habit_id], references: [habit_id], onDelete: NoAction, onUpdate: NoAction)\n\n  @@id([habit_id, date])\n}\n\nmodel schedule {\n  schedule_id   Int             @id @default(autoincrement())\n  schedule_name String?         @db.VarChar\n  habits        habits[]\n  schedule_days schedule_days[]\n}\n\nmodel schedule_days {\n  schedule_day_id Int       @id @default(autoincrement())\n  schedule_id     Int?\n  day_of_week     Int?\n  schedule        schedule? @relation(fields: [schedule_id], references: [schedule_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel users {\n  user_id         Int       @id @default(autoincrement())\n  user_name       String\n  password        String\n  level           Int       @default(0)\n  bedtime         DateTime?\n  wakeup_time     DateTime?\n  productive_time DateTime?\n  exp_points      BigInt    @default(0)\n\n  // Relaciones inversas\n  habits        habits[] // un usuario puede tener muchos hábitos\n  level_rewards level_rewards? @relation(fields: [level], references: [level])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"habits\":{\"fields\":[{\"name\":\"habit_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"habit_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"schedule_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"color\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"schedule\",\"kind\":\"object\",\"type\":\"schedule\",\"relationName\":\"habitsToschedule\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"users\",\"relationName\":\"habitsTousers\"},{\"name\":\"progress\",\"kind\":\"object\",\"type\":\"progress\",\"relationName\":\"habitsToprogress\"}],\"dbName\":null},\"level_rewards\":{\"fields\":[{\"name\":\"level\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"level_reward\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"users\",\"relationName\":\"level_rewardsTousers\"}],\"dbName\":null},\"progress\":{\"fields\":[{\"name\":\"habit_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"streak\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"habits\",\"kind\":\"object\",\"type\":\"habits\",\"relationName\":\"habitsToprogress\"}],\"dbName\":null},\"schedule\":{\"fields\":[{\"name\":\"schedule_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"schedule_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"habits\",\"kind\":\"object\",\"type\":\"habits\",\"relationName\":\"habitsToschedule\"},{\"name\":\"schedule_days\",\"kind\":\"object\",\"type\":\"schedule_days\",\"relationName\":\"scheduleToschedule_days\"}],\"dbName\":null},\"schedule_days\":{\"fields\":[{\"name\":\"schedule_day_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"schedule_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"day_of_week\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"schedule\",\"kind\":\"object\",\"type\":\"schedule\",\"relationName\":\"scheduleToschedule_days\"}],\"dbName\":null},\"users\":{\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"level\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"bedtime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"wakeup_time\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"productive_time\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"exp_points\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"habits\",\"kind\":\"object\",\"type\":\"habits\",\"relationName\":\"habitsTousers\"},{\"name\":\"level_rewards\",\"kind\":\"object\",\"type\":\"level_rewards\",\"relationName\":\"level_rewardsTousers\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map