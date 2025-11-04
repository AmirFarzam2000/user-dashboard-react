
import { Users, SearchX } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  hasSearchQuery: boolean;
}

export function EmptyState({ hasSearchQuery }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, type: 'spring' }}
      >
        {hasSearchQuery ? (
          <SearchX className="w-20 h-20 text-muted-foreground/50 mb-6" />
        ) : (
          <Users className="w-20 h-20 text-muted-foreground/50 mb-6" />
        )}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold mb-2 bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
      >
        No users found
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground text-center max-w-md"
      >
        {hasSearchQuery
          ? 'Try adjusting your search query to find what you&apos;re looking for'
          : 'Get started by adding your first user to the dashboard'}
      </motion.p>
    </motion.div>
  );
}
