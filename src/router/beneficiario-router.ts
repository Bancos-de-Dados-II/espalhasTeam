import express, { Router } from 'express';
import BeneficiarioController from '../controller/beneficiario-contoller';

const BenefRouter = express.Router();

BenefRouter.get('/', BeneficiarioController.getBenefs);
BenefRouter.get('/:id', BeneficiarioController.getBenefById);
BenefRouter.patch('/:id', BeneficiarioController.editBenef);
BenefRouter.post('/', BeneficiarioController.createBenefs);
BenefRouter.delete('/:id', BeneficiarioController.deleteBenef);


export default BenefRouter;