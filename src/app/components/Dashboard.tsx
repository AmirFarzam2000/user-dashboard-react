import { useState } from 'react';
import { toast } from 'react-toastify';

import { DashboardHeader } from './DashboardHeader';
import { SearchBar } from './SearchBar';
import { AddUserButton } from './AddUserButton';
import { LoadingState } from './LoadingState';
import { EmptyState } from './EmptyState';
import { UsersGrid } from './UsersGrid';
import { UsersCounter } from './UsersCounter';
import { AddUserModal } from './AddUserModal';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import { useLocalUsers } from '../../store/useLocalUsers';
import { useDeleteConfirmation } from '../../hooks/useDeleteConfirmation';
import { createUserSlug } from '../../lib/utils';
import { User } from '../../types';
import { ConfirmationDialog } from '../../components/ConfirmationDialog';


export function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { allUsers, isLoading, filterUsers } = useUsers();
  const { removeUser } = useLocalUsers();
  const { deleteModalState, openDeleteModal, closeDeleteModal } = useDeleteConfirmation();

  const filteredUsers = filterUsers(allUsers, searchQuery);

  const handleUserClick = (user: User) => {
    const slug = createUserSlug(user.id, user.name);
    navigate(`/user/${slug}`);
  };

  const handleDeleteClick = (user: User, e: React.MouseEvent) => {
    e.stopPropagation();
    openDeleteModal(user);
  };

  const handleConfirmDelete = () => {
    if (deleteModalState.user) {
      const userName = deleteModalState.user.name;
      removeUser(deleteModalState.user.id);
      toast.success(`${userName} has been deleted successfully!`);
    }
  };

  return (
    <>
      <DashboardHeader />

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <AddUserButton onClick={() => setIsModalOpen(true)} />
      </div>

      {isLoading ? (
        <LoadingState />
      ) : filteredUsers.length === 0 ? (
        <EmptyState hasSearchQuery={!!searchQuery} />
      ) : (
        <UsersGrid
          users={filteredUsers}
          onUserClick={handleUserClick}
          onDeleteClick={handleDeleteClick}
        />
      )}

      {!isLoading && filteredUsers.length > 0 && (
        <UsersCounter current={filteredUsers.length} total={allUsers.length} />
      )}

      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <ConfirmationDialog
        isOpen={deleteModalState.isOpen}
        onClose={closeDeleteModal}
        onConfirm={handleConfirmDelete}
        title="Delete User"
        description={`Are you sure you want to delete ${deleteModalState.user?.name}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="destructive"
      />
    </>
  );
}
