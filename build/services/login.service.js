"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const pg_connect_1 = require("../db/pg.connect");
const validateUser = (user, password) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield (0, pg_connect_1.execQuery)(`select * from usuari.auth_usuari('${JSON.stringify({ user, password })}')`, null);
    console.log(`select * from usuari.auth_usuari('${JSON.stringify({ user, password })}')`);
    const queryResult = rows[0];
    if (!queryResult.valid) {
        return { isValid: false, names: queryResult.no_usulog };
    }
    return { isValid: true, names: queryResult.no_usulog };
});
exports.validateUser = validateUser;
