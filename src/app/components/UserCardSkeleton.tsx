
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function UserCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-lg p-3 sm:p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={20} height={20} />
            <Skeleton width={120} height={20} />
          </div>
          <Skeleton width={150} height={14} className="mb-1" />
          <Skeleton width={100} height={14} className="mb-2" />
        </div>
        <Skeleton circle width={36} height={36} />
      </div>
    </div>
  );
}

