
import { Trash2 } from 'lucide-react';

interface UserCardDeleteButtonProps {
  onClick: (e: React.MouseEvent) => void;
}

export function UserCardDeleteButton({ onClick }: UserCardDeleteButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-destructive/10 rounded-lg transition-colors group"
      aria-label="Delete user"
    >
      <Trash2 className="w-5 h-5 text-muted-foreground group-hover:text-destructive" />
    </button>
  );
}

