export type Nav = {
  name: string;
  path: string;
};

export type BlogPostFrontmatter = {
  frontmatter: BlogPost;
};

export type BlogPost = {
  title: string;
  date: string;
  author: string;
  image: { src: string; alt: string };
  description: string;
  draft: boolean;
  category: string;
  file: string;
  url: string;
};
