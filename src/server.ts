import express from 'express';
import cors from 'cors';
import {env} from './config/envConfig';

const app = express();
app.use(cors());

app.listen(env.PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${env.PORT}`);
});

app.get('/', (req, res) => {
    res.send('Bem vindo Guga Moral e João Paulo gayzinho master');
});
