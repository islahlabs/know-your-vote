import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  imageUrl: z.string(),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
});

export const ExperienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  position: z.string(),
  duration: z.string(),
  description: z.array(z.string()),
  technologies: z.array(z.string()),
});

export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
