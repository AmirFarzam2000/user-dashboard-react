
import { User } from '../../types';
import { UserCard } from './UserCard';

interface UsersGridProps {
  users: User[];
  onUserClick: (user: User) => void;
  onDeleteClick: (user: User, e: React.MouseEvent) => void;
}

export function UsersGrid({ users, onUserClick, onDeleteClick }: UsersGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => onUserClick(user)}
          className="cursor-pointer"
        >
          <UserCard user={user} onDelete={onDeleteClick} />
        </div>
      ))}
    </div>
  );
}
