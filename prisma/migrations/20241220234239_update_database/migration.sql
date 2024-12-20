-- AlterTable
ALTER TABLE "ActivityLog" ADD COLUMN     "plan" "PlanType" NOT NULL DEFAULT 'ON_DEMAND_REFRESH';
