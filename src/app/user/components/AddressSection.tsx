import { MapPin } from 'lucide-react';
import { User } from '../../../types';

interface AddressSectionProps {
  user: User;
}

export function AddressSection({ user }: AddressSectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Address</h2>
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
        <div>
          <p className="text-sm text-muted-foreground">Location</p>
          <p className="font-medium">
            {user.address.street}
            {user.address.suite && `, ${user.address.suite}`}
          </p>
          <p className="font-medium">
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
}

