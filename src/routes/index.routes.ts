import express from "express";
import {loginRoutes} from '../routes/login.routes'
import {appModuleroutes} from '../routes/app-module.routes'

export const routes = express.Router();

// LOGIN
routes.use('/user',loginRoutes);

// APPP MODULES
routes.use('/user',appModuleroutes);