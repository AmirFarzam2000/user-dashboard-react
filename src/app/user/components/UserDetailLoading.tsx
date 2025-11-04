
import { Loader2 } from 'lucide-react';

export function UserDetailLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="w-12 h-12 animate-spin text-muted-foreground mb-4" />
      <p className="text-muted-foreground">Loading user details...</p>
    </div>
  );
}

