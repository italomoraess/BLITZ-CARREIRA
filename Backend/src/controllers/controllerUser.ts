import modelUser from "../models/modelUser";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) => {
    const users = await modelUser.getAll();
    return res.status(200).json(users);
}

export default { getAll };