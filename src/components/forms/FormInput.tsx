import { InputHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, required, className = '', ...props }, ref) => {
    return (
      <div className="group">
        <label className="block text-sm font-semibold mb-2.5 text-foreground">
          {label} {required && <span className="text-destructive">*</span>}
        </label>
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-linear-to-br from-input to-input/50 border border-border/50 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm ${className}`}
          {...props}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-destructive text-sm mt-2 flex items-center gap-1"
          >
            <span className="text-xs">⚠️</span>
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
