-- CreateTable
CREATE TABLE "habits" (
    "habit_id" SERIAL NOT NULL,
    "habit_name" VARCHAR,
    "user_id" INTEGER,
    "type" BOOLEAN,
    "schedule_id" INTEGER,
    "color" VARCHAR,

    CONSTRAINT "habits_pkey" PRIMARY KEY ("habit_id")
);

-- CreateTable
CREATE TABLE "level_rewards" (
    "level" SERIAL NOT NULL,
    "level_reward" VARCHAR,

    CONSTRAINT "level_rewards_pkey" PRIMARY KEY ("level")
);

-- CreateTable
CREATE TABLE "progress" (
    "habit_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "streak" INTEGER,

    CONSTRAINT "progress_pkey" PRIMARY KEY ("habit_id","date")
);

-- CreateTable
CREATE TABLE "schedule" (
    "schedule_id" SERIAL NOT NULL,
    "schedule_name" VARCHAR,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("schedule_id")
);

-- CreateTable
CREATE TABLE "schedule_days" (
    "schedule_day_id" SERIAL NOT NULL,
    "schedule_id" INTEGER,
    "day_of_week" INTEGER,

    CONSTRAINT "schedule_days_pkey" PRIMARY KEY ("schedule_day_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0,
    "bedtime" TIMESTAMP(3),
    "wakeup_time" TIMESTAMP(3),
    "productive_time" TIMESTAMP(3),
    "exp_points" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");

-- AddForeignKey
ALTER TABLE "habits" ADD CONSTRAINT "habits_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("schedule_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "habits" ADD CONSTRAINT "habits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "progress" ADD CONSTRAINT "progress_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "habits"("habit_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "schedule_days" ADD CONSTRAINT "schedule_days_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("schedule_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_level_fkey" FOREIGN KEY ("level") REFERENCES "level_rewards"("level") ON DELETE RESTRICT ON UPDATE CASCADE;
