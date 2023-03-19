import { Response, Request} from "express";
import { validateUser } from "../services/login.service";

export const authenticateUser = async (req: Request, res:Response)=>{
    const {user, password} = req.body;

    try {
        const autUser = await validateUser(user, password);    

        if(!autUser.isValid){
            res.status(401).json({
                valid: false,
                user: user,
                msg: "usuario o contraseña inválida"
            })
        } else {
            res.status(200).json({
                valid: true,
                user: user,
                userName: autUser.names,
                msg: "usuario autenticado correctamente",
                token: ''
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
};