import serviceTask from "../services/serviceTask";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) => {
    const tasks = await serviceTask.getAll();
    return res.status(200).json(tasks);
}

export default { getAll };