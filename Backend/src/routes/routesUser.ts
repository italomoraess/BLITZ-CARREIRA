import { Router } from "express";
import controllerUser from "../controllers/controllerUser";

const router = Router();

router.get('/', controllerUser.getAll);


export default router;