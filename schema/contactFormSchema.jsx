import  {z} from 'zod';
// 
export const  contactFormSchema = z.object({
name: z.string(),
phoneNumber:z.number().min(10,{message:"Number must be at least 10 Digit"}),
email:z.string(/^[a-zA-Z0-9._%+-]+/,"Please enter valid email "),
message: z.string().min(20,{message:"Message must be at least 20 Characters"}).max(300,{message:""})
})
