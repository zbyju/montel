export type ElementInfo = {
  style?: string;
  className?: string;
}

export type ImageElInfo = {
  href: string;
  alt: string;
} & ElementInfo

export type LinkElInfo = {
  href: string | null;
  text: string
} & ElementInfo
