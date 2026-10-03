import type { ReactNode } from 'react';

interface SectionHeaderProps {
  number?: string;
  eyebrow: string;
  title: ReactNode;
}

/**
 * Shared section header — "01 / ABOUT" + display heading.
 * Used at the top of every non-hero section.
 */
export function SectionHeader({ number, eyebrow, title }: SectionHeaderProps) {
  return (
    <header className="sectionHeader">
      {number && <div className="sectionHeader__number">{number}</div>}
      <div>
        <p className="sectionHeader__eyebrow">{eyebrow}</p>
        <h2 className="sectionHeader__title">{title}</h2>
      </div>
    </header>
  );
}