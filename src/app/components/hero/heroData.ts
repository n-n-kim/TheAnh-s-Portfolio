import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  Search,
  Package,
  Truck,
  Megaphone,
  BarChart3,
  Ship,
  Link2,
} from 'lucide-react';

/**
 * Hero section static data.
 *
 * `tier` controls visual depth in the orbiting tag composition:
 *   - "near" : closest to the face, slightly forward in the composition
 *   - "mid"  : standard
 *   - "far"  : pushed further out, slightly muted (opacity 0.92, scale 0.97)
 *
 * `position` is a coarse region used by the responsive CSS to keep tags
 * out of facial zones (no labels in the central column on desktop).
 */

export const multilingualGreetings: string[] = [
  'Hello',
  'Hola',
  'Bonjour',
  'Hallo',
  'Ciao',
  'Olá',
  'こんにちは',
  '안녕하세요',
  'Xin chào',
];

export type TagTier = 'near' | 'mid' | 'far';

export interface SkillTag {
  label: string;
  Icon: LucideIcon;
  /** Coarse orbital position. CSS places it precisely per breakpoint. */
  position:
    | 'top-left'
    | 'top-right'
    | 'mid-left'
    | 'mid-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-far-left'
    | 'top-far-right'
    | 'bottom-far-left'
    | 'bottom-far-right';
  /** Subtle static rotation in degrees. Tags do NOT rotate continuously. */
  rotate: number;
  /** Visual depth tier. */
  tier: TagTier;
  /** Float animation delay so tags move asynchronously. */
  delay: number;
}

/**
 * Order matters: this controls the on-page DOM order which affects
 * accessibility reading order. We list them in roughly clockwise order
 * starting from the top-left.
 */
export const floatingSkills: SkillTag[] = [
  {
    label: 'International Business',
    Icon: Globe,
    position: 'top-left',
    rotate: -2,
    tier: 'near',
    delay: 0,
  },
  {
    label: 'Market Research',
    Icon: Search,
    position: 'top-right',
    rotate: 2,
    tier: 'near',
    delay: 0.5,
  },
  {
    label: 'Product Development',
    Icon: Package,
    position: 'top-far-left',
    rotate: -3,
    tier: 'far',
    delay: 1.2,
  },
  {
    label: 'Logistics Operations',
    Icon: Truck,
    position: 'top-far-right',
    rotate: 3,
    tier: 'far',
    delay: 0.9,
  },
  {
    label: 'Business Analysis',
    Icon: BarChart3,
    position: 'mid-right',
    rotate: 1,
    tier: 'mid',
    delay: 0.3,
  },
  {
    label: 'Import-Export',
    Icon: Ship,
    position: 'bottom-left',
    rotate: 2,
    tier: 'near',
    delay: 1.7,
  },
  {
    label: 'Supply Chain',
    Icon: Link2,
    position: 'bottom-right',
    rotate: -2,
    tier: 'near',
    delay: 0.4,
  },
  {
    label: 'Content Marketing',
    Icon: Megaphone,
    position: 'bottom-far-left',
    rotate: -1,
    tier: 'far',
    delay: 1.4,
  },
];