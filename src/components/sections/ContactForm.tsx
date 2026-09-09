'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { contactSchema, type ContactSchema } from '@/lib/validations';
import { products } from '@/data/products';
import type { FormStatus } from '@/types';

const productOptions = [
  { value: '', label: 'Select a product' },
  ...products.map((p) => ({ value: p.id, label: p.name })),
  { value: 'general', label: 'General Inquiry' },
];

interface ContactFormProps {
  defaultProduct?: string;
  variant?: 'page' | 'section';
}

export function ContactForm({
  defaultProduct = '',
  variant = 'page',
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: { product: defaultProduct },
  });

  const onSubmit = async (data: ContactSchema) => {
    setStatus('loading');
    try {
      // TODO: Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log('Form submission:', data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-green-800/40 bg-green-950/20 p-10 text-center">
        <CheckCircle className="h-10 w-10 text-green-400" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-slate-100">
          Message Received
        </h3>
        <p className="max-w-sm text-sm text-slate-400">
          Thank you for reaching out. Our team will contact you within one
          business day.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          id="name"
          label="Full Name"
          placeholder="Your full name"
          required
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          id="company"
          label="Company"
          placeholder="Your company or firm"
          error={errors.company?.message}
          {...register('company')}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="you@company.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          id="phone"
          type="tel"
          label="Phone"
          placeholder="+1 000 000 0000"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          id="country"
          label="Country"
          placeholder="Your country"
          error={errors.country?.message}
          {...register('country')}
        />
        <Select
          id="product"
          label="Product of Interest"
          options={productOptions}
          placeholder="Select a product"
          error={errors.product?.message}
          {...register('product')}
        />
      </div>

      <Textarea
        id="message"
        label="Message"
        placeholder="Tell us about your project and how we can help…"
        required
        rows={5}
        error={errors.message?.message}
        {...register('message')}
      />

      {status === 'error' && (
        <div
          className="flex items-center gap-2 rounded-lg border border-red-800/40 bg-red-950/20 px-4 py-3 text-sm text-red-400"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <span>
            Something went wrong. Please try again or email us directly.
          </span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={status === 'loading'}
        className={variant === 'page' ? 'w-full sm:w-auto' : 'w-full'}
      >
        Send Message
      </Button>
    </form>
  );
}
