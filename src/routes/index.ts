import express from 'express';

import conceptsRouter from "./concept";

const router = express.Router();

router.use("/api/concept", conceptsRouter);

export default router;