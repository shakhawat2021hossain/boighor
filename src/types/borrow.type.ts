import z from "zod";

export const borrowSchema = z.object({
    quantity: z
        .number({ message: "Quantity should be a number" }),
    dueDate: z.string().min(1, { message: "Due date is required" }),
});

export type borrowFormData = z.infer<typeof borrowSchema>;
