import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface LocalUsersState {
  localUsers: User[];
  deletedUserIds: number[]; 
  addUser: (user: User) => void;
  removeUser: (userId: number) => void;
  isUserDeleted: (userId: number) => boolean;
}

export const useLocalUsers = create<LocalUsersState>()(
  persist(
    (set, get) => ({
      localUsers: [],
      deletedUserIds: [],
      addUser: (user) =>
        set((state) => ({
          localUsers: [...state.localUsers, user],
        })),
      removeUser: (userId) =>
        set((state) => {
          const updatedLocalUsers = state.localUsers.filter(
            (u) => u.id !== userId
          );
          const updatedDeletedIds = state.deletedUserIds.includes(userId)
            ? state.deletedUserIds
            : [...state.deletedUserIds, userId];

          return {
            localUsers: updatedLocalUsers,
            deletedUserIds: updatedDeletedIds,
          };
        }),
      isUserDeleted: (userId) => {
        return get().deletedUserIds.includes(userId);
      },
    }),
    {
      name: 'local-users-storage',
    }
  )
);

