
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface AddUserButtonProps {
  onClick: () => void;
}

export function AddUserButton({ onClick }: AddUserButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-primary/90 text-primary-foreground rounded-xl hover:from-primary/90 hover:to-primary/80 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl overflow-hidden group"
    >
      <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <Plus className="w-5 h-5 relative z-10" />
      <span className="relative z-10 font-semibold">Add User</span>
    </motion.button>
  );
}
