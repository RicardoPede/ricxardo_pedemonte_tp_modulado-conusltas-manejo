import Router from "express";
import { indexBooks, storeBooks } from "../controllers/books.controllers.js";

const router = Router();


router.get("/books", indexBooks);
router.post("/books", storeBooks);

export default router;