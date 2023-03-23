import express from "express";
import { authenticateUser } from "../controllers/login.controller";

export const loginRoutes = express.Router();

loginRoutes.post('/login', authenticateUser);