"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"


const formSchema = z.object({
  email: z.string().min(2, {
    message: "invalid email",
  }),
  password: z.string().min(8, {
    message: "invalid password"
  })
})

export function AuthForm({formAction, title, button }) {

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <h1 className="font-semibold text-2xl text-yellow-600">{ title }</h1>
        <FormDescription>
           Welcome back you've been missed!
        </FormDescription>
        <FormField
          control={form.control}
          name='email'
          render={({ email }) => (
            <FormItem className="sm:w-[300px]">
              <FormControl>
                <Input type='email' name='email' placeholder="joseph@example.com" {...email} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Password */}
        <FormField
        control={form.control}
        name='password'
        render={({ password }) => (
          <FormItem>
            <FormControl>
                <Input type='password' name='password' placeholder='password' {...password}/>
              </FormControl>
              <FormMessage/>
          </FormItem>
        )}
        />
        <FormItem className='text-right'>
          <Link href={'#'} className="font-light text-yellow-600">forgot password?</Link>
        </FormItem>
        <Button formAction={ formAction } type="submit" className="w-[300px] bg-yellow-600 hover:bg-yellow-700">{ button }</Button>
      </form>
    </Form>
  )
}