import type { ImageMetadata } from "astro";

export type ElementInfo = {
  style?: string;
  className?: string;
}

export type ImageElInfo = {
  image: ImageMetadata;
  alt: string;
  wrap?: boolean;
  noShadow?: boolean;
} & ElementInfo

export type LinkElInfo = {
  href: string | null;
  text: string
} & ElementInfo
