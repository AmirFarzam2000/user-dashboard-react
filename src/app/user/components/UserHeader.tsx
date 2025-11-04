
import { User as UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { User } from '../../../types';

interface UserHeaderProps {
  user: User;
}

export function UserHeader({ user }: UserHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-4 sm:gap-6 mb-8 pb-8 border-b border-border"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0 shadow-lg"
      >
        <UserIcon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
      </motion.div>
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl text-muted-foreground sm:text-4xl font-bold mb-2 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text"
        >
          {user.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-muted-foreground font-medium"
        >
          @{user.username}
        </motion.p>
      </div>
    </motion.div>
  );
}
