import serviceUser from "../services/serviceUser";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) => {
    const users = await serviceUser.getAll();
    return res.status(200).json(users);
}

export default { getAll };