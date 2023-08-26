export interface AbstractLink {
  text: string;
  active?: boolean;
  className?: string;
}

export interface SingleLink extends AbstractLink {
  href: string;
}

export interface MultipleLink extends AbstractLink {
  links: SingleLink[];
}

export type Link = SingleLink | MultipleLink;
