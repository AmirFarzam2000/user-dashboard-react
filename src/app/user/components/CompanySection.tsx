import { Building } from 'lucide-react';
import { User } from '../../../types';

interface CompanySectionProps {
  user: User;
}

export function CompanySection({ user }: CompanySectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Company</h2>
      <div className="flex items-start gap-3">
        <Building className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
        <div>
          <p className="text-sm text-muted-foreground">Company Name</p>
          <p className="font-medium">{user.company.name}</p>
          {user.company.catchPhrase && (
            <p className="text-sm text-muted-foreground italic mt-1">
              &quot;{user.company.catchPhrase}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

