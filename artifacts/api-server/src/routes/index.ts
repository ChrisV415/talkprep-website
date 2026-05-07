import { Router, type IRouter } from "express";
import healthRouter from "./health";
import anthropicRouter from "./anthropic";
import resignationRouter from "./resignation";
import subscribeRouter from "./subscribe";

const router: IRouter = Router();

router.use(healthRouter);
router.use(anthropicRouter);
router.use(resignationRouter);
router.use(subscribeRouter);

export default router;
