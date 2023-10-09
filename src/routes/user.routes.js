import Router from "express";
const router = Router();
import { indexUsers, storeUsers } from "../controllers/users.controllers.js";
import { validateSchema } from "../middleware/validation.js";

// Define route for "/users"
router.get("/api/users", indexUsers);
router.post("/api/users", validateSchema, storeUsers);

export default router;