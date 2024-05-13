import { z } from "zod";
import { refineImage } from "./image/refineImage.schema";

export const createProjectSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  live: z.string().url({ message: "Invalid URL for live link." }),
  frontendCode: z.string().url({ message: "Invalid URL for frontend code." }),
  backendCode: z.string().url({ message: "Invalid URL for backend code." }),
  description: z
    .string()
    .min(20, { message: "Description must be 20 characters long." }),
  image: refineImage,
});

export const featureSchema = z.object({
  title: z.string().min(5, { message: "Feature is required." }),
});

export const technologySchema = z.object({
  title: z.string().min(5, { message: "Technology is required." }),
});

export const skillSchema = z.object({
  title: z.string().min(5, { message: "Skill is required." }),
});

export const imageSchema = z.object({
  image: refineImage,
});
