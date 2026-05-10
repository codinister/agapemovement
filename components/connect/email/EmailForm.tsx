'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import emailType from '@/types/emailType';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

const EmailForm = () => {
  const form = useForm<z.infer<typeof emailType>>({
    resolver: zodResolver(emailType),
    defaultValues: {
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleSubmit = (val: z.infer<typeof emailType>) => {
    console.log(val);
  };

  return (
    <div className="top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] sm:w-100 w-80 fixed  z-55 p-6 bg-white">

      <h5 className="mb-6 text-center">Get in touch</h5>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="subject"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field}> </Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full">Send message</Button>
        </form>
      </Form>
    </div>
  );
};

export default EmailForm;
