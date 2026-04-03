export interface Project {
  title: string;
  description: string;
  tag: string;
  link?: string;
  subdomain?: string;
}

export interface Thought {
  title: string;
  date: string;
  preview: string;
  slug?: string;
}
