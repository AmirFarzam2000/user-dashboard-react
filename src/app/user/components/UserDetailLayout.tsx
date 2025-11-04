import { ThemeToggle } from "../../../components/ThemeToggle";


interface UserDetailLayoutProps {
  children: React.ReactNode;
}

export function UserDetailLayout({ children }: UserDetailLayoutProps) {
  return (
    <div className="min-h-screen  from-background via-background to-background/90">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      <div className="relative">
        <ThemeToggle />
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
          {children}
        </div>
      </div>
    </div>
  );
}
