import type { ComponentType, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface EditorialButtonProps {
  children: ReactNode;
  icon?: ComponentType<{ className?: string }>;
  href?: string;
  variant?: Variant;
  external?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export function EditorialButton({
  children,
  icon: Icon,
  href,
  variant = 'primary',
  external = false,
  type = 'button',
  onClick,
}: EditorialButtonProps) {
  const className = `btn btn--${variant}`;
  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="btn__icon" />}
    </>
  );

  if (href) {
    return (
      <a
        className={className}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={className} onClick={onClick}>
      {content}
    </button>
  );
}