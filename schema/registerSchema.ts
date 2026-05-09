import { z } from 'zod';

export default z.object({
  firstname: z.string().min(1, 'First Name field required!'),
  lastname: z.string().min(1, 'Last Name field required!'),
  email: z.string().email('Valid email required!'),
  phone: z.string().min(10, 'Valid phone required!'),
  age: z.string().min(1, 'Age field required!'),
  discovery: z.string().min(3, 'Field required!'),
});
