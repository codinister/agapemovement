import {z} from 'zod'

export const donationSchema = z.object({
    first_name: z.string().min(1, 'First name required!'), 
    last_name: z.string().min(1, 'Last name required!'), 
    email: z.string().email('Invalid email address!')
})