import modelTask from "../models/modelTask";

const getAll = async () => {
    return await modelTask.getAll();
}

export default { getAll };