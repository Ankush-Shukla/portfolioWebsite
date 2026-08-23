import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'writing',
    loadComponent: () =>
      import('./pages/writing-page/writing-page').then((m) => m.WritingPage),
  },
  {
    path: 'inspiration',
    loadComponent: () =>
      import('./pages/inspiration-page/inspiration-page').then((m) => m.InspirationPage),
  },
  {
  path: 'writing/:slug',
  loadComponent: () =>
    import('./pages/writing-page/blog-post-page/blog-post-page').then((m) => m.BlogPostPage),
},
  { path: '**', redirectTo: '' },
];
