import express from "express";
import { addItem, deleteItem, getAllItems, updateItem } from "../controller/groceryItem.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = express();

router.post("/add", authenticate, authorize, addItem);
router.get("/", authenticate, getAllItems);
router.put("/update/:id", authenticate, authorize, updateItem);
router.delete("/delete/:id", authenticate, authorize, deleteItem);

export default router;
