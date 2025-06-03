import express from 'express';
import cors from 'cors';
import {env} from './config/envConfig';
import ConfigSequelize from './config/sequelize';
import BenefRouter from './router/beneficiario-router';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(env.PORT, () => {
    ConfigSequelize();
    console.log(`🚀 Server is running at http://localhost:${env.PORT}`);
});

app.use('/benefs', BenefRouter);
