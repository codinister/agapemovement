'use client';

import DonationHeader from './DonationHeader';
import {
  Form, 
  FormField, 
  FormItem, 
  FormControl, 
  FormMessage, 
  FormLabel
} from '@/components/ui/form'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {donationSchema} from '@/schema/schema'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from '@/state/redux/donationSlice';
import { useEffect } from 'react';
const DonationInfo = () => {

  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema), 
    defaultValues: {
      first_name: '', 
      last_name: '', 
      email: ''
    }
  })


const dispatch = useDispatch()
const state = useSelector((state: any)=> state.donate).info


  const handleSubmit = (val: z.infer<typeof donationSchema>)=>{
    dispatch(setInfo(val))
  }




  useEffect(() => {
  if (state) {
    form.reset(state);
  }
}, []);



  return (
    <div>
      <DonationHeader
        title="Who's giving today?"
        progressBar="half"
        info="amount"
        showBackBtn={true}
      />
      <p className="my-5">We'll never share this information with anyone.</p>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>

          <FormField 
          name="first_name"
          control={form.control}
          render={
            ({field})=>(
              <FormItem  className="mb-6">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />

          <FormField 
          name="last_name"
          control={form.control}
          render={
            ({field})=>(
              <FormItem className="mb-6">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />

          <FormField 
          name="email"
          control={form.control}
          render={
            ({field})=>(
              <FormItem className="mb-6">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          /> 

        <Button  className="w-full" size="lg">
          Continue <FaLongArrowAltRight />
        </Button>
</form>
</Form>

        
      </div>
    </div>
  );
};

export default DonationInfo;
