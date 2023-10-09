import Router from "express";
const router = Router();
import { indexBooks, storeBooks } from "../controllers/books.controllers.js";
import { validateSchema } from "../middleware/validation.js";
import { upload } from "../controllers/upload.controllers.js";

// Define route for "/books"
router.get("/api/books", indexBooks);
router.post("/api/books", validateSchema, upload.single("MyFile"), storeBooks);

export default router;