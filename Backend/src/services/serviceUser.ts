import modelUser from "../models/modelUser";

const getAll = async () => {
    return await modelUser.getAll();
};

export default { getAll };
