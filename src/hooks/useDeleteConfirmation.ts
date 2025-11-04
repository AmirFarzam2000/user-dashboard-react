import { useState } from 'react';
import { User } from '../types';

export function useDeleteConfirmation() {
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    user: User | null;
  }>({ isOpen: false, user: null });

  const openDeleteModal = (user: User) => {
    setDeleteModalState({ isOpen: true, user });
  };

  const closeDeleteModal = () => {
    setDeleteModalState({ isOpen: false, user: null });
  };

  return {
    deleteModalState,
    openDeleteModal,
    closeDeleteModal,
  };
}

