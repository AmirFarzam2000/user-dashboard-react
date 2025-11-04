import { motion } from 'framer-motion';

interface FormActionsProps {
  onCancel: () => void;
  submitLabel: string;
  isSubmitting: boolean;
  cancelLabel?: string;
}

export function FormActions({
  onCancel,
  submitLabel,
  isSubmitting,
  cancelLabel = 'Cancel',
}: FormActionsProps) {
  return (
    <div className="flex gap-3 pt-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        onClick={onCancel}
        className="flex-1 px-4 py-3 bg-white text-black border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold"
      >
        {cancelLabel}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="flex-1 px-4 py-3 bg-black text-white rounded-xl hover:opacity-90 transition-all duration-200 disabled:opacity-50 font-semibold"
      >
        {isSubmitting ? 'Processing...' : submitLabel}
      </motion.button>
    </div>
  );
}
