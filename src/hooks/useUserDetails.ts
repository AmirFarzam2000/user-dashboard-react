import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../app/api/user';
import { useLocalUsers } from '../store/useLocalUsers';


export function useUserDetails(userId: number) {
  const { localUsers, isUserDeleted } = useLocalUsers();
  
  const localUser = useMemo(() => {
    return localUsers.find((u) => u.id === userId);
  }, [localUsers, userId]);

  const { data: apiUser, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserById(userId),
    enabled: !localUser && userId > 0 && !isUserDeleted(userId),
  });

  const user = useMemo(() => {
    if (localUser) return localUser;
    if (apiUser && !isUserDeleted(userId)) return apiUser;
    return null;
  }, [localUser, apiUser, userId, isUserDeleted]);

  const isLoadingState = useMemo(() => {
    if (localUser) return false;
    return isLoading;
  }, [localUser, isLoading]);

  return {
    user,
    isLoading: isLoadingState,
    error,
  };
}

