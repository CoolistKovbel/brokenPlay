import * as z from "zod";

export const AnnouncmentFormSchema = z.object({
    message: z.string().min(24, 'Make it worth to announce').max(255, "sorry try to shortnen it..") })