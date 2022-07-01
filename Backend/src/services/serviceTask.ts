import modelTask from '../models/modelTask';

const getAll = async () => {
    return await modelTask.getAll();
}

const deleteById = async (id: string) => {
	await modelTask.deleteById(id);
}

export default { getAll, deleteById };