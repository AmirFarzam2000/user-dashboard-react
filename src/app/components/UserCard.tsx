
import { motion } from 'framer-motion';
import { UserCardContent } from './UserCardContent';
import { UserCardDeleteButton } from './UserCardDeleteButton';
import { User } from '../../types';

interface UserCardProps {
  user: User;
  onDelete: (user: User, e: React.MouseEvent) => void;
}

export function UserCard({ user, onDelete }: UserCardProps) {
  const handleDelete = (e: React.MouseEvent) => {
    onDelete(user, e);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-linear-to-br from-card to-card/50 border border-border/50 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br dark:from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-500" />
      <div className="relative flex items-start justify-between gap-4">
        <UserCardContent user={user} />
        <UserCardDeleteButton onClick={handleDelete} />
      </div>
    </motion.div>
  );
}
