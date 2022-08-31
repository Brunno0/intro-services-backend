import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAdressDb(adress: Address) {

    const {logradouro,bairro,cidade,estado} = adress
    const id_user:string = Date.now().toString()

    await connection("aula_servicos_adress").insert({
        id_user,
        logradouro,
        bairro,
        cidade,
        estado
    })  

}