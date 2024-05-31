import { z, ZodType } from "zod";

export const newsSchema = z.object({
  id: z.string().min(1, { message: "Id is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  date: z.coerce.date({ message: "Date is required" }),
  featured: z.boolean({ message: "Featured is required" }),
});

export type TNews = z.infer<typeof newsSchema>;