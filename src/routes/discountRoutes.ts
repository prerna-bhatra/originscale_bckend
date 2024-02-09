import express from "express";
import { fetchDiscount } from "../controllers/discount.controller";

const router = express.Router();

router.get('/', fetchDiscount)

export default router;
