import { Router } from "express";
import { userControllers } from "../controllers/usersControllers.js";

const router = Router();

router.get("/users", userControllers.getAll);
router.get("/user/:name", userControllers.getOne);
router.post("/user", userControllers.create);
router.patch("/user/:id", userControllers.update);
router.delete("/user/:id", userControllers.delete);

export default router;