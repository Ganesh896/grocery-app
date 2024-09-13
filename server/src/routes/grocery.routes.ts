import express from "express";
import { addItem } from "../controller/groceryItem.controller";
import { authorize } from "../middleware/auth.middleware";

const router = express();

router.post("/add", addItem, authorize);
router.get("/");

export default router;
