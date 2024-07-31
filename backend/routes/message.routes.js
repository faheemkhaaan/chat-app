import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRoutes = express.Router();

messageRoutes.post('/send/:id',protectRoute,sendMessage)
messageRoutes.get('/:id',protectRoute,getMessages)


export default messageRoutes