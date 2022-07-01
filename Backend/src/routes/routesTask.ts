import { Router } from "express";
import controllerTask from "../controllers/controllerTask";

const router = Router();

router.get('/', controllerTask.getAll);
router.post('/:id', controllerTask.deleteById);


export default router;