import { Request, Response } from "express"
import insertAdressDb from "../data/insertAdressDb"
import { getFullAdress } from "../services/getFullAdress"


export const insertAdress = async (req: Request, res: Response) => {
   try{
    const cep = req.params.cep

   const address = await getFullAdress(cep)
   if(!address || undefined){
    throw new Error("Cep inválido")
   }
   // quero inserir ele no banco
   await insertAdressDb(address)
   res.status(200).send("Endereço criado com sucesso")

}   catch(error:any) {
        res.status(500).send(error.message)
}

}