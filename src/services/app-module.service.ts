import { execQuery } from '../db/pg.connect'

export const findAppModule = async (usuCod: string, codSubSystem: string): Promise<string> => {
    console.log(`select * from routes.routes_list('${JSON.stringify({usu_cod: usuCod, codSubSystem: codSubSystem})}')`);
    const { rows } = await execQuery(`select * from routes.routes_list('${JSON.stringify({usu_cod: usuCod, codSubSystem: codSubSystem})}')`,null)

    return rows[0].routes_list;
};