import { ChangeEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormInput } from '../FormInput';
import { UserFormData } from '../../../hooks/useUserForm';

interface UserFormFieldsProps {
  form: UseFormReturn<UserFormData>;
}

export function UserFormFields({ form }: UserFormFieldsProps) {
  const { register, formState: { errors }, setValue } = form;

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^+\d\s\-()]/g, '');
    setValue('phone', value);
  };

  const handleZipcodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setValue('zipcode', value);
  };

  return (
    <>
      <FormInput
        label="Name"
        required
        placeholder="Enter user's full name"
        {...register('name')}
        error={errors.name?.message as string | undefined}
      />

      <FormInput
        label="Email"
        type="email"
        required
        placeholder="Enter user's email address"
        {...register('email')}
        error={errors.email?.message as string | undefined}
      />

      <FormInput
        label="Phone"
        type="tel"
        required
        placeholder="e.g., +1 234 567 8900"
        {...register('phone')}
        onChange={handlePhoneChange}
        error={errors.phone?.message as string | undefined}
      />

      <FormInput
        label="Website"
        placeholder="e.g., example.com"
        {...register('website')}
        error={errors.website?.message as string | undefined}
      />

      <FormInput
        label="Street"
        required
        placeholder="Enter street address"
        {...register('street')}
        error={errors.street?.message as string | undefined}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          label="City"
          required
          placeholder="Enter city name"
          {...register('city')}
          error={errors.city?.message as string | undefined}
        />

        <FormInput
          label="Zipcode"
          type="text"
          required
          placeholder="e.g., 12345"
          {...register('zipcode')}
          onChange={handleZipcodeChange}
          maxLength={10}
          error={errors.zipcode?.message as string | undefined}
        />
      </div>

      <FormInput
        label="Company Name"
        required
        placeholder="Enter company name"
        {...register('companyName')}
        error={errors.companyName?.message as string | undefined}
      />
    </>
  );
}
