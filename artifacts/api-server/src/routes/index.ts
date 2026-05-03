import { Router, type IRouter } from "express";
import healthRouter from "./health";
import anthropicRouter from "./anthropic";
import resignationRouter from "./resignation";

const router: IRouter = Router();

router.use(healthRouter);
router.use(anthropicRouter);
router.use(resignationRouter);

export default router;
