import { Router } from "express"
import { saveMessageFromUser, getAllMessages } from "../controllers/messages.controllers.js";
const router = Router();


// router for message receiving
router.route("/save-message").post(saveMessageFromUser);
router.route("/get-messages").get(getAllMessages);


export default router