/*
  Warnings:

  - You are about to alter the column `available_qty` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `userId` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `available_qty` INTEGER NOT NULL,
    MODIFY `price` INTEGER NOT NULL,
    MODIFY `userId` INTEGER NOT NULL;
