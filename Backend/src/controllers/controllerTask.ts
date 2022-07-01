import serviceTask from '../services/serviceTask';
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response): Promise<Response> => {
    const tasks = await serviceTask.getAll();
    return res.status(200).json(tasks);
}
const deleteById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await serviceTask.deleteById(id);
    return res.status(200).json({ message: 'Successfully Deleted'});
}

export default { getAll, deleteById };