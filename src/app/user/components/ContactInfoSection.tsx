import { Mail, Phone, Globe } from 'lucide-react';
import { ContactInfoItem } from './ContactInfoItem';
import { User } from '../../../types';

interface ContactInfoSectionProps {
  user: User;
}

export function ContactInfoSection({ user }: ContactInfoSectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <div className="space-y-3">
        <ContactInfoItem
          icon={Mail}
          label="Email"
          value={user.email}
        />
        <ContactInfoItem
          icon={Phone}
          label="Phone"
          value={user.phone}
        />
        {user.website && (
          <ContactInfoItem
            icon={Globe}
            label="Website"
            value={user.website}
            href={`https://${user.website}`}
          />
        )}
      </div>
    </div>
  );
}

