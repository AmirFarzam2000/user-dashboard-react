import { UserIcon, Mail, Building2 } from 'lucide-react';
import { User } from '../../types';

interface UserCardContentProps {
  user: User;
}

export function UserCardContent({ user }: UserCardContentProps) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center">
          <UserIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        <h3 className="text-base sm:text-lg font-bold truncate group-hover:text-primary transition-colors">
          {user.name}
        </h3>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
          <p className="text-xs sm:text-sm text-muted-foreground truncate">{user.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-muted-foreground shrink-0" />
          <p className="text-xs sm:text-sm text-muted-foreground truncate">
            {user.company.name}
          </p>
        </div>
      </div>
    </div>
  );
}
