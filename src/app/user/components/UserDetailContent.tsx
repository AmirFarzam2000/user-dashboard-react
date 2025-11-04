import { BackButton } from './BackButton';
import { UserDetailLoading } from './UserDetailLoading';
import { UserDetailNotFound } from './UserDetailNotFound';
import { UserHeader } from './UserHeader';
import { ContactInfoSection } from './ContactInfoSection';
import { CompanySection } from './CompanySection';
import { AddressSection } from './AddressSection';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { extractUserIdFromSlug } from '../../../lib/utils';
import { useUserDetails } from '../../../hooks/useUserDetails';


export function UserDetailContent() {
  const params = useParams();
  const userId = extractUserIdFromSlug((params as { id?: string }).id || '');
  const { user, isLoading, error } = useUserDetails(userId || 0);

  if (isLoading) {
    return <UserDetailLoading />;
  }

  if (error || !user) {
    return (
      <>
        <BackButton />
        <UserDetailNotFound />
      </>
    );
  }

  return (
    <>
      <BackButton />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-linear-to-br from-card to-card/50 border border-border/50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl"
      >
        <UserHeader user={user} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <ContactInfoSection user={user} />
            <CompanySection user={user} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AddressSection user={user} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
