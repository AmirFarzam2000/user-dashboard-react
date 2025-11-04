import { toast } from 'react-toastify';


import { motion } from 'framer-motion';
import { useLocalUsers } from '../../store/useLocalUsers';
import { UserFormData, useUserForm } from '../../hooks/useUserForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { FormField } from '../../components/forms/FormField';
import { UserFormFields } from '../../components/forms/add-user/UserFormFields';
import { FormActions } from '../../components/forms/FormActions';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddUserModal({ isOpen, onClose }: AddUserModalProps) {
  const { addUser } = useLocalUsers();
  const { form, isSubmitting, setIsSubmitting, createUserFromFormData, resetForm } = useUserForm();

  const onSubmit = async (data: UserFormData) => {
    setIsSubmitting(true);
    const newUser = createUserFromFormData(data);
    addUser(newUser);
    resetForm();
    onClose();
    toast.success('User added successfully!');
  };

  return (
    <Dialog   open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh]  overflow-y-auto border-border/50 shadow-2xl">
        <DialogHeader>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <DialogTitle className="text-2xl sm:text-3xl   font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text ">
              Add New User
            </DialogTitle>
          </motion.div>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField>
            <UserFormFields form={form} />
          </FormField>

          <FormActions
            onCancel={onClose}
            submitLabel="Add User"
            isSubmitting={isSubmitting}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
