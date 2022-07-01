import connection from '../connection/connection';

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM TODO_LIST.User');
    return users;
};

export default { getAll };