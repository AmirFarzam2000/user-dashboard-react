
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'default' | 'destructive';
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  description = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'default',
}: ConfirmationDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] border-border/50 shadow-2xl">
        <DialogHeader>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
            className="flex items-center gap-3"
          >
            {variant === 'destructive' && (
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22h20L12 2z" fill="#dc2626" />
                  <path d="M12 9v3M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            )}
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          </motion.div>
          <DialogDescription className="pt-3 text-base">{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-3 mt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="px-4 py-2.5 bg-white text-black border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
          >
            {cancelText}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleConfirm}
            className={`px-4 py-2.5 rounded-xl transition-all duration-200 font-medium hover:opacity-90 ${
              variant === 'destructive'
                ? 'bg-red-600 text-white'
                : 'bg-black text-white'
            }`}
          >
            {confirmText}
          </motion.button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
