import express from "express";
import { getAppModules } from "../controllers/app-module.controller";


export const appModuleroutes = express.Router();

appModuleroutes.get('/module', getAppModules)