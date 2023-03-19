import {execQuery} from '../db/pg.connect';
import { generateToken } from './jwt.service';

export const validateUser = async (user: string, password: string) => {
    const { rows } = await execQuery(`select * from usuari.auth_usuari('${JSON.stringify({user, password})}')`, null);
    console.log(`select * from usuari.auth_usuari('${JSON.stringify({user, password})}')`);
    const queryResult = rows[0];

    if (!queryResult.valid){
        return {isValid: false, names: queryResult.no_usulog}
    }

    const token = generateToken(queryResult.no_usulog);

    return {isValid: true, names: queryResult.no_usulog, userType: queryResult.no_perfil, token: token}
};
