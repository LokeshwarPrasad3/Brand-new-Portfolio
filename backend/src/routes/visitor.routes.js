import { Router } from "express";
const router = Router();
import { getVisitorsCount, incrementVisitorCount } from "../controllers/visitor.controllers.js"

router.route("/increasement-visitor").post(incrementVisitorCount);
router.route("/get-visitors-count").get(getVisitorsCount);


export default router;