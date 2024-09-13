import express from "express";

import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import groceryRouter from "./grocery.routes";

const router = express();

router.use("/api/auth", authRouter);
router.use("/api/user", userRouter);
router.use("/api/grocery", groceryRouter);

export default router;
