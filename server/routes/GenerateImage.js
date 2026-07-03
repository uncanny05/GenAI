import express from "express";
import {} from "../controllers/Posts.js";
import { generateImage } from "../controllers/GenerateAIImage.js";

const router = express.Router();

router.post("/", generateImage);

export default router;
