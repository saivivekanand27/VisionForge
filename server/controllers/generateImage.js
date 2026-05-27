import * as dotenv from "dotenv";
import { HfInference } from "@huggingface/inference";
import createError from "../error.js";

dotenv.config();

const hf = new HfInference(process.env.HF_API_KEY);

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const image = await hf.textToImage({
      model: "black-forest-labs/FLUX.1-schnell",
      inputs: prompt,
    });

    const buffer = Buffer.from(await image.arrayBuffer());

    const base64Image = buffer.toString("base64");

    res.status(200).json({
      photo: `data:image/png;base64,${base64Image}`,
    });

  } catch (err) {

    console.log("FULL ERROR:", err);

    next(
      createError(
        500,
        err.message || "Image generation failed"
      )
    );
  }
};