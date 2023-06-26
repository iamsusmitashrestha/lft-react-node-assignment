import { Router } from "express";
import { addProduct, getProducts } from "../controllers/product.controller";
import { auth } from "../middlewares/auth.middleware";

const router = Router();
router.post("/addProduct", auth, addProduct);
router.get("/getProducts", auth, getProducts);

export default router;
