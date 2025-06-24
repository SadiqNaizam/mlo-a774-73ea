import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This will be type-safe and validated.
    console.log(values);
    // Login logic would go here.
  }

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="p-8 pb-4">
        <CardTitle className="text-2xl font-bold text-center text-primary-text">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-secondary-text">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className="h-auto bg-transparent px-1 py-2 rounded-none border-0 border-b border-input focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-secondary-text">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      className="h-auto bg-transparent px-1 py-2 rounded-none border-0 border-b border-input focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-start">
              <Button
                type="button"
                variant="link"
                className="p-0 h-auto text-sm font-normal text-secondary-text hover:text-primary"
              >
                Forgot Password
              </Button>
            </div>
            <div className="pt-2">
              <Button type="submit" className="w-full rounded-lg" size="lg">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
