import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../app/api/user';
import { useLocalUsers } from '../store/useLocalUsers';
import { User } from '../types';


export function useUsers() {
  const { localUsers, isUserDeleted } = useLocalUsers();

  const { data: apiUsers = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  const allUsers = useMemo(() => {
    const combined = [...apiUsers, ...localUsers];
    return combined.filter((user) => !isUserDeleted(user.id));
  }, [apiUsers, localUsers, isUserDeleted]);

  const filterUsers = (users: User[], searchQuery: string): User[] => {
    if (!searchQuery.trim()) return users;
    const query = searchQuery.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  };

  return {
    allUsers,
    isLoading,
    filterUsers,
  };
}

