import { Router } from "express";
const router = Router();
import { ctrolLogin, ctrlLogout, ctrolRegister } from "../controllers/auth.controllers.js";

router.post("/api/login", ctrolLogin);
router.post("/api/logout", ctrlLogout);
router.post("/api/register", ctrolRegister);

export default router