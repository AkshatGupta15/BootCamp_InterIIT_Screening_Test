/*
  Warnings:

  - You are about to drop the `nifty50` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "nifty50";

-- CreateTable
CREATE TABLE "Nifty50" (
    "id" SERIAL NOT NULL,
    "symbol" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "change" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nifty50_pkey" PRIMARY KEY ("id")
);
