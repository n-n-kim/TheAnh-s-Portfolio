import type { ComponentType, ReactNode } from 'react';

export type PillVariant = 'solid' | 'quiet' | 'outline';

interface PillProps {
  children: ReactNode;
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>;
  variant?: PillVariant;
  className?: string;
}

/**
 * Reusable pill — same visual language as the Hero's orbiting skill tags.
 * Use `quiet` or `outline` in dense sections; reserve `solid` for emphasis.
 */
export function Pill({ children, icon: Icon, variant = 'quiet', className = '' }: PillProps) {
  const variantClass =
    variant === 'solid' ? '' : variant === 'quiet' ? 'pill--quiet' : 'pill--outline';
  return (
    <span className={`pill ${variantClass} ${className}`.trim()}>
      {Icon && <Icon className="pill__icon" strokeWidth={1.5} />}
      <span>{children}</span>
    </span>
  );
}