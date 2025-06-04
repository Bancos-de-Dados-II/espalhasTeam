import express from 'express';
const BenefRouter = express.Router();

import {getBenefs, createBenefs} from '../controller/beneficiario-contoller';

BenefRouter.get('/',getBenefs);
BenefRouter.post('/',createBenefs);

export default BenefRouter;