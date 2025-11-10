import { z } from "zod";

export const bookSchema = z.object({
    title: z
        .string()
        .min(2, { message: "Title must be at least 2 characters long" })
        .max(100, { message: "Title must be less than 100 characters" }),
    author: z
        .string()
        .min(2, { message: "Author name must be at least 2 characters long" }),
    genre: z.enum(['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']),
    isbn: z
        .string()
        .min(10, { message: "ISBN must be at least 10 characters" })
        .max(13, { message: "ISBN must not exceed 13 characters" }),
    description: z
        .string()
        .max(500, { message: "Description must be less than 500 characters" })
        .optional(),
    copies: z
        .number({ message: "Copies must be a number" })
        .min(1, { message: "At least one copy is required" }),

    available: z
        .boolean()
        .default(true)

});


export type bookFormData = z.infer<typeof bookSchema>;