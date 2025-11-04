import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User } from '../types';

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Invalid email address').toLowerCase(),
  phone: z.string()
    .min(10, 'Phone must be at least 10 digits')
    .regex(/^\+?[\d\s\-()]+$/, 'Phone can only contain numbers, spaces, hyphens, parentheses, and +'),
  website: z.string().optional()
    .refine((val) => !val || /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(val.replace(/^https?:\/\//, '')),
      'Website must be a valid domain'),
  street: z.string().min(3, 'Street must be at least 3 characters'),
  city: z.string().min(2, 'City must be at least 2 characters').regex(/^[a-zA-Z\s-']+$/, 'City can only contain letters and spaces'),
  zipcode: z.string().regex(/^\d{5,10}$/, 'Zipcode must be 5-10 digits'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
});

export type UserFormData = z.infer<typeof userSchema>;

export function useUserForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const createUserFromFormData = (data: UserFormData): User => {
    const localUserId = -(Date.now() % 1000000);

    return {
      id: localUserId,
      name: data.name,
      username: data.name.toLowerCase().replace(/\s+/g, '_'),
      email: data.email,
      phone: data.phone,
      website: data.website || '',
      address: {
        street: data.street,
        suite: '',
        city: data.city,
        zipcode: data.zipcode,
        geo: { lat: '0', lng: '0' },
      },
      company: {
        name: data.companyName,
        catchPhrase: '',
        bs: '',
      },
    };
  };

  const resetForm = () => {
    form.reset();
    setIsSubmitting(false);
  };

  return {
    form,
    isSubmitting,
    setIsSubmitting,
    createUserFromFormData,
    resetForm,
  };
}
