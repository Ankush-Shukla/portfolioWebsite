export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: 'Blog' | 'Research';
  content: string[];
}

// Add your real posts here. Each entry automatically gets its own page at
// /writing/<slug> and shows up in the list on the Writing page —
// no routing or template changes needed, just add an object below.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'sample-post',
    title: 'Sample post — replace or delete me',
    summary:
      'A placeholder showing how a post looks once it has its own page on the site. Swap this for real writing whenever you\'re ready.',
    date: 'Jul 2026',
    tag: 'Blog',
    content: [
      'This paragraph is placeholder text. Everything in this post\'s "content" array renders as its own paragraph on the post page below.',
      'Delete this object from BLOG_POSTS once you have a real post to publish, or just edit it directly in place.',
    ],
  },
];