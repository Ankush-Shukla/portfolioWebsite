import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'writing',
    loadComponent: () =>
      import('./components/writing-page/writing-page').then((m) => m.WritingPage),
  },
  {
    path: 'inspiration',
    loadComponent: () =>
      import('./components/inspiration-page/inspiration-page').then((m) => m.InspirationPage),
  },
  {
  path: 'writing/:slug',
  loadComponent: () =>
    import('./components/writing-page/blog-post-page/blog-post-page').then((m) => m.BlogPostPage),
},
  { path: '**', redirectTo: '' },
];
