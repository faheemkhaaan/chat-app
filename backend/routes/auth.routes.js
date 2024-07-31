import {Router} from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";
import { checkSchema, query } from "express-validator";
import {userSchemaValidation , userLoginValidation} from "../validation/userValidation.js";

const router = Router();

router.post('/signup',checkSchema(userSchemaValidation),signup)
router.post('/login',checkSchema(userLoginValidation),login)
router.get('/logout',logout)

export default router