import connection from '../connection/connection';

const getAll = async () => {
	const [tasks] = await connection.execute(
		`SELECT 
		 	U.id as IdUser,
			U.name as NameUser,
			T.id as IdTask,
			T.title as Title,
			T.description as Description,
			T.status as Status,
			T.create_data as CreateData
    FROM TODO_LIST.Task as T
    JOIN User as U
    ON T.id = U.id `);
	return tasks;
}

const deleteById = async (id: string) => {
	await connection.execute('DELETE FROM TODO_LIST.Task WHERE id = ?', [id]);
}

export default { getAll, deleteById };