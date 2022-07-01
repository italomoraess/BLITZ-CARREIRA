import express from 'express';

import routerUser from './routes/routesUser';

const app = express();
const PORT = 3005;

app.use('/user', routerUser);

app.use(express.json());

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));