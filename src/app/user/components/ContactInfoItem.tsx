import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export function ContactInfoItem({ icon: Icon, label, value, href }: ContactInfoItemProps) {
  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium hover:underline"
    >
      {value}
    </a>
  ) : (
    <p className="font-medium">{value}</p>
  );

  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        {content}
      </div>
    </div>
  );
}

