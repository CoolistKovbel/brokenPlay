import * as z from "zod";

export const AnnouncmentFormSchema = z.object({
    message: z.string().min(1, 'edd required').max(255, "sorry try to shortnen it..") })