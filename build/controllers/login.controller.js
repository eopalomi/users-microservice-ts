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
exports.authenticateUser = void 0;
const login_service_1 = require("../services/login.service");
const authenticateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = req.body;
    const autUser = yield (0, login_service_1.validateUser)(user, password);
    if (!autUser.isValid) {
        res.status(200).json({
            valid: false,
            user: user,
            msg: "usuario o contraseña inválida"
        });
    }
    else {
        res.status(200).json({
            valid: true,
            user: user,
            userName: autUser.names,
            msg: "usuario autenticado correctamente",
            token: ''
        });
    }
});
exports.authenticateUser = authenticateUser;
