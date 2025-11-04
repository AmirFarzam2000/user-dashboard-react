
import { motion } from 'framer-motion';

interface UsersCounterProps {
  current: number;
  total: number;
}

export function UsersCounter({ current, total }: UsersCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 text-center"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full">
        <span className="text-sm font-medium text-foreground">
          Showing <span className="font-bold text-primary">{current}</span> of{' '}
          <span className="font-bold text-primary">{total}</span> users
        </span>
      </div>
    </motion.div>
  );
}
