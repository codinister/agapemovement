'use client';

import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import registerSchema from '@/schema/registerSchema';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const Register = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      age: '',
      discovery: '',
    },
  });

  const handleSubmit = (val: z.infer<typeof registerSchema>) => {
    console.log(val);
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="bg-white p-10 container mx-auto">
        <Link href="/">
          <Button className="outline cursor-pointer">
            <FaLongArrowAltLeft /> Back to home
          </Button>
        </Link>

        <div className="py-6 text-center w-150 mx-auto mb-12">
          <h3>Membership Application</h3>
          <p>
            Join a refined community of purpose-driven people dedicated to
            excellence, continuous growth, and building meaningful
            relationships.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div>
              <h6>Application Details</h6>
              <p className="mt-2 mb-6">
                Please provide the following information. All fields are
                required for consideration.
              </p>

              <strong className="border-b border-b-gray-200 pb-2 mb-6 block w-full">
                Personal Information
              </strong>

              <div>
                <div className="flex gap-4 mb-6">
                  <FormField
                    name="firstname"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-gray-100"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="lastname"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-gray-100"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-4 mb-6">
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-gray-100"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="phone"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-gray-100"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    name="age"
                    control={form.control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field?.value}
                      >
                        <FormLabel>Age Range</FormLabel>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25-34">25-34</SelectItem>
                          <SelectItem value="35-44">35-44</SelectItem>
                          <SelectItem value="45-54">45-54</SelectItem>
                          <SelectItem value="55-64">55-64</SelectItem>
                          <SelectItem value="65+">65+</SelectItem>
                        </SelectContent>
                        <FormMessage />
                      </Select>
                    )}
                  />
                </div>
              </div>

              <div className="mt-12">
                <h6 className="w-full pb-2 border-b border-b-gray-200 mb-6">
                  Personal Statement
                </h6>

                <FormField
                  name="discovery"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>
                        How did you learn about the Movement?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Referral, website,event etc"
                          className="bg-gray-100"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="py-6 border-t border-t-gray-200 mt-12">
                <Button className=" mx-auto flex">Submit Application</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Register;
