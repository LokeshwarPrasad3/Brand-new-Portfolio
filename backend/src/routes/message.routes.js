import { Router } from "express"
import { getMessageFromUser } from "../controllers/messages.controllers.js";
const router = Router();


// router for message receiving
router.route("/get-message").post(getMessageFromUser);


export default router