import { z, ZodType } from "zod";

export const publicationSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  paperLink: z.string().url().nullable(),
  category: z.enum(["journal", "conference", "book"]),
  year: z.coerce.number({ message: "Year is required" }),
  links: z
    .object({
      name: z
        .string()
        .min(1, { message: "Link name must be at least 1 character long" }),
      link: z
        .string({ message: "Link is required" })
        .url({ message: "Link must be a valid URL" }),
    })
    .array()
    .nullable(),
  authors: z.string().min(1),
  publisher: z.string().nullable(),
  highlighted: z.boolean(),
  index: z.number().nullable(),
  projectId: z.string().nullable(),
});


export type TPublication = z.infer<typeof publicationSchema>;