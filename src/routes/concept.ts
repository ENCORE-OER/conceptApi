import express from 'express';
import * as ConceptsController from "../controllers/concept";

const router = express.Router();

router.post("/genMapExt", ConceptsController.genGraphExt);
router.post("/genMapSkill", ConceptsController.genGraphSkill);
router.post("/genMapOers", ConceptsController.genGraphOers);
router.post("/extract", ConceptsController.extractConcepts);

export default router;