import { z, ZodType } from "zod";
import DOMPurify from "isomorphic-dompurify";

export const projectSchema = z
  .object({
    id: z.string(),
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    image: z.string().nullable(),
    category: z.enum(["cg", "isro", "wbdst", "no-sponsor"]),
    details: z
      .array(
        z.object({
          name: z.string().min(1, { message: "Title is required" }),
          description: z
            .string()
            .min(1, { message: "Description is required" }),
        })
      )
      .nullable(),
    links: z
      .array(
        z.object({
          name: z.string().min(1, { message: "Title is required" }),
          link: z.string().min(1, { message: "Url is required" }),
        })
      )
      .nullable(),
    publications: z
      .object({
        id: z.string(),
        title: z.string(),
        paperLink: z.string(),
        authors: z.string(),
        publisher: z.string(),
      })
      .array()
      .nullable(),
    PI: z.object({
      name: z.string().min(1, { message: "PI name is required" }),
      description: z.string().min(1, { message: "PI description is required" }),
    }),
    CoPI_1: z
      .object({
        name: z.string().min(1, { message: "Co PI 1 name is required" }),
        description: z
          .string()
          .min(1, { message: "Co PI 1 Description is required" }),
      })
      .nullable(),
    CoPI_2: z
      .object({
        name: z.string().min(1, { message: "Co PI 2 name is required" }),
        description: z
          .string()
          .min(1, { message: "Co PI 2 description is required" }),
      })
      .nullable(),
  })
  .transform((data) => {
    return {
      ...data,
      description: DOMPurify.sanitize(data.description),
      details: data.details || [],
      links: data.links || [],
      PI: {
        name: DOMPurify.sanitize(data.PI.name),
        description: DOMPurify.sanitize(data.PI.description),
      },
      CoPI_1:
        data.CoPI_1?.name && data.CoPI_1?.description
          ? {
              name: DOMPurify.sanitize(data.CoPI_1.name),
              description: DOMPurify.sanitize(data.CoPI_1.description),
            }
          : null,
      CoPI_2:
        data.CoPI_2?.name && data.CoPI_2?.description
          ? {
              name: DOMPurify.sanitize(data.CoPI_2.name),
              description: DOMPurify.sanitize(data.CoPI_2.description),
            }
          : null,
    };
  });

export type TProject = z.infer<typeof projectSchema>;
