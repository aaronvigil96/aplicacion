import { usersServices } from "../services/usersServices.js";

export const userControllers = {
    getAll: async (req, res) => {
        try{
            const result = await usersServices.getAll();
            res.status(200).json({data:result});
        }catch(err){
            console.log(err);
        }
    },
    getOne: async (req, res) => {
        let {name} = req.params;
        name = name.toLowerCase();
        try{
            const result = await usersServices.getOne(name);
            if(result.length != 0){
                res.status(200).json({data: result});
            }else {
                res.status(400).json({"error": "No existe ese usuario"});
            }
        }catch(err){
            console.log(err);
        }
    },
    create: async (req, res) => {
        let {name} = req.body;
        try {
            let result = await usersServices.getOne(name);
            if(result != 0){
                res.status(400).json({"error": "Ese usuario ya existe"});
            }else {
                result = await usersServices.create(name);
                res.status(200).json({data: result});
            }
        }catch(err){
            console.log(err);
        }

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}