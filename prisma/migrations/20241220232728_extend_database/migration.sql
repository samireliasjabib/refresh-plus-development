-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('MANUAL_REFRESH', 'OTHER');

-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('SUCCESS', 'FAILURE');

-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('ON_DEMAND_REFRESH', 'UNLIMITED_REFRESH');

-- CreateEnum
CREATE TYPE "ShopifyPlanType" AS ENUM ('BASIC', 'STANDARD', 'ADVANCED', 'PLUS');

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "plan" "PlanType" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "shopifyPlan" "ShopifyPlanType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityLog" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" "ActionType" NOT NULL DEFAULT 'MANUAL_REFRESH',
    "status" "StatusType" NOT NULL DEFAULT 'SUCCESS',
    "fee" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "details" TEXT,

    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_shop_key" ON "Store"("shop");

-- CreateIndex
CREATE INDEX "idx_storeId" ON "ActivityLog"("storeId");

-- CreateIndex
CREATE INDEX "idx_timestamp" ON "ActivityLog"("timestamp");

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
