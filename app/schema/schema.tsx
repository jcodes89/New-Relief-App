import { z} from 'zod';

const schema = z.object({
    name: z.string().min(3).nullish(),
    email: z.string().email().min(3).max(50).nullish(),
    role: z.string().default('volunteer').nullish(),
    number: z.string().min(10).max(15).nullish(),
    status: z.string().default("active").nullish(),
    createdAt: z.date().nullish(),
    image: z.string().nullish(),
    emailVerified: z.date().nullish(),
    password: z.string().min(6).max(14).nullish()
    
});

export default schema;