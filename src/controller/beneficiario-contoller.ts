import { error } from 'console';
import { Beneficiario } from './../models/Beneficiario.model';
import { Request, Response } from 'express';

export async function getBenefs(req:Request,res:Response){
    try{
        const beneficiaros = await Beneficiario.findAll();
        res.status(200).json(beneficiaros);
    }catch{
        res.status(400).json("Nenhum beneficiario encontrado!");
    }
}

export async function createBenefs(req:Request,res:Response){
    try{
        const newBenef = await Beneficiario.create(req.body);
        res.status(200).json(newBenef);
    }catch(err){
        console.log(err);
        res.status(400).json("Erro ao cadastrar beneficiario!");
    }
}