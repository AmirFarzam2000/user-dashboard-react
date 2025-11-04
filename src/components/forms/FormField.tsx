import { ReactNode } from 'react';

interface FormFieldProps {
  children: ReactNode;
}

export function FormField({ children }: FormFieldProps) {
  return <div className="space-y-5">{children}</div>;
}

