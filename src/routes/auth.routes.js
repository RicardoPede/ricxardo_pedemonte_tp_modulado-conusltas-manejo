import { Router } from "express";
const router = Router();
import { ctrolLogin, ctrlLogout, ctrolRegister } from "../controllers/auth.controllers.js";

router.get("/api/login", ctrolLogin);
router.get("/api/logout", ctrlLogout);
router.get("/api/register", ctrolRegister);

export default router