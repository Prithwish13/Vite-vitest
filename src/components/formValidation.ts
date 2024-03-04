import { z } from 'zod';

export const formValidation = z
  .object({
    username: z.string().min(5).max(20),
    password: z.string().min(5),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });

export type LoginFormValues = z.infer<typeof formValidation>;
