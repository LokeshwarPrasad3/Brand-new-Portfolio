import { Router } from "express";
const router = Router();
import { saveNewVisitor, getAllVisitor } from "../controllers/visitor.controllers.js"

router.route("/save-visitor").post(saveNewVisitor);
router.route("/get-visitors").get(getAllVisitor);


export default router;