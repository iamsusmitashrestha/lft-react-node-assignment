import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../utils/prisma.util";

export const addProduct = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productName, available_qty, price } = req.body;
    let qty = Number(available_qty);
    let amount = Number(price);
    const owner = await prismaClient.user.findUnique({
      where: { id: req.user.id },
    });

    let userId = owner?.id;

    if (!userId) throw new Error("User not found");

    const newProduct = await prismaClient.product.create({
      data: {
        productName,
        available_qty: qty,
        price: amount,
        userId,
      },
    });

    return res.status(200).json({
      success: true,
      data: newProduct,
    });
  } catch (e) {
    next(e);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prismaClient.product.findMany();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
