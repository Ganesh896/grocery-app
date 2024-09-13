import express from "express";
import { loginUser, registerUser } from "../controller/user.controller";
import { authorize } from "../middleware/auth.middleware";

const router = express();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
